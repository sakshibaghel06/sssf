import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, Clock3, FileText, CalendarRange } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import FoundationPhotoGrid from "@/components/FoundationPhotoGrid";
import PendingContentState from "@/components/PendingContentState";
import { eventEmptyStates, upcomingEventsContent, pastEventsContent, eventCategoryLabels } from "@/lib/eventsContent";
import { foundationProgramPhotos } from "@/lib/foundationPhotos";

export const metadata: Metadata = {
  title: "Events & Activities | Sri Sai Swamy Seva Foundation",
  description: "Upcoming and past activities, seva events and community programs of Sri Sai Swamy Seva Foundation.",
};

export default function EventsPage() {
  const upcoming = upcomingEventsContent;
  const past = pastEventsContent;

  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Events</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            Community Events &amp; Seva Activities
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            The foundation publishes verified event details as they are confirmed and approved. Until then, this section remains intentionally structured to show where upcoming and past activity records will appear, while keeping future event records ready for publication without redesign.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/volunteer" className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory dark:bg-marigold dark:text-charcoal">Volunteer</Link>
            <Link href="/contact" className="rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon dark:border-marigold dark:text-marigold">Contact the Foundation</Link>
          </div>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">Upcoming Events</h2>
            <Link href="/volunteer" className="text-sm font-semibold text-maroon dark:text-marigold">Volunteer opportunities →</Link>
          </div>
          <div className="mt-8 divide-y divide-maroon/10 dark:divide-marigold/10 border-t border-b border-maroon/10 dark:border-marigold/10">
            {upcoming.length === 0 ? (
              <div className="py-8">
                <PendingContentState
                  icon={CalendarRange}
                  title="Upcoming Events"
                  description={eventEmptyStates.upcoming}
                  status="Official schedule pending"
                  ctaLabel="Volunteer with us"
                  ctaHref="/volunteer"
                />
              </div>
            ) : (
              upcoming.map((event) => (
                <article key={event.id} className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-marigold/15 px-3.5 py-2 text-maroon dark:text-marigold shrink-0">
                      <CalendarDays className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wide uppercase text-marigold-dark dark:text-marigold">{event.date}</p>
                      <h3 className="mt-1 font-display text-lg text-maroon dark:text-ivory">{event.title}</h3>
                      <p className="mt-1 text-sm text-sandalwood dark:text-ivory-soft/70">{event.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-sandalwood dark:text-ivory-soft/60">
                        {event.category ? <span className="rounded-full border border-maroon/10 px-3 py-1">{eventCategoryLabels[event.category]}</span> : null}
                        {event.time ? <span className="rounded-full border border-maroon/10 px-3 py-1"><Clock3 className="mr-1 inline h-3 w-3" />{event.time}</span> : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end md:pl-4">
                    <div className="flex items-center gap-1.5 text-xs text-sandalwood dark:text-ivory-soft/60">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location || "Location pending"}
                    </div>
                    {event.registrationUrl ? (
                      <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="rounded-full border border-maroon dark:border-marigold px-4 py-2 text-xs font-semibold text-maroon dark:text-marigold">
                        Register
                      </a>
                    ) : (
                      <span className="rounded-full border border-maroon/10 px-4 py-2 text-xs font-semibold text-sandalwood dark:text-ivory-soft/60">
                        Registration details will be published when available.
                      </span>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <FoundationPhotoGrid title="Community activity" photos={foundationProgramPhotos.events} />

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">Past Events</h2>
            <Link href="/programs" className="text-sm font-semibold text-maroon dark:text-marigold">Explore programs →</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {past.length === 0 ? (
              <div className="sm:col-span-3">
                <PendingContentState
                  icon={CalendarDays}
                  title="Past Events"
                  description={eventEmptyStates.past}
                  status="Records being compiled"
                  ctaLabel="Explore programs"
                  ctaHref="/programs"
                />
              </div>
            ) : (
              past.map((event) => (
                <article key={event.id} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-6">
                  <p className="text-xs tracking-wide uppercase text-marigold-dark dark:text-marigold">{event.date}</p>
                  <h3 className="mt-2 font-display text-base text-maroon dark:text-ivory">{event.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-sandalwood dark:text-ivory-soft/60">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location || "Location pending"}
                  </p>
                  {event.category ? <span className="mt-4 inline-block rounded-full border border-maroon/10 px-3 py-1 text-[11px] uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">{eventCategoryLabels[event.category]}</span> : null}
                  {event.galleryPhotos && event.galleryPhotos.length > 0 ? <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-maroon/10 px-3 py-1 text-[11px] uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60"><FileText className="h-3 w-3" /> Photos available</span> : null}
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
            <span className="eyebrow">Community engagement</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Programs, events and volunteering together</h2>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              Community participation may include food distribution, medical camps, educational activities, school development, disaster relief, women empowerment, child welfare and spiritual/community seva. Participation is coordinated through verified foundation programs and activity updates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/volunteer" className="rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold">
                Volunteer with us
              </Link>
              <Link href="/programs" className="rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold">
                Explore programs
              </Link>
              <Link href="/gallery" className="rounded-full border border-maroon dark:border-marigold px-5 py-3 text-sm font-semibold text-maroon dark:text-marigold">
                Event gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
