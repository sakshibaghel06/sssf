import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardCheck, FileText, ShieldAlert, Users } from "lucide-react";
import { foundationProgramPhotos } from "@/lib/foundationPhotos";

export const metadata: Metadata = {
  title: "Case Studies | Sri Sai Swamy Seva Foundation",
  description: "Documented foundation project stories and verified field evidence for Sri Sai Swamy Seva Foundation.",
};

const schoolDevelopmentPhotos = [
  foundationProgramPhotos.education[1],
  foundationProgramPhotos.education[2],
  foundationProgramPhotos.education[3],
  foundationProgramPhotos.education[4],
  foundationProgramPhotos.education[5],
];

const projectFacts = [
  { label: "Focus", value: "School infrastructure and community action" },
  { label: "Locations", value: "Rural areas of Chintamani and Srinivasapura taluks" },
  { label: "Verified work", value: "Plastering, painting, compound wall renovation, school-material support" },
  { label: "Status", value: "Documented evidence available; certain details still being verified" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container-seva py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="eyebrow">Project stories</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-maroon dark:text-ivory md:text-5xl">
              Government School Development & Community Action
            </h1>
            <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/75 md:text-lg">
              A source-backed example of public-facing school infrastructure support carried out by the Foundation in rural areas of Chintamani and Srinivasapura taluks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/education" className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory transition-transform hover:scale-[1.02] dark:bg-marigold dark:text-charcoal">
                Explore Education programme
              </Link>
              <Link href="/gallery" className="rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon dark:border-marigold dark:text-marigold">
                View gallery
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-maroon/10 bg-ivory-soft shadow-[0_18px_40px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src={schoolDevelopmentPhotos[0].src}
                alt={schoolDevelopmentPhotos[0].alt}
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
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {projectFacts.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal-soft/70">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sandalwood/70 dark:text-ivory-soft/70">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-maroon dark:text-ivory">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">1. Project overview</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              The Foundation’s school development work is one of the strongest source-backed project examples in the current evidence set. The available material supports broad activity in rural schools of Chintamani and Srinivasapura taluks, including school environment improvement, community participation, and practical support for students.
            </p>
          </article>

          <article className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">2. The need / challenge</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              The source material identifies practical infrastructure needs in government schools, including deteriorated walls and a need for safer, more dignified school spaces. It also points to the need to support students with education material in economically weaker households.
            </p>
          </article>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">3. What the Foundation did</h2>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                "Plastering and painting of Government school buildings",
                "Renovation of decayed school compound walls",
                "School bags and education-material support where appropriate",
              ].map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-maroon/10 bg-ivory-soft p-4 text-sm leading-relaxed text-sandalwood dark:border-marigold/15 dark:bg-charcoal dark:text-ivory-soft/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">4. Evidence from the field</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              The project is strongly supported by the Foundation’s media library. The available school-development photographs show volunteers and community participants carrying out mural-painting and school-wall work in a clear education-support setting. These images provide strong field evidence for the activity itself, while exact project expenditure, precise school name, and measured student outcomes remain unverified in the current source set.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="mb-5">
            <span className="eyebrow">Photo evidence</span>
            <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">School development activity in the field</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {schoolDevelopmentPhotos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-[1.5rem] border border-maroon/10 bg-ivory-soft dark:border-marigold/15 dark:bg-charcoal-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw" className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/75">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">5. What is currently verified</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              <li>• Plastering and painting of Government school buildings.</li>
              <li>• Renovation of decayed school compound walls.</li>
              <li>• Distribution of school bags and education materials to poor students where relevant.</li>
              <li>• Activity in rural areas of Chintamani and Srinivasapura taluks.</li>
              <li>• High-confidence field photographs showing school mural-painting and school-wall activity.</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-maroon/10 bg-white/60 p-6 dark:border-marigold/15 dark:bg-charcoal-soft/70 md:p-7">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-marigold" />
              <h2 className="font-display text-2xl text-maroon dark:text-ivory">6. Project details still being documented</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
              <li>• Exact project expenditure is not currently verified in the source material.</li>
              <li>• Exact school name and precise facility location are not yet verified.</li>
              <li>• Teacher or beneficiary testimonial is not currently available in the project data.</li>
              <li>• Measured student outcome data is not currently documented in the source set.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 bg-maroon/5 p-6 dark:border-marigold/15 dark:bg-marigold/10 md:p-7">
            <span className="eyebrow">Next steps</span>
            <h2 className="mt-3 font-display text-3xl text-maroon dark:text-ivory">Continue exploring related work</h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/education" className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory dark:bg-marigold dark:text-charcoal">
                Education programme <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link href="/gallery" className="rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon dark:border-marigold dark:text-marigold">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
