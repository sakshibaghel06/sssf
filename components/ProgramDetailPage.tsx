import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, MapPin, Image as ImageIcon, HandCoins } from "lucide-react";
import type { ProgramContent } from "@/lib/programsContent";
import Reveal from "@/components/Reveal";
import FullscreenImageViewer from "@/components/FullscreenImageViewer";

export default function ProgramDetailPage({ program }: { program: ProgramContent }) {
  const Icon = program.icon;

  return (
    <main className="container-seva py-16 md:py-20">
      <Reveal>
      <section className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-marigold/15 text-marigold">
              <Icon className="h-6 w-6" />
            </span>
            <span className="eyebrow">{program.tag}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            {program.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {program.shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={program.ctaHref} className="rounded-full bg-maroon dark:bg-marigold px-7 py-3 text-sm font-semibold text-ivory dark:text-charcoal transition-transform hover:scale-[1.03]">
              {program.ctaLabel}
            </Link>
            <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-maroon dark:border-marigold px-7 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              <ArrowLeft className="h-4 w-4" />
              Back to programs
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-ivory-soft dark:bg-charcoal-soft">
          {program.image ? (
            <Image
              src={program.image}
              alt={program.title}
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              Foundation photographs for this program will be added when verified program-specific images are available.
            </div>
          )}
        </div>
      </section>
      </Reveal>

      <Reveal className="mt-14">
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <div className="flex items-center gap-3">
            <HeartHandshake className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">Problem</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {program.problem}
          </p>
        </article>

        <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <div className="flex items-center gap-3">
            <HandCoins className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">What we do</span>
          </div>
          <ul className="mt-4 space-y-3">
            {program.whatWeDo.map((item, index) => (
              <li key={`${item}-${index}`} className="flex gap-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
      </Reveal>

      <Reveal className="mt-8">
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <div className="flex items-center gap-3">
            <HeartHandshake className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">Who benefits</span>
          </div>
          <ul className="mt-4 space-y-3">
            {program.whoBenefits.map((item, index) => (
              <li key={`${item}-${index}`} className="flex gap-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">Locations</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {program.locations}
          </p>
        </article>
      </section>
      </Reveal>

      <Reveal className="mt-8">
      <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <article className="border-t border-maroon/15 pt-6 dark:border-marigold/20">
          <div className="flex items-center gap-3">
            <ImageIcon className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">Impact</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {program.impact}
          </p>
        </article>

        <article className="border-t border-maroon/15 pt-6 dark:border-marigold/20">
          <div className="flex items-center gap-3">
            <ImageIcon className="h-6 w-6 text-marigold" />
            <span className="font-display text-xl text-maroon dark:text-ivory">Photos</span>
          </div>
          <div className="mt-4">
            {program.photos.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {program.photos.map((photo) => (
                  <figure key={photo.src} className="overflow-hidden rounded-xl border border-maroon/10 dark:border-marigold/15">
                    <div className="relative aspect-[4/3]">
                      <FullscreenImageViewer
                        src={photo.src}
                        alt={photo.alt}
                        caption={photo.caption}
                        sizes="(max-width: 768px) 90vw, 420px"
                        className="h-full w-full"
                      />
                    </div>
                    <figcaption className="p-4 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/70">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-maroon/15 p-5 text-sm leading-relaxed text-sandalwood dark:border-marigold/20 dark:text-ivory-soft/70">
                Foundation photographs for this program will be added when verified program-specific images are available.
              </p>
            )}
          </div>
        </article>
      </section>
      </Reveal>

      <Reveal className="mt-8">
      <section className="border-t border-maroon/15 pt-8 dark:border-marigold/20">
        <div className="flex items-center gap-3">
          <HeartHandshake className="h-6 w-6 text-marigold" />
          <span className="font-display text-xl text-maroon dark:text-ivory">How to help</span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {program.howToHelp.map((item, index) => (
            <div key={`${item}-${index}`} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
              <p className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{item}</p>
            </div>
          ))}
        </div>
      </section>
      </Reveal>
    </main>
  );
}
