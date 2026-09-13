import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircleDollarSign,
  ClipboardCheck,
  HandCoins,
  HeartHandshake,
  Image as ImageIcon,
  MapPin,
  Target,
  Users,
} from "lucide-react";
import type { ProgramContent } from "@/lib/programsContent";
import Reveal from "@/components/Reveal";
import FullscreenImageViewer from "@/components/FullscreenImageViewer";

export default function ProgramDetailPage({ program }: { program: ProgramContent }) {
  const Icon = program.icon;
  const whatWeDo = program.whatWeDo ?? program.activities ?? [];
  const whoBenefits = program.whoBenefits ?? program.beneficiaries ?? [];
  const locations = program.locations ?? program.geography ?? "Location details to be confirmed.";

  const factItems = [
    { label: "Focus", value: program.tag },
    { label: "Geography", value: locations },
    { label: "Who we serve", value: whoBenefits[0] ?? "Community members" },
    {
      label: "Indicative annual budget",
      value: program.annualBudget ? program.annualBudget.replace(/^Indicative annual budget:\s*/i, "") : "Budget to be confirmed",
    },
  ];

  const healthTrackRecord = [
    { label: "Free Eye Camp", fy22: "₹84,536", fy26: "₹2,54,047" },
    { label: "Medical Health Camp", fy22: "₹65,053", fy26: "₹3,06,316" },
    { label: "AIDS Awareness", fy22: "₹10,250", fy26: "₹12,813" },
  ];

  const helpOptions = [
    { title: "Donate", description: program.howToHelp[0] ?? "Support the programme through the Foundation's donation route." },
    { title: "Volunteer", description: program.howToHelp[1] ?? "Help with practical field and community support." },
    { title: "Partner with us", description: program.howToHelp[2] ?? "Collaborate with the Foundation on programme support." },
  ];

  const budgetAmount = program.annualBudget ? program.annualBudget.replace(/^Indicative annual budget:\s*/i, "") : "Budget to be confirmed";

  return (
    <main className="container-seva py-14 md:py-18">
      <Reveal>
        <section className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15 text-marigold md:h-12 md:w-12">
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </span>
              <span className="eyebrow">{program.tag}</span>
            </div>

            <h1 className="mt-5 font-display text-4xl leading-tight text-maroon dark:text-ivory md:text-5xl">
              {program.title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-sandalwood dark:text-ivory-soft/75 md:text-lg">
              {program.shortIntro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={program.ctaHref} className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory transition-transform hover:scale-[1.02] dark:bg-marigold dark:text-charcoal">
                {program.ctaLabel}
              </Link>
              <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-maroon/30 px-6 py-3 text-sm font-semibold text-maroon transition-colors hover:bg-maroon/5 dark:border-marigold/30 dark:text-marigold dark:hover:bg-marigold/10">
                <ArrowLeft className="h-4 w-4" />
                Back to programs
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {factItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-maroon/10 bg-white/60 p-3 dark:border-marigold/15 dark:bg-charcoal-soft/70">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood/70 dark:text-ivory-soft/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-maroon dark:text-ivory">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-maroon/10 bg-ivory-soft shadow-[0_18px_45px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
            {program.image ? (
              <FullscreenImageViewer
                images={program.photos.length > 0 ? program.photos : [{ src: program.image, alt: program.title, caption: program.title }]}
                initialIndex={0}
                sizes="(max-width: 768px) 90vw, 560px"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                Foundation photographs for this programme will be added when verified programme-specific images are available.
              </div>
            )}
          </div>
        </section>
      </Reveal>

      <Reveal className="mt-10">
        <section className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(11,15,140,0.03)] dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
          <div className="mb-5 flex items-center gap-3">
            <HeartHandshake className="h-5 w-5 text-marigold" />
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">At a glance</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-maroon/10 bg-ivory-soft p-5 dark:border-marigold/15 dark:bg-charcoal">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-marigold" />
                <h3 className="font-display text-xl text-maroon dark:text-ivory">Why this matters</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">{program.problem}</p>
            </article>

            <article className="rounded-[1.5rem] border border-maroon/10 bg-ivory-soft p-5 dark:border-marigold/15 dark:bg-charcoal">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-marigold" />
                <h3 className="font-display text-xl text-maroon dark:text-ivory">What we do</h3>
              </div>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                {whatWeDo.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal-soft/80">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-marigold" />
                <h3 className="font-display text-base text-maroon dark:text-ivory">Who we serve</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                {whoBenefits.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.25rem] border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal-soft/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-marigold" />
                <h3 className="font-display text-base text-maroon dark:text-ivory">Where we work</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">{locations}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="mt-10">
        <section className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(11,15,140,0.03)] dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-marigold" />
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">Our Work & Progress</h2>
          </div>

          {program.slug === "health" ? (
            <>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                Historical figures from audited financial records for the Foundation’s health outreach work.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {healthTrackRecord.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-maroon/10 bg-ivory-soft p-4 dark:border-marigold/15 dark:bg-charcoal">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sandalwood/70 dark:text-ivory-soft/70">{item.label}</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                      <div className="rounded-xl border border-maroon/10 bg-white/70 px-3 py-2 dark:border-marigold/15 dark:bg-charcoal-soft">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-sandalwood/70 dark:text-ivory-soft/70">FY22</p>
                        <p className="mt-1 text-base font-semibold text-maroon dark:text-marigold">{item.fy22}</p>
                      </div>
                      <div className="rounded-xl border border-maroon/10 bg-white/70 px-3 py-2 dark:border-marigold/15 dark:bg-charcoal-soft">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-sandalwood/70 dark:text-ivory-soft/70">FY26</p>
                        <p className="mt-1 text-base font-semibold text-maroon dark:text-marigold">{item.fy26}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-5 rounded-[1.5rem] border border-maroon/10 bg-ivory-soft p-5 dark:border-marigold/15 dark:bg-charcoal">
              <p className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                {program.trackRecord ?? program.impact ?? "Track record information will be added when verified historical records are available."}
              </p>
            </div>
          )}
        </section>
      </Reveal>

      <Reveal className="mt-8">
        <section className="rounded-[2rem] border border-maroon/10 bg-white/60 p-5 shadow-[0_12px_28px_rgba(11,15,140,0.03)] dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood/70 dark:text-ivory-soft/70">Programme plan</p>
              <p className="mt-2 text-3xl font-display text-maroon dark:text-marigold">{budgetAmount}</p>
            </div>
            <div className="rounded-full border border-maroon/10 bg-ivory-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood dark:border-marigold/15 dark:bg-charcoal dark:text-ivory-soft/80">
              Indicative annual budget
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/70">Planning estimate, not historical expenditure.</p>
        </section>
      </Reveal>

      <Reveal className="mt-10">
        <section className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 shadow-[0_18px_40px_rgba(11,15,140,0.03)] dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
          <div className="mb-5 flex items-center gap-3">
            <ImageIcon className="h-5 w-5 text-marigold" />
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">{program.title} in Action</h2>
          </div>

          {program.photos.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {program.photos.map((photo) => (
                <figure key={`${photo.src}-${photo.alt}`} className="overflow-hidden rounded-[1.5rem] border border-maroon/10 bg-ivory-soft dark:border-marigold/15 dark:bg-charcoal">
                  <div className="relative aspect-[4/3]">
                    <FullscreenImageViewer
                      src={photo.src}
                      alt={photo.alt}
                      caption={photo.caption}
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
                      className="h-full w-full"
                    />
                  </div>
                  <figcaption className="p-3 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/75">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-maroon/15 p-5 text-sm leading-relaxed text-sandalwood dark:border-marigold/20 dark:text-ivory-soft/70">
              Foundation photographs for this programme will be added when verified programme-specific images are available.
            </div>
          )}
        </section>
      </Reveal>

      <Reveal className="mt-8">
        <section className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-5 w-5 text-marigold" />
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">Monitoring & Reporting</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
            The Foundation reviews progress through documented activity records, beneficiary coordination and annual programme reporting.
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
            {(program.monitoring ?? [
              "Field coordination and activity documentation for programme delivery.",
              "Annual review of support and beneficiary reach against plans.",
              "Public reporting through Foundation records and partner communication channels.",
            ]).slice(0, 3).map((item, index) => (
              <li key={`${item}-${index}`} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal className="mt-10">
        <section className="rounded-[2rem] border border-maroon/10 bg-maroon/5 p-6 shadow-[0_18px_40px_rgba(11,15,140,0.03)] dark:border-marigold/15 dark:bg-marigold/10 md:p-7">
          <div className="flex items-center gap-3">
            <HeartHandshake className="h-5 w-5 text-marigold" />
            <h2 className="font-display text-2xl text-maroon dark:text-ivory">Help strengthen {program.title}</h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {helpOptions.map((option) => {
              const isDonate = option.title === "Donate";
              const isVolunteer = option.title === "Volunteer";

              const href = isDonate ? program.ctaHref : isVolunteer ? "/volunteer" : "/contact";
              const actionLabel = isDonate ? "Take action" : "Learn more";

              return (
                <div key={option.title} className="rounded-[1.5rem] border border-maroon/10 bg-white/75 p-4 dark:border-marigold/15 dark:bg-charcoal/70">
                  <div className="flex items-center gap-2">
                    {option.title === "Donate" ? <CircleDollarSign className="h-4 w-4 text-marigold" /> : option.title === "Volunteer" ? <BadgeCheck className="h-4 w-4 text-marigold" /> : <HandCoins className="h-4 w-4 text-marigold" />}
                    <h3 className="font-display text-lg text-maroon dark:text-ivory">{option.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">{option.description}</p>
                  <Link href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-maroon dark:text-marigold">
                    {actionLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {program.contact && program.contact.length > 0 && (
            <div className="mt-5 rounded-[1.25rem] border border-maroon/10 bg-white/70 p-4 dark:border-marigold/15 dark:bg-charcoal/60">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood/70 dark:text-ivory-soft/70">Contact</p>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                {program.contact.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </Reveal>
    </main>
  );
}
