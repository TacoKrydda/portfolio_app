import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import type { ProjectImage } from "../data/projects";

interface Props {
  images: ProjectImage[];
  title: string;
}

const Chevron = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d={direction === "left" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
  </svg>
);

export default function ImageGallery({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = images.length;
  const current = images[index];
  const hasMany = total > 1;

  const goTo = (next: number) => setIndex((next + total) % total);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > 50) goTo(index + (distance < 0 ? 1 : -1));
  };

  return (
    <div
      className="gallery"
      role="group"
      aria-roledescription="bildspel"
      aria-label={`Bilder från ${title}`}
      onKeyDown={handleKeyDown}
    >
      <figure
        className="gallery__stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={current.src}
          className="gallery__image"
          src={`${import.meta.env.BASE_URL}${current.src.replace(/^\//, "")}`}
          alt={current.alt}
          width={1600}
          height={900}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />

        {hasMany && (
          <>
            <p className="gallery__count" aria-hidden="true">
              {index + 1} / {total}
            </p>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--prev"
              onClick={() => goTo(index - 1)}
            >
              <Chevron direction="left" />
              <span className="sr-only">Föregående bild</span>
            </button>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--next"
              onClick={() => goTo(index + 1)}
            >
              <Chevron direction="right" />
              <span className="sr-only">Nästa bild</span>
            </button>
          </>
        )}
      </figure>

      <p className="sr-only" role="status">
        Bild {index + 1} av {total}
      </p>

      {hasMany && (
        <ul
          className="gallery__thumbs"
          aria-label="Välj bild"
          style={{ "--count": total } as CSSProperties}
        >
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                className="gallery__thumb"
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">
                  Visa bild {i + 1} av {total}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
