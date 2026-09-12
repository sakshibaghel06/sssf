import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Clock3, Users, Link as LinkIcon, FileText } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import { allEvents, eventCategoryLabels } from "@/lib/eventsContent";

export const metadata: Metadata = {
  title: "Event Details | Sri Sai Swamy Seva Foundation",
  description: "Event detail architecture for Sri Sai Swamy Seva Foundation. Verified event records will be published here when available.",
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = allEvents.find((item) => item.id === params.slug || item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Event details</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            {event.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon dark:text-marigold">
              {event.status === "upcoming" ? "Upcoming" : "Past"}
            </span>
            {event.category ? (
              <span className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon dark:text-marigold">
                {eventCategoryLabels[event.category]}
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="py-16 md:py-20">
        <div className="container-seva grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-5 w-5 text-marigold" />
                <div>
                  <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Date</span>
                  <p className="mt-1 text-sm font-semibold text-maroon dark:text-ivory">{event.date}{event.endDate ? ` — ${event.endDate}` : ""}</p>
                </div>
              </div>

              {event.time ? (
                <div className="flex items-start gap-4">
                  <Clock3 className="h-5 w-5 text-marigold" />
                  <div>
                    <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Time</span>
                    <p className="mt-1 text-sm font-semibold text-maroon dark:text-ivory">{event.time}</p>
                  </div>
                </div>
              ) : null}

              {event.location ? (
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-marigold" />
                  <div>
                    <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Location</span>
                    <p className="mt-1 text-sm font-semibold text-maroon dark:text-ivory">{event.location}</p>
                  </div>
                </div>
              ) : null}

              {event.organizer ? (
                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 text-marigold" />
                  <div>
                    <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Organizer</span>
                    <p className="mt-1 text-sm font-semibold text-maroon dark:text-ivory">{event.organizer}</p>
                  </div>
                </div>
              ) : null}

              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                <span className="eyebrow">Description</span>
                <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{event.description}</p>
              </div>

              {event.purpose ? (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                  <span className="eyebrow">Purpose</span>
                  <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{event.purpose}</p>
                </div>
              ) : null}

              {event.activities && event.activities.length > 0 ? (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                  <span className="eyebrow">Activities</span>
                  <ul className="mt-4 space-y-2 text-sm text-sandalwood dark:text-ivory-soft/70">
                    {event.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-marigold" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {event.beneficiaryInfo ? (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
                  <span className="eyebrow">Beneficiaries</span>
                  <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{event.beneficiaryInfo}</p>
                </div>
              ) : null}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
            <span className="eyebrow">Event information</span>
            <div className="mt-6 space-y-5">
              {event.registrationUrl ? (
                <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon dark:bg-marigold px-6 py-3 text-sm font-semibold text-ivory dark:text-charcoal">
                  <LinkIcon className="h-4 w-4" /> Register
                </a>
              ) : (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4 text-sm font-semibold text-sandalwood dark:text-ivory-soft/70">
                  Registration details will be published when available.
                </div>
              )}

              {event.videoUrl ? (
                <a href={event.videoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-maroon dark:text-marigold">
                  <FileText className="h-4 w-4" /> Event media
                </a>
              ) : null}

              {event.galleryPhotos && event.galleryPhotos.length > 0 ? (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                  <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Photos</span>
                  <div className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                    Event photo records will be published when verified photos are available.
                  </div>
                </div>
              ) : null}

              {event.contact ? (
                <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                  <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Contact</span>
                  <p className="mt-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{event.contact}</p>
                </div>
              ) : null}

              <div className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-4">
                <span className="text-xs uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">Category</span>
                <p className="mt-2 text-sm font-semibold text-maroon dark:text-ivory">
                  {event.category ? eventCategoryLabels[event.category] : "Community activity"}
                </p>
              </div>

              <Link href="/events" className="block text-sm font-semibold text-maroon dark:text-marigold">
                ← Back to events
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
