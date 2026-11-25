import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const baseURL = process.env.PREVIEW_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];
const results = [];
const routes = ["/", "/verdaqua", "/research", "/about", "/contact"];
const navLinks = { Verdaqua: "/verdaqua", Research: "/research", About: "/about", Contact: "/contact" };
await mkdir("artifacts", { recursive: true });

try {
  for (const width of [1536, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: width > 760 ? 1024 : 844 }, isMobile: width < 761, hasTouch: width < 761 });
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200, `${width}px ${route} responds successfully`);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("h1").count(), 1, `${route} has one main heading`);
      assert.ok((await page.title()).includes("Luminari Synergy"));
      if (route !== "/") assert.ok((await page.title()).startsWith(route.slice(1)[0].toUpperCase() + route.slice(2)));
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.equal(overflow, false, `${width}px ${route} has no horizontal overflow`);

      for (const [label, target] of Object.entries(navLinks)) {
        const link = page.getByRole("navigation").getByRole("link", { name: label, exact: true });
        assert.equal(await link.getAttribute("href"), target);
        const box = await link.boundingBox();
        assert.ok(box.height >= 44, `${label} has a 44px touch target`);
      }

      const destinations = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")))]);
      for (const destination of destinations) {
        const targetResponse = await context.request.get(`${baseURL}${destination.split("#")[0]}`);
        assert.equal(targetResponse.status(), 200, `Link target ${destination} exists`);
        if (destination.includes("#")) {
          const targetMarkup = await targetResponse.text();
          assert.ok(targetMarkup.includes(`id="${destination.split("#")[1]}"`), `Anchor ${destination} exists`);
        }
      }

      if (route === "/") {
        assert.equal(await page.locator("h1").innerText(), "Better starts\nfor growers.");
        assert.ok(await page.locator(".hero-image").evaluate((img) => img.complete && img.naturalWidth > 0));
        const copy = await page.locator(".hero-copy").boundingBox();
        const image = await page.locator(".hero-image").boundingBox();
        if (width < 761) assert.ok(copy.y + copy.height < image.y, "Mobile copy and CTA appear before the photo");
        else {
          assert.ok(copy.x < image.x && copy.y < image.y + image.height, "Desktop hero has two columns");
          const heading = await page.locator("h1").evaluate((el) => ({ height: el.getBoundingClientRect().height, lineHeight: Number.parseFloat(getComputedStyle(el).lineHeight) }));
          assert.ok(heading.height < heading.lineHeight * 2.1, "Desktop headline stays on the approved two lines");
        }
      }

      if (route === "/contact" && !process.env.EXPECT_CONTACT_EMAIL) {
        assert.ok(await page.getByRole("button", { name: "Enquiries opening soon" }).isDisabled());
        assert.equal(await page.locator('a[href^="mailto:"]').count(), 0);
        assert.ok(await page.getByText("This form is a preview and cannot send messages yet.", { exact: false }).isVisible());
      }

      if (width === 1536 || width === 390) {
        await page.screenshot({ path: `artifacts/${route === "/" ? "home" : route.slice(1)}-${width}.png`, fullPage: true });
      }
      results.push(`${width}px ${route}: page, title, headings, links and overflow passed`);
    }

    await page.goto(baseURL);
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(":focus").innerText(), "Skip to content");
    assert.notEqual(await page.locator(":focus").evaluate((el) => getComputedStyle(el).outlineStyle), "none");
    await page.keyboard.press("Enter");
    assert.equal(await page.locator(":focus").getAttribute("id"), "main");

    for (const [label, target] of Object.entries(navLinks)) {
      await page.getByRole("navigation").getByRole("link", { name: label, exact: true }).click();
      await page.waitForURL(`${baseURL}${target}`);
      assert.equal(await page.getByRole("navigation").getByRole("link", { name: label, exact: true }).getAttribute("aria-current"), "page");
    }
    await page.getByRole("link", { name: "Luminari Synergy home" }).click();
    await page.waitForURL(`${baseURL}/`);
    await page.getByRole("link", { name: "Explore Verdaqua", exact: true }).click();
    await page.waitForURL(`${baseURL}/verdaqua`);
    await page.getByRole("link", { name: "Explore the crop trials" }).click();
    await page.waitForURL(`${baseURL}/research#crop-trials`);
    await page.getByRole("link", { name: "Discuss your crop", exact: true }).click();
    await page.waitForURL(`${baseURL}/contact`);
    await page.goto(`${baseURL}/verdaqua`);
    await page.getByRole("link", { name: "Discuss Verdaqua for your crop" }).click();
    await page.waitForURL(`${baseURL}/contact`);
    results.push(`${width}px: navigation clicks, active states, CTA journey and keyboard skip link passed`);
    await context.close();
  }

  const page = await browser.newPage();
  const missing = await page.goto(`${baseURL}/does-not-exist`);
  assert.equal(missing.status(), 404);
  assert.ok(await page.getByRole("link", { name: "Back to home" }).isVisible());
  assert.deepEqual(errors, [], "No browser console errors or uncaught errors");
  await writeFile("artifacts/browser-checks.txt", results.join("\n") + "\n404 handling passed. No browser errors.\n");
  console.log(results.join("\n"));
  console.log("404 handling passed. No browser errors. Screenshots saved in artifacts/.");
} finally {
  await browser.close();
}
