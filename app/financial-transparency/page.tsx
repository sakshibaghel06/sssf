import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Landmark, Scale, Receipt, ClipboardCheck } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import { financialDocuments, financialDocumentCategoryLabels, verificationLabels, documentStatusMap, FinancialDocument, VerificationStatus } from "@/lib/transparencyContent";

export const metadata: Metadata = {
  title: "Financial Transparency | Sri Sai Swamy Seva Foundation",
  description: "Financial transparency and document publication status for Sri Sai Swamy Seva Foundation. Public financial and compliance documents will be added when verified records are available.",
};

const iconMap = {
  "annual-report": FileText,
  audit: ClipboardCheck,
  "income-expenditure": Receipt,
  "balance-sheet": Landmark,
  "supporting-financial-record": FileText,
  "project-report": FileText,
  utilization: Scale,
  compliance: ClipboardCheck,
};

export default function FinancialTransparencyPage() {
  const documents: FinancialDocument[] = financialDocuments;

  return (
    <>
      <section className="container-seva py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Financial Transparency</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-maroon dark:text-ivory leading-tight">
            Financial Transparency
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            This page is intended to provide access to available financial and accountability documents for Sri Sai Swamy Seva Foundation. Where documents are not yet available publicly, the record is marked as publication pending.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/transparency" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              Transparency overview
            </Link>
            <Link href="/legal" className="rounded-full border border-maroon dark:border-marigold px-6 py-3 text-sm font-semibold text-maroon dark:text-marigold">
              Legal & Compliance
            </Link>
          </div>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="py-16 md:py-20">
        <div className="container-seva">
          <div className="grid gap-6 md:grid-cols-2">
            {documents.map((doc) => {
              const Icon = iconMap[doc.category];
              const statusMap = {
                verified: "VERIFIED",
                pending: "PUBLICATION PENDING",
                "not-published": "NOT PUBLISHED",
              } as Record<VerificationStatus, string>;

              return (
                <article key={doc.id} className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15 text-marigold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-xl text-maroon dark:text-ivory">{doc.title}</h3>
                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${doc.status === "verified" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200" : "bg-sand/20 text-sandalwood dark:bg-marigold/10 dark:text-marigold"}`}> {statusMap[doc.status]} </span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-sandalwood dark:text-ivory-soft/60">
                        <span>{doc.year || "Publication Pending"}</span>
                        <span className="mx-1">●</span>
                        <span>{financialDocumentCategoryLabels[doc.category]}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                        {doc.description}
                      </p>
                      {doc.sourceFilenames?.length ? (
                        <p className="mt-3 text-[11px] leading-relaxed text-sandalwood/70 dark:text-ivory-soft/50">
                          Source: {doc.sourceFilenames.join(", ")}
                        </p>
                      ) : null}
                      <div className="mt-5">
                        {doc.href ? (
                          <a
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-maroon dark:text-marigold"
                          >
                            View PDF →
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-sandalwood dark:text-ivory-soft/70">
                            Publication Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft dark:bg-charcoal-soft py-16 md:py-20">
        <div className="container-seva">
          <div className="rounded-[2rem] border border-maroon/10 dark:border-marigold/15 bg-white/50 dark:bg-charcoal-soft/50 p-8">
            <div className="flex flex-wrap gap-4">
              {Object.entries(verificationLabels).map(([key, label]) => (
                <span key={key} className="inline-flex rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon dark:text-marigold">
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                {documentStatusMap.pending}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
