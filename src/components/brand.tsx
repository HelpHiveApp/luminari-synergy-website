import Image from "next/image";
import Link from "next/link";

export function Brand({ reversed = false }: { reversed?: boolean }) {
  return (
    <Link className="wordmark" href="/" aria-label="Luminari Synergy home">
      <span className={`logo-mark${reversed ? " logo-mark--reversed" : ""}`} aria-hidden="true">
        {!reversed && (
          <Image
            src="/brand/luminari-mark.webp"
            alt=""
            width={1681}
            height={936}
            sizes="110px"
          />
        )}
      </span>
      <span>Luminari Synergy</span>
    </Link>
  );
}
