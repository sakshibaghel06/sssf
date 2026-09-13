import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileCheck2, BadgeCheck, WalletCards, Landmark, HandCoins, ArrowRight } from "lucide-react";
import UnityDivider from "@/components/UnityDivider";
import DonateForm from "@/components/DonateForm";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Sri Sai Swamy Seva Foundation's health, education and relief programs with a one-time or monthly donation.",
};

const PRIORITY_INITIATIVES = [
  { label: "Health", detail: "Support treatment camps, medical aid, and essential care for families in need." },
  { label: "Education", detail: "Contribute to school support, learning materials, and educational access for children." },
  { label: "Women Empowerment", detail: "Support women-focused skills, dignity, leadership and community support initiatives." },
  { label: "Feeding Hunger", detail: "Help with food support, meal distribution, and practical relief for vulnerable communities." },
];

const INDICATIVE_BUDGETS = [
  { label: "Health", amount: "₹10,50,000" },
  { label: "Education", amount: "₹8,00,000" },
  { label: "Women Empowerment", amount: "₹7,50,000" },
  { label: "Feeding Hunger", amount: "₹12,00,000" },
];

export default function DonatePage() {
  return (
    <>
      <section className="container-seva pt-10 md:pt-14">
        <div className="max-w-3xl">
          <span className="eyebrow">Donate</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-maroon dark:text-ivory md:text-5xl">
            Support Srisai Swamy Seva Foundation.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sandalwood dark:text-ivory-soft/75 md:text-lg">
            Your donation helps sustain approved initiatives across health, education, women empowerment, feeding hunger, and other community service programmes rooted in service and accountability.
          </p>
        </div>
      </section>

      <div className="text-maroon/30 dark:text-marigold/20">
        <UnityDivider />
      </div>

      <section className="pb-10 pt-4 md:pb-14 md:pt-6">
        <div className="container-seva mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <DonateForm />
            </div>

            <div className="rounded-[28px] border border-maroon/10 bg-ivory-soft p-6 shadow-[0_18px_40px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft md:p-7">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-2xl leading-tight text-maroon dark:text-marigold">Where your donation supports</h2>
                <span className="rounded-full border border-maroon/15 bg-marigold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-maroon dark:border-marigold/20 dark:text-marigold">
                  Priority
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {PRIORITY_INITIATIVES.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 rounded-2xl border border-maroon/10 bg-white/60 p-3 dark:border-marigold/15 dark:bg-charcoal">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marigold/15 text-marigold">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                      <span className="mb-0.5 block font-semibold text-maroon dark:text-marigold">{row.label}</span>
                      {row.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal">
                <div className="flex items-center gap-3">
                  <Landmark className="h-4 w-4 shrink-0 text-maroon dark:text-marigold" strokeWidth={1.75} />
                  <h3 className="font-display text-base text-maroon dark:text-ivory">Indicative annual programme budget</h3>
                </div>

                <div className="mt-4 space-y-2">
                  {INDICATIVE_BUDGETS.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-3 rounded-xl border border-maroon/10 bg-ivory-soft px-3 py-2 dark:border-marigold/15 dark:bg-charcoal-soft">
                      <span className="text-xs font-medium text-sandalwood dark:text-ivory-soft/75">{item.label}</span>
                      <span className="text-xs font-semibold text-maroon dark:text-marigold">{item.amount}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-[11px] leading-relaxed text-sandalwood dark:text-ivory-soft/70">
                  Planning estimates for the initiative proposals, not amounts already raised or spent.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-maroon dark:text-marigold" strokeWidth={1.75} />
                    <h3 className="font-display text-sm text-maroon dark:text-ivory">80G registration reference</h3>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-maroon dark:text-marigold">ABFCS2398GF20224</p>
                </div>

                <div className="rounded-2xl border border-maroon/10 bg-white/60 p-4 dark:border-marigold/15 dark:bg-charcoal">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4 text-maroon dark:text-marigold" strokeWidth={1.75} />
                    <h3 className="font-display text-sm text-maroon dark:text-ivory">Official donation receipt</h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                    An official donation receipt is generated after successful payment verification and is issued to the donor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[24px] border border-maroon/10 bg-ivory-soft p-5 shadow-[0_12px_28px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
              <div className="flex items-center gap-2">
                <WalletCards className="h-4 w-4 text-maroon dark:text-marigold" strokeWidth={1.75} />
                <h3 className="font-display text-base text-maroon dark:text-ivory">Other ways to donate</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                Official bank transfer and UPI donation details have not yet been confirmed in the verified project source material. Official bank/UPI details will be published once confirmed.
              </p>
            </div>

            <div className="rounded-[24px] border border-maroon/10 bg-ivory-soft p-5 shadow-[0_12px_28px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
              <div className="flex items-center gap-2">
                <HandCoins className="h-4 w-4 text-maroon dark:text-marigold" strokeWidth={1.75} />
                <h3 className="font-display text-base text-maroon dark:text-ivory">How donations are utilized</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                The Foundation’s transparency framework describes utilization through programme delivery, supporting records, and public reporting. Verified expenditure details will be published when official financial records are finalized and verified.
              </p>
            </div>

            <div className="rounded-[24px] border border-maroon/10 bg-ivory-soft p-5 shadow-[0_12px_28px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-maroon dark:text-marigold" strokeWidth={1.75} />
                <h3 className="font-display text-base text-maroon dark:text-ivory">Financial transparency & reporting</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/75">
                Raised or utilized figures are not currently published because verified official financial records are not yet available in the project repository.
              </p>
              <div className="mt-3 space-y-2 text-xs font-semibold text-maroon dark:text-marigold">
                <Link href="/transparency" className="inline-flex items-center gap-1 underline decoration-marigold/60 underline-offset-4">Transparency <ArrowRight className="h-3 w-3" /></Link>
                <Link href="/financial-transparency" className="inline-flex items-center gap-1 underline decoration-marigold/60 underline-offset-4">Financial Transparency <ArrowRight className="h-3 w-3" /></Link>
                <Link href="/legal" className="inline-flex items-center gap-1 underline decoration-marigold/60 underline-offset-4">Legal & Compliance <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
