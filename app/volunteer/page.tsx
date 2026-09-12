import type { Metadata } from "next";
import Link from "next/link";
import VolunteerForm from "@/components/VolunteerForm";
import FoundationPhotoGrid from "@/components/FoundationPhotoGrid";
import { ORG_CONTACT } from "@/lib/orgConfig";
import { volunteerOpportunities } from "@/lib/volunteerContent";
import { foundationProgramPhotos } from "@/lib/foundationPhotos";

export const metadata: Metadata = {
  title: "Volunteer With Us | Sri Sai Swamy Seva Foundation",
  description: "Explore ways to volunteer your time, skills and support with Sri Sai Swamy Seva Foundation.",
};

export default function VolunteerPage() {
  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Volunteer</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            Volunteer With Us
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            People can contribute time, skills, professional expertise, practical support, or service capacity to strengthen the foundation’s welfare and community work. Volunteer opportunities may include medical outreach, education assistance, food distribution, community events, communications, media support, fundraising, corporate volunteering, and skills-based service. Availability and current requirements will be confirmed by the foundation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-maroon dark:bg-marigold px-6 py-3 text-sm font-semibold text-ivory dark:text-charcoal">
              Contact the Foundation
            </Link>
            <Link href="/programs" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              Explore our programs
            </Link>
          </div>
        </div>
      </section>

      <FoundationPhotoGrid title="Volunteers in the field" photos={foundationProgramPhotos.volunteers} />

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <div className="mb-8">
            <span className="eyebrow">Volunteer opportunities</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Ways to contribute</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              const opportunityHref = `/volunteer?area=${encodeURIComponent(opportunity.title)}#volunteer-form`;
              return (
                <article key={opportunity.title} className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-7 transition-transform hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-marigold/15 text-marigold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-maroon dark:text-ivory">{opportunity.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{opportunity.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-wide text-sandalwood dark:text-ivory-soft/60">{opportunity.status}</span>
                    <a href={opportunityHref} className="rounded-full border border-maroon dark:border-marigold px-4 py-2 text-xs font-semibold text-maroon dark:text-marigold transition-colors hover:bg-maroon hover:text-ivory dark:hover:bg-marigold dark:hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:ring-offset-2">
                      {opportunity.actionLabel}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
              <span className="eyebrow">Volunteer process</span>
              <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">How volunteering begins</h2>
              <div className="mt-7 space-y-4">
                {[
                  "Choose how you want to help",
                  "Share your details",
                  "Foundation team reviews your interest",
                  "Coordinate the activity",
                  "Participate in seva",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-marigold/15 text-maroon dark:text-marigold">{index + 1}</span>
                    <span className="text-sm text-sandalwood dark:text-ivory-soft/70">{step}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
              <span className="eyebrow">Corporate & skills-based volunteering</span>
              <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Professional contribution</h2>
              <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                Organizations and professionals may contribute through corporate volunteering, professional skills, technology, design, communications, healthcare, education, photography/video, fundraising, and other relevant expertise. Partnerships and availability will be confirmed through verified foundation coordination.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Corporate volunteering",
                  "Technology",
                  "Design",
                  "Communications",
                  "Healthcare",
                  "Education",
                  "Photography / Video",
                  "Fundraising",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-maroon/10 px-3 py-2 text-[11px] font-semibold text-sandalwood dark:text-ivory-soft/60">{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <VolunteerForm contact={ORG_CONTACT} />
    </>
  );
}
