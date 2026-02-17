import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  src: StaticImageData;
  alt?: string;
  href?: string;
  className?: string;
  /** Height in pixels; width scales to preserve aspect. */
  height?: number;
  priority?: boolean;
};

const DEFAULT_ALT = "KOREA 360 UAE – Home";

export function Logo({
  src,
  alt = DEFAULT_ALT,
  href = "/",
  className,
  height = 32,
  priority = false,
}: LogoProps) {
  const img = (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={Math.round((src.width / src.height) * height)}
      className={cn("h-auto w-auto object-contain", className)}
      priority={priority}
      sizes="(max-width: 768px) 140px, 180px"
    />
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center shrink-0" aria-label={alt}>
        {img}
      </Link>
    );
  }

  return <span className="flex items-center shrink-0">{img}</span>;
}
