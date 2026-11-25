import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const baseURL = process.env.PREVIEW_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];
const results = [];
const routes = { "/": "Luminari Synergy", "/verdaqua": "Verdaqua", "/research": "Research", "/about": "Company", "/contact": "Contact" };
const navigation = { Technology: "/#technology", "Our brands": "/#brands", Company: "/about", Contact: "/contact" };
const viewports = [{ width: 1536, height: 960 }, { width: 1280, height: 640 }, { width: 768, height: 1024 }, { width: 390, height: 844 }, { width: 320, height: 640 }];
const destinationCache = new Map();
await mkdir("artifacts", { recursive: true });

async function checkTarget(context, href, currentURL) {
  const url = new URL(href, currentURL);
  const hash = decodeURIComponent(url.hash.slice(1));
  url.hash = "";
  if (!destinationCache.has(url.href)) {
    const response = await context.request.get(url.href);
    assert.equal(response.status(), 200, `Destination ${href} exists`);
    destinationCache.set(url.href, await response.text());
  }
  if (hash) assert.ok(destinationCache.get(url.href).includes(`id="${hash}"`), `Anchor ${href} exists`);
}

async function closeMenu(page) {
  const button = page.getByRole("button", { name: "Close", exact: true });
  if (await button.isVisible()) await button.click();
}

try {
  for (const viewport of viewports) {
    const { width, height } = viewport;
    const mobileMenu = width <= 900;
    const context = await browser.newContext({ viewport, isMobile: width < 601, hasTouch: width < 901 });
    const page = await context.newPage();
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });

    for (const [route, title] of Object.entries(routes)) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.ok((await page.title()).startsWith(title));
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false, `${width}px ${route}: no horizontal overflow`);
      assert.ok((await page.locator("h1").evaluate(el => getComputedStyle(el).fontFamily)).includes("DM Sans"));

      const logo = await page.locator(".site-header .logo-mark").boundingBox();
      assert.ok(Math.abs(logo.width / logo.height - 1681 / 936) < 0.02, "Supplied logo proportions are preserved");
      assert.equal(await page.locator(".site-header .logo-mark--reversed").count(), route === "/" ? 1 : 0);
      assert.equal(await page.locator(".site-footer .logo-mark--reversed").count(), 1);

      if (mobileMenu) {
        const toggle = page.getByRole("button", { name: "Menu", exact: true });
        await toggle.focus();
        await page.keyboard.press("Enter");
        assert.equal(await page.locator(".menu-toggle").getAttribute("aria-expanded"), "true");
      }
      const nav = page.getByRole("navigation", { name: "Main navigation", exact: true });
      for (const [label, href] of Object.entries(navigation)) {
        const link = nav.getByRole("link", { name: label, exact: true });
        assert.ok(await link.isVisible());
        assert.equal(await link.getAttribute("href"), href);
        assert.ok((await link.boundingBox()).height >= 44);
      }
      if (mobileMenu) {
        if (route === "/" && width === 390) await page.screenshot({ path: "artifacts/menu-390.png" });
        await page.keyboard.press("Escape");
        assert.equal(await page.getByRole("button", { name: "Menu", exact: true }).getAttribute("aria-expanded"), "false");
        assert.equal(await page.locator(":focus").getAttribute("aria-controls"), "primary-navigation");
        assert.equal(await nav.isVisible(), false);
      }

      const hrefs = await page.locator('a[href^="/"],a[href^="#"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute("href")))]);
      for (const href of hrefs) await checkTarget(context, href, page.url());

      for (const photo of await page.locator(".plasma-art,.feature-photo img,.technology-photo img,.hero-image").all()) {
        await photo.scrollIntoViewIfNeeded();
        await photo.evaluate(img => img.decode());
        assert.ok(await photo.evaluate(img => img.complete && img.naturalWidth > 0));
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));

      if (route === "/") {
        assert.equal(await page.locator("h1").innerText(), "Plasma technology,\nfrom lab to field.");
        assert.ok((await page.locator(".plasma-art").getAttribute("src")).includes("germinating-radish-seed-violet-reflection"));
        assert.equal(await page.locator(".plasma-art").getAttribute("alt"), "");
        assert.equal(await page.locator(".technology-photo img").getAttribute("loading"), "lazy");
        const technologyPhoto = await page.locator(".technology-photo img").boundingBox();
        assert.ok(Math.abs(technologyPhoto.width / technologyPhoto.height - 1672 / 941) < 0.01, "Technology image retains the complete vessel and dish");
        const hero = await page.locator(".plasma-hero").boundingBox();
        const art = await page.locator(".plasma-art").boundingBox();
        const header = await page.locator(".site-header").boundingBox();
        const action = await page.getByRole("link", { name: "How our technology works", exact: true }).boundingBox();
        const brandLinks = await page.locator(".hero-brand-links .brand-link").all();
        const first = await brandLinks[0].boundingBox();
        const second = await brandLinks[1].boundingBox();
        assert.equal(hero.y, 0, "Scene extends behind header");
        assert.equal(art.y, 0);
        assert.equal(art.width, width, "Scene is full width");
        assert.ok(Math.abs(art.height - hero.height) < 2);
        assert.ok(header.y + header.height < action.y);
        assert.ok(first.y > action.y + action.height, "Brand links do not overlap the primary action");
        assert.ok(second.y + second.height <= hero.y + hero.height, "Both brand links remain in the scene on short screens");
        if (width > 900) {
          const heading = await page.locator("h1").evaluate(el => ({ height: el.getBoundingClientRect().height, lineHeight: parseFloat(getComputedStyle(el).lineHeight) }));
          assert.ok(heading.height <= heading.lineHeight * 2.1, "Desktop headline has two lines");
        }
        if (width <= 600) assert.ok(second.y >= first.y + first.height, "Brand links stack on phones");
        assert.deepEqual(await page.locator(".process-list h3").allTextContents(), ["Plasma treatment", "Water activation", "Seed soaking"]);
        assert.equal(await page.locator(".hero-brand-links").getByRole("link").count(), 2);
        await page.screenshot({ path: `artifacts/home-${width}x${height}.png`, fullPage: true });
        await page.screenshot({ path: `artifacts/hero-${width}x${height}.png` });
      }

      if (route === "/verdaqua") {
        assert.ok((await page.locator(".hero-image").getAttribute("src")).includes("radish-microgreens-violet-droplet"));
        assert.ok((await page.locator(".hero-eyebrow").innerText()).includes("Commercially available"));
        if (width < 601) {
          const copy = await page.locator(".hero-copy").boundingBox();
          const photo = await page.locator(".hero-image").boundingBox();
          assert.ok(copy.y + copy.height < photo.y);
        }
      }
      if (route === "/contact") {
        assert.equal(await page.getByLabel("I’d like to discuss").inputValue(), "verdaqua");
        assert.ok(await page.getByLabel("What do you grow?", { exact: true }).evaluate(el => el.required));
        await page.getByLabel("I’d like to discuss").selectOption("regreen");
        assert.equal(await page.getByLabel("Site or location (optional)").evaluate(el => el.required), false);
        if (!process.env.EXPECT_CONTACT_EMAIL) {
          assert.ok(await page.getByRole("button", { name: "Enquiries opening soon" }).isDisabled());
          assert.equal(await page.locator('a[href^="mailto:"]').count(), 0);
        }
      }
      if (width === 1536 || width === 390) await page.screenshot({ path: `artifacts/${route === "/" ? "home" : route.slice(1)}-${width}.png`, fullPage: true });
      results.push(`${width}x${height} ${route}: responsive layout, navigation, destinations, imagery, theme and logo passed`);
    }

    await page.goto(baseURL);
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(":focus").innerText(), "Skip to content");
    await page.keyboard.press("Enter");
    assert.equal(await page.locator(":focus").getAttribute("id"), "main");
    await page.getByRole("link", { name: "How our technology works", exact: true }).focus();
    assert.notEqual(await page.locator(":focus").evaluate(el => getComputedStyle(el).outlineStyle), "none");
    await page.keyboard.press("Enter");
    await page.waitForURL(`${baseURL}/#technology`);
    await page.waitForFunction(() => document.getElementById("technology-title").getBoundingClientRect().top < innerHeight);
    await page.getByRole("link", { name: "Explore our crop research", exact: true }).click();
    await page.waitForURL(`${baseURL}/research`);
    await page.getByRole("link", { name: "Discuss your crop", exact: true }).click();
    await page.waitForURL(`${baseURL}/contact`);

    if (mobileMenu) await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name: "Our brands", exact: true }).click();
    await page.waitForURL(`${baseURL}/#brands`);
    if (mobileMenu) assert.equal(await page.getByRole("button", { name: "Menu", exact: true }).getAttribute("aria-expanded"), "false");
    await page.locator(".hero-brand-links").getByRole("link", { name: /Verdaqua/ }).click();
    await page.waitForURL(`${baseURL}/verdaqua`);
    await page.getByRole("link", { name: "Discuss Verdaqua for your crop", exact: true }).click();
    await page.waitForURL(`${baseURL}/contact`);
    await page.goto(baseURL);
    await page.getByRole("link", { name: "Discuss a grower trial", exact: true }).click();
    await page.waitForURL(`${baseURL}/contact?interest=verdaqua`);
    assert.equal(await page.getByLabel("I’d like to discuss").inputValue(), "verdaqua");
    await page.goto(baseURL);
    await page.locator(".hero-brand-links").getByRole("link", { name: /ReGreen/ }).click();
    await page.waitForURL(`${baseURL}/#regreen`);
    await page.getByRole("link", { name: "Discuss a research partnership", exact: true }).click();
    await page.waitForURL(`${baseURL}/contact?interest=regreen`);
    assert.equal(await page.getByLabel("I’d like to discuss").inputValue(), "regreen");
    await closeMenu(page);
    results.push(`${width}x${height}: keyboard, menu dismissal, technology/research journey and both brand enquiry paths passed`);
    await context.close();
  }

  const reduced = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
  const page = await reduced.newPage();
  await page.goto(baseURL);
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  await reduced.close();
  const missing = await browser.newPage();
  const response = await missing.goto(`${baseURL}/does-not-exist`);
  assert.equal(response.status(), 404);
  assert.ok(await missing.getByRole("link", { name: "Back to home" }).isVisible());
  assert.deepEqual(errors, [], "No browser console errors or uncaught errors");
  results.push("Reduced motion and 404 recovery passed. No browser errors.");
  await writeFile("artifacts/browser-checks.txt", results.join("\n") + "\n");
  console.log(results.join("\n"));
} finally { await browser.close(); }
