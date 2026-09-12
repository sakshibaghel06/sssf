import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, Landmark, BadgeCheck, Scale, BookOpen, Receipt, Building2 } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import { ORG } from "@/lib/orgConfig";
import { legalPageContent } from "@/lib/aboutContent";

export const metadata: Metadata = {
  title: "Legal & Compliance",
  description:
    "Verified legal and compliance information for Sri Sai Swamy Seva Foundation. Public documentation status and certificate categories are shown where evidence is available.",
};

const iconMap = [
  ShieldCheck,
  FileText,
  Landmark,
  BadgeCheck,
  Scale,
  BookOpen,
  Receipt,
  Building2,
];

export default function LegalPage() {
  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Legal & Compliance</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            Documentation and compliance overview
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            {ORG.name} maintains a public information and trust-oriented approach. Where the repository does not contain verified documentation, the public record below is marked as “Documentation to be provided / verified.”
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              About the foundation
            </Link>
            <Link href="/transparency" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              Transparency & Accountability
            </Link>
            <Link href="/financial-transparency" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              Financial Transparency
            </Link>
            <Link href="/donate" className="rounded-full bg-maroon dark:bg-marigold px-6 py-3 text-sm font-semibold text-ivory dark:text-charcoal">
              Support the work
            </Link>
          </div>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <div className="max-w-3xl">
            <span className="eyebrow">Compliance records</span>
            <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">
              Documentation status
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              {legalPageContent.summary}
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {["Organization Registration", "Tax & Compliance", "Government/Portal Registration"].map((section) => {
              const sectionRecords = legalPageContent.records.filter((record) => record.section === section);
              return (
                <section key={section}>
                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-maroon/10 dark:bg-marigold/15" />
                    <h3 className="font-display text-2xl text-maroon dark:text-ivory">{section}</h3>
                    <span className="h-px flex-1 bg-maroon/10 dark:bg-marigold/15" />
                  </div>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {sectionRecords.map((record) => {
                      const recordIndex = legalPageContent.records.indexOf(record);
                      const Icon = iconMap[recordIndex % iconMap.length];
                      const isVerified = record.status.toLowerCase().includes("verified");
                      return (
                        <div key={record.category} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 p-6 bg-white/50 dark:bg-charcoal-soft/40">
                          <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/10 text-maroon dark:text-marigold">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="flex-1">
                              <h4 className="font-display text-lg text-maroon dark:text-ivory">{record.category}</h4>
                              <div className="mt-3">
                                <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
                                  isVerified
                                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"
                                    : "bg-sand/20 text-sandalwood dark:bg-marigold/10 dark:text-marigold"
                                }`}>
                                  {record.status}
                                </span>
                              </div>
                              <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{record.detail}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-12">
            <div className="max-w-3xl">
              <span className="eyebrow">Public Documents</span>
              <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">
                {legalPageContent.documentsHeading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                {legalPageContent.documentsIntro}
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {legalPageContent.publicDocuments.map((doc) => (
                <article key={doc.title} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 bg-white/60 dark:bg-charcoal-soft/50 p-6">
                  <span className="rounded-full bg-marigold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon dark:text-marigold">
                    {doc.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-maroon dark:text-ivory">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{doc.description}</p>
                  {doc.sourceFilenames?.length ? (
                    <p className="mt-3 text-[11px] leading-relaxed text-sandalwood/70 dark:text-ivory-soft/50">
                      Source: {doc.sourceFilenames.join(", ")}
                    </p>
                  ) : null}
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-maroon px-5 py-2 text-xs font-semibold text-ivory transition hover:bg-maroon/90 dark:bg-marigold dark:text-charcoal dark:hover:bg-marigold/90"
                  >
                    View PDF →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="max-w-3xl">
              <span className="eyebrow">Other Organization Documents</span>
              <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Supporting documents</h2>
              <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                These source files are shown under neutral titles where their specific legal or financial category is not established by the filename alone.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {legalPageContent.otherDocuments.map((doc) => (
                <article key={doc.href} className="rounded-2xl border border-maroon/10 dark:border-marigold/15 bg-white/60 dark:bg-charcoal-soft/50 p-6">
                  <span className="rounded-full bg-marigold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon dark:text-marigold">{doc.category}</span>
                  <h3 className="mt-4 font-display text-xl text-maroon dark:text-ivory">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">{doc.description}</p>
                  <p className="mt-3 text-[11px] leading-relaxed text-sandalwood/70 dark:text-ivory-soft/50">Source: {doc.sourceFilenames.join(", ")}</p>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-maroon px-5 py-2 text-xs font-semibold text-ivory transition hover:bg-maroon/90 dark:bg-marigold dark:text-charcoal dark:hover:bg-marigold/90">
                    View PDF →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-maroon/20 dark:border-marigold/30 bg-maroon/5 dark:bg-charcoal-soft p-8">
            <h3 className="font-display text-2xl text-maroon dark:text-ivory">
              Document and verification note
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
              Where certificates, registrations, exemptions, or government IDs are not available in the repository, this page intentionally uses neutral wording and does not create or repeat legal claims. A verified document can be added to the public repository and linked here when available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
