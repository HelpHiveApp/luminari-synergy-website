import Link from "next/link";

export default function NotFound() {
  return (
    <div className="editorial-page page-intro">
      <p className="section-label">Page not found</p>
      <h1>Let’s find your way back.</h1>
      <p>This page isn’t available.</p>
      <Link className="button" href="/">Back to home</Link>
    </div>
  );
}
