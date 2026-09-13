import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { videosContent, videoShowcaseStatus } from "@/lib/videoContent";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-seva">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Watch our work</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory md:text-4xl">Videos</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              Verified Foundation video content appears here as it is documented and reviewed. The initial published videos reflect confirmed Women Empowerment activity.
            </p>
          </div>
          <Link href="/women-empowerment" className="inline-flex items-center gap-2 text-sm font-semibold text-maroon dark:text-marigold">
            Women Empowerment programme <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {videosContent.length === 0 ? (
            <div className="rounded-[2rem] border border-maroon/10 bg-white/50 p-8 dark:border-marigold/15 dark:bg-charcoal-soft/50 md:col-span-2">
              <div className="flex items-center gap-4">
                <PlayCircle className="h-8 w-8 text-marigold" />
                <p className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{videoShowcaseStatus}</p>
              </div>
            </div>
          ) : (
            videosContent.map((video) => (
              <article key={video.id} className="overflow-hidden rounded-[2rem] border border-maroon/10 bg-white/50 shadow-[0_12px_28px_rgba(66,32,16,0.04)] transition-transform duration-200 hover:-translate-y-1 dark:border-marigold/15 dark:bg-charcoal-soft/50">
                <div className="relative aspect-video overflow-hidden bg-maroon/10 dark:bg-marigold/10">
                  <video
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={video.videoFile} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-marigold/30 bg-marigold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-maroon dark:text-marigold">
                      {video.category}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-sandalwood/70 dark:text-ivory-soft/70">
                      {video.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-maroon dark:text-ivory">{video.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{video.description}</p>
                  {video.relatedProgrammeLink ? (
                    <Link
                      href={video.relatedProgrammeLink}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon dark:text-marigold"
                    >
                      Related programme <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
