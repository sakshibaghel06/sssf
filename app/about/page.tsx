import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Landmark, MapPin, Users, ScrollText, BadgeCheck, UserRound, Building2 } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import SevaMark from "@/components/SevaMark";
import { ORG } from "@/lib/orgConfig";
import { aboutPageContent } from "@/lib/aboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sri Sai Swamy Seva Foundation, our service areas, mission, vision, legal and compliance documentation status, and our leadership structure.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="eyebrow">{aboutPageContent.hero.eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
              {aboutPageContent.hero.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              {aboutPageContent.hero.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={aboutPageContent.hero.ctaPrimary.href} className="rounded-full bg-maroon dark:bg-marigold px-6 py-3 text-sm font-semibold text-ivory dark:text-charcoal transition-transform hover:scale-[1.03]">
                {aboutPageContent.hero.ctaPrimary.label}
              </Link>
              <Link href={aboutPageContent.hero.ctaSecondary.href} className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
                {aboutPageContent.hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-ivory-soft dark:bg-charcoal-soft p-8">
            <div className="flex items-center gap-3">
              <SevaMark size={42} />
              <div>
                <p className="font-display text-2xl text-maroon dark:text-ivory">{ORG.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-sandalwood dark:text-ivory-soft/70">Community welfare</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-5 w-5 text-marigold" />
                <span className="text-sm text-sandalwood dark:text-ivory-soft/70">Care, dignity, and practical support</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-marigold" />
                <span className="text-sm text-sandalwood dark:text-ivory-soft/70">Community-centered service</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-marigold" />
                <span className="text-sm text-sandalwood dark:text-ivory-soft/70">Service geography to be verified and updated with documented locations.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="py-16 md:py-20">
        <div className="container-seva grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.whoWeAre.title}</h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              {aboutPageContent.whoWeAre.body}
            </p>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              {aboutPageContent.whoWeAre.communityWork}
            </p>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              {aboutPageContent.whoWeAre.communities}
            </p>
          </div>
          <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
            <div className="grid gap-4">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold"><HeartHandshake className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg text-maroon dark:text-ivory">Care Delivery</h3>
                  <p className="mt-1 text-sm text-sandalwood dark:text-ivory-soft/70">Food, healthcare, education, relief and community support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold"><Users className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg text-maroon dark:text-ivory">Volunteer Ecosystem</h3>
                  <p className="mt-1 text-sm text-sandalwood dark:text-ivory-soft/70">Local engagement and service participation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold"><MapPin className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg text-maroon dark:text-ivory">Service Geography</h3>
                  <p className="mt-1 text-sm text-sandalwood dark:text-ivory-soft/70">{aboutPageContent.areasWeServe.verifiedAreas}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <div className="max-w-3xl">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.story.title}</h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
              <div className="flex items-center gap-3">
                <ScrollText className="h-6 w-6 text-marigold" />
                <span className="font-display text-lg text-maroon dark:text-ivory">Foundation history</span>
              </div>
              <div className="mt-6 border-l border-maroon/20 dark:border-marigold/20 pl-5">
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sandalwood dark:text-ivory-soft/60">Founding year</p>
                  <p className="mt-2 font-display text-xl text-maroon dark:text-ivory">{aboutPageContent.story.foundingYear}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sandalwood dark:text-ivory-soft/60">Founding story</p>
                  <p className="mt-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{aboutPageContent.story.foundingStory}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-marigold" />
                <span className="font-display text-lg text-maroon dark:text-ivory">Major milestones</span>
              </div>
              <div className="mt-6 space-y-5">
                {aboutPageContent.story.milestones.map((milestone) => (
                  <div key={milestone.title} className="border-b border-maroon/10 dark:border-marigold/10 pb-4 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-marigold">{milestone.year}</span>
                      <span className="font-display text-sm text-maroon dark:text-ivory">{milestone.title}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{milestone.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-seva grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Vision</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.vision.title}</h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">{aboutPageContent.vision.body}</p>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.mission.title}</h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">{aboutPageContent.mission.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <span className="eyebrow">Areas we serve</span>
          <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.areasWeServe.title}</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {aboutPageContent.areasWeServe.body}
          </p>
          <div className="mt-6 rounded-2xl border border-maroon/10 dark:border-marigold/15 p-5">
            <p className="font-display text-lg text-maroon dark:text-ivory">{aboutPageContent.areasWeServe.verifiedAreas}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <span className="eyebrow">What makes us different</span>
          <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">{aboutPageContent.differentiators.title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {aboutPageContent.differentiators.intro}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {aboutPageContent.differentiators.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-maroon dark:text-ivory">{item.title}</h3>
                <p className="mt-3 text-sm text-sandalwood dark:text-ivory-soft/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <span className="eyebrow">Founder & Trustees</span>
          <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Leadership information</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-maroon/20 dark:border-marigold/30 bg-white/70 dark:bg-charcoal-soft/60 p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-maroon text-ivory dark:bg-marigold dark:text-charcoal font-display text-3xl">
                  <UserRound className="h-9 w-9" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-sandalwood dark:text-ivory-soft/60">Founder</span>
                  <p className="font-display text-2xl text-maroon dark:text-ivory">{aboutPageContent.founder.name}</p>
                  <p className="text-sm font-semibold text-marigold">{aboutPageContent.founder.position}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                {aboutPageContent.founder.bio}
              </p>
              <div className="mt-6 rounded-xl border border-maroon/10 dark:border-marigold/15 p-4">
                <p className="font-display text-base text-maroon dark:text-ivory">Founder message</p>
                <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                  {aboutPageContent.founder.message}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutPageContent.trustees.map((trustee, idx) => (
                <div key={idx} className="rounded-[1.8rem] border border-maroon/10 dark:border-marigold/15 bg-white/60 dark:bg-charcoal-soft/50 p-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <div className="mt-5 text-center">
                    <p className="font-display text-lg text-maroon dark:text-ivory">{trustee.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">{trustee.role}</p>
                    <p className="mt-4 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/70">{trustee.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
