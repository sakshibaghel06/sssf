import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FullscreenImageViewer from "@/components/FullscreenImageViewer";
import VolunteerForm from "@/components/VolunteerForm";
import { ORG_CONTACT } from "@/lib/orgConfig";
import { volunteerOpportunities } from "@/lib/volunteerContent";
import { foundationProgramPhotos } from "@/lib/foundationPhotos";

export const metadata: Metadata = {
  title: "Volunteer With Us | Sri Sai Swamy Seva Foundation",
  description: "Explore ways to volunteer your time, skills and support with Sri Sai Swamy Seva Foundation.",
};

export default function VolunteerPage() {
  const featuredPhotos = foundationProgramPhotos.volunteers.slice(0, 3);
  const processSteps = [
    "Choose how you want to help",
    "Share your details",
    "Foundation reviews your interest",
    "Coordinate the activity",
    "Participate in seva",
  ];

  return (
    <>
      <section className="container-seva py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">Volunteer</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-maroon dark:text-ivory md:text-5xl">
              Give your time. Share your skills. Make a difference.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/75 md:text-lg">
              People can contribute time, skills, professional expertise, practical support, or service capacity to strengthen the foundation’s welfare and community work. Volunteer opportunities may include medical outreach, education assistance, food distribution, community events, communications, media support, fundraising, corporate volunteering, and skills-based service. Availability and current requirements will be confirmed by the foundation.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#volunteer-form" className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory transition-transform hover:scale-[1.02] dark:bg-marigold dark:text-charcoal">
                Become a Volunteer
              </Link>
              <Link href="/programs" className="rounded-full border border-maroon/30 px-6 py-3 text-sm font-semibold text-maroon transition-colors hover:bg-maroon/5 dark:border-marigold/30 dark:text-marigold dark:hover:bg-marigold/10">
                Explore our programmes
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-maroon/10 bg-ivory-soft shadow-[0_18px_40px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src={foundationProgramPhotos.volunteers[0].src}
                alt={foundationProgramPhotos.volunteers[0].alt}
                fill
                sizes="(max-width: 768px) 90vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="mb-6">
            <span className="eyebrow">Volunteer opportunities</span>
            <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">How would you like to help?</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              const opportunityHref = `/volunteer?area=${encodeURIComponent(opportunity.title)}#volunteer-form`;

              return (
                <Link
                  key={opportunity.title}
                  href={opportunityHref}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-maroon/10 bg-white/60 p-5 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft/70"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15 text-marigold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-maroon/10 bg-ivory-soft px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-sandalwood dark:border-marigold/15 dark:bg-charcoal dark:text-ivory-soft/70">
                      {opportunity.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl text-maroon dark:text-ivory">{opportunity.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">{opportunity.description}</p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-maroon dark:text-marigold">
                    {opportunity.actionLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Volunteers in the field</span>
              <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">Volunteers in the field</h2>
            </div>
            <Link href="/gallery" className="hidden text-sm font-semibold text-maroon underline decoration-marigold/60 underline-offset-4 dark:text-marigold md:inline-flex">
              View gallery →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredPhotos.map((photo, index) => (
              <div key={photo.src} className="overflow-hidden rounded-[1.5rem] border border-maroon/10 bg-ivory-soft dark:border-marigold/15 dark:bg-charcoal-soft">
                <div className="relative aspect-[4/3]">
                  <FullscreenImageViewer
                    images={featuredPhotos}
                    initialIndex={index}
                    alt={photo.alt}
                    caption={photo.caption}
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
                    className="h-full w-full"
                  />
                </div>
                <p className="p-3 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/75">{photo.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 md:hidden">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-maroon underline decoration-marigold/60 underline-offset-4 dark:text-marigold">
              View gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="mb-5">
              <span className="eyebrow">Volunteer process</span>
              <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">How volunteering works</h2>
            </div>

            <div className="grid gap-3 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-3 rounded-[1.25rem] border border-maroon/10 bg-ivory-soft p-3 dark:border-marigold/15 dark:bg-charcoal">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marigold/15 text-xs font-semibold text-maroon dark:text-marigold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 bg-maroon/5 p-6 dark:border-marigold/15 dark:bg-marigold/10 md:p-7">
            <span className="eyebrow">Corporate & professional volunteering</span>
            <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">Corporate & professional volunteering</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              Organizations and professionals may contribute through corporate volunteering, professional skills, technology, design, communications, healthcare, education, photography/video, fundraising, and other relevant expertise. Partnerships and availability will be confirmed through verified foundation coordination.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Corporate volunteering",
                "Technology",
                "Design",
                "Communications",
                "Healthcare",
                "Education",
                "Photography / Video",
                "Fundraising",
                "Professional skills",
              ].map((item) => (
                <span key={item} className="rounded-full border border-maroon/10 bg-white/70 px-3 py-2 text-[11px] font-semibold text-sandalwood dark:border-marigold/15 dark:bg-charcoal/60 dark:text-ivory-soft/80">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-maroon underline decoration-marigold/60 underline-offset-4 dark:text-marigold">
                Discuss a partnership <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VolunteerForm contact={ORG_CONTACT} />

      <section className="container-seva pb-14 pt-2 md:pb-16">
        <div className="rounded-[1.5rem] border border-maroon/10 bg-white/60 p-5 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood/70 dark:text-ivory-soft/70">Need help?</p>
              <h3 className="mt-2 font-display text-2xl text-maroon dark:text-ivory">Have questions about volunteering?</h3>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-ivory dark:bg-marigold dark:text-charcoal">
              Contact the Foundation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
