"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type FullscreenImageViewerProps = {
  src?: string;
  alt?: string;
  caption?: string;
  sizes?: string;
  className?: string;
  images?: LightboxImage[];
  initialIndex?: number;
};

export default function FullscreenImageViewer({
  src,
  alt = "Image",
  caption,
  sizes = "90vw",
  className = "",
  images,
  initialIndex = 0,
}: FullscreenImageViewerProps) {
  const gallery = useMemo<LightboxImage[]>(() => {
    if (images && images.length > 0) return images;
    if (src) return [{ src, alt, caption }];
    return [];
  }, [alt, caption, images, src]);

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(Math.min(Math.max(initialIndex, 0), gallery.length - 1));
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const safeIndex = gallery.length > 0 ? Math.min(Math.max(activeIndex, 0), gallery.length - 1) : 0;
  const currentImage = gallery[safeIndex] ?? gallery[0];

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (gallery.length === 0) {
      setOpen(false);
      return;
    }

    setActiveIndex(Math.min(Math.max(initialIndex, 0), gallery.length - 1));
  }, [gallery, initialIndex]);

  const openViewer = useCallback((index = safeIndex) => {
    if (gallery.length === 0) return;
    setActiveIndex(Math.min(Math.max(index, 0), gallery.length - 1));
    setOpen(true);
  }, [gallery.length, safeIndex]);

  const closeViewer = useCallback(() => {
    setOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const goToPrevious = useCallback(() => {
    if (gallery.length <= 1) return;
    setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goToNext = useCallback(() => {
    if (gallery.length <= 1) return;
    setActiveIndex((current) => (current + 1) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeViewer, goToNext, goToPrevious, open]);

  useEffect(() => {
    if (!open || !dialogRef.current) return;

    const focusableSelector = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(", ");

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
    ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !dialogRef.current?.contains(active)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last || !dialogRef.current?.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [open]);

  if (gallery.length === 0) return null;

  const currentCaption = currentImage.caption ?? caption ?? "";
  const itemCount = gallery.length;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`View larger image: ${currentImage.alt}`}
        onClick={() => openViewer(safeIndex)}
        className={`group relative block h-full w-full cursor-zoom-in overflow-hidden text-left ${className}`}
      >
        <span className="relative block h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
          <Image src={currentImage.src} alt={currentImage.alt} fill sizes={sizes} className="object-cover" />
        </span>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-charcoal/80 p-3 backdrop-blur-sm transition-opacity duration-200 ease-out md:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`Image viewer: ${currentImage.alt}`}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  closeViewer();
                }
              }}
            >
              <div ref={dialogRef} className="relative w-full max-w-[92vw]">
                <div className="absolute -right-2 -top-2 z-20 flex items-center gap-2 md:-right-4 md:-top-4">
                  <button
                    type="button"
                    ref={closeRef}
                    aria-label="Close image viewer"
                    onClick={closeViewer}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/80 text-ivory shadow-lg transition-colors hover:border-marigold hover:text-marigold"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-ivory/15 bg-charcoal/30 shadow-2xl">
                  {itemCount > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/75 text-ivory shadow-md transition-colors hover:border-marigold hover:text-marigold md:left-4"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/75 text-ivory shadow-md transition-colors hover:border-marigold hover:text-marigold md:right-4"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  <div className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center p-4 sm:p-5 md:p-6">
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      width={1600}
                      height={1200}
                      sizes="90vw"
                      priority
                      className="max-h-[82vh] w-auto max-w-[90vw] object-contain"
                    />
                  </div>
                </div>

                {currentCaption && (
                  <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-ivory/90">
                    {currentCaption}
                  </p>
                )}

                {itemCount > 1 && (
                  <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/75">
                    <span>{safeIndex + 1}</span>
                    <span>/</span>
                    <span>{itemCount}</span>
                  </div>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}