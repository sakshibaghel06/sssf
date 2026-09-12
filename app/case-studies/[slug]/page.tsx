import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, ClipboardCheck } from "lucide-react";
import { caseStudiesContent } from "@/lib/caseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Sri Sai Swamy Seva Foundation",
  description: "Documented foundation projects, interventions and outcomes of Sri Sai Swamy Seva Foundation.",
};

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudiesContent.find((item) => item.id === params.slug || item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="container-seva py-16 md:py-20">
      <div className="max-w-3xl">
        <span className="eyebrow">Case Study</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
          {study.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-sandalwood dark:text-ivory-soft/60">
          {study.program ? <span>{study.program}</span> : null}
          {study.year ? <><span className="mx-1">●</span><span>{study.year}</span></> : null}
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <ClipboardCheck className="h-5 w-5 text-marigold" />
              <div>
                <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Problem</span>
                <p className="mt-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.problem}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
              <span className="eyebrow">Intervention</span>
              <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.intervention}</p>
            </div>

            {study.resources && study.resources.length > 0 ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Resources / support</span>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                  {study.resources.map((resource) => (
                    <li key={resource} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-marigold" />
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {study.implementation ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Implementation</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.implementation}</p>
              </div>
            ) : null}

            {study.beforeState ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Before</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.beforeState}</p>
              </div>
            ) : null}

            {study.afterState ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">After</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.afterState}</p>
              </div>
            ) : null}

            {study.result ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Result / impact</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{study.result}</p>
              </div>
            ) : null}

            {study.testimonial ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Community feedback</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">“{study.testimonial}”</p>
              </div>
            ) : null}
          </div>
        </article>

        <aside className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
          <span className="eyebrow">Evidence record</span>
          <div className="mt-6 space-y-5">
            {study.location ? (
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-marigold" />
                <span className="text-sm text-sandalwood dark:text-ivory-soft/70">{study.location}</span>
              </div>
            ) : null}
            {study.year ? (
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-marigold" />
                <span className="text-sm text-sandalwood dark:text-ivory-soft/70">{study.year}</span>
              </div>
            ) : null}
            {study.photos && study.photos.length > 0 ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Photos</span>
                <div className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">Verified photos will be published when available.</div>
              </div>
            ) : (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Photos</span>
                <div className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">Publication pending.</div>
              </div>
            )}
            {study.videos && study.videos.length > 0 ? (
              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Videos</span>
                <div className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">Verified videos will be linked when consented.</div>
              </div>
            ) : null}
            <Link href="/gallery" className="block rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold text-center">
              View related gallery →
            </Link>
            <Link href="/case-studies" className="block rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold text-center">
              ← Back to case studies
            </Link>
            {study.program ? (
              <Link href="/programs" className="block rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold text-center">
                Explore related program
              </Link>
            ) : null}
          </div>
        </aside>
      </div>
    </section>
  );
}
