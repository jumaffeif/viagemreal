import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SlideImage = { src: string; alt: string };

interface PhotoSlideshowProps {
  images: SlideImage[];
  intervalMs?: number;
  className?: string;
}

export function PhotoSlideshow({ images, intervalMs = 4000, className }: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === index ? "w-6 bg-[color:var(--gold)]" : "w-1.5 bg-white/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
