"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/reviews", label: "Reviews" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];

const PROGRAM_DROPDOWN_LINKS = [
  { href: "/health", label: "Health" },
  { href: "/education", label: "Education" },
  { href: "/women-empowerment", label: "Women Empowerment" },
  { href: "/feeding-hunger", label: "Feeding Hunger" },
];

const IMPACT_DROPDOWN_LINKS = [
  { href: "/impact", label: "Our Impact" },
  { href: "/stories", label: "Beneficiary Stories" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);
  const pathname = usePathname();

  const isProgramsActive = PROGRAM_DROPDOWN_LINKS.some((link) => pathname === link.href);
  const isImpactActive = IMPACT_DROPDOWN_LINKS.some((link) => pathname === link.href)
    || pathname.startsWith("/stories/")
    || pathname.startsWith("/case-studies/");

  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-ivory/95 shadow-[0_1px_0_rgba(11,15,140,0.04)] backdrop-blur-md dark:border-marigold/10 dark:bg-charcoal/95">
      <div className="container-seva flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo-full.png"
            alt="Sri Sai Swamy Seva Foundation"
            width={112}
            height={112}
            priority
            className="h-12 w-12 shrink-0"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-base text-maroon dark:text-ivory">Sri Sai Swamy Seva</span>
            <span className="mt-1 text-[10px] tracking-[0.2em] text-marigold-dark dark:text-marigold">FOUNDATION</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative flex items-center py-2 pb-4"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
            onFocusCapture={() => setProgramsOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setProgramsOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={programsOpen}
              aria-haspopup="menu"
              onClick={() => setProgramsOpen((value) => !value)}
              className={`relative inline-flex items-center gap-2 py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-marigold after:transition-transform hover:after:scale-x-100 ${
                isProgramsActive || programsOpen
                  ? "font-semibold text-maroon after:scale-x-100 dark:text-marigold"
                  : "text-sandalwood dark:text-ivory-soft/80 hover:text-maroon dark:hover:text-marigold"
              }`}
            >
              Programs
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>

            {programsOpen && (
              <div className="absolute left-0 top-full min-w-[220px] rounded-2xl border border-maroon/10 bg-ivory p-2 shadow-[0_18px_36px_rgba(11,15,140,0.08)] dark:border-marigold/15 dark:bg-charcoal-soft">
                {PROGRAM_DROPDOWN_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setProgramsOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                        active
                          ? "bg-maroon/5 font-semibold text-maroon dark:bg-marigold/10 dark:text-marigold"
                          : "text-sandalwood hover:bg-maroon/5 dark:text-ivory-soft/80 dark:hover:bg-marigold/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`relative py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-marigold after:transition-transform hover:after:scale-x-100 ${
              pathname === "/about"
                ? "font-semibold text-maroon after:scale-x-100 dark:text-marigold"
                : "text-sandalwood dark:text-ivory-soft/80 hover:text-maroon dark:hover:text-marigold"
            }`}
          >
            About
          </Link>

          <div
            className="relative flex items-center py-2 pb-4"
            onMouseEnter={() => setImpactOpen(true)}
            onMouseLeave={() => setImpactOpen(false)}
            onFocusCapture={() => setImpactOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setImpactOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={impactOpen}
              aria-haspopup="menu"
              onClick={() => setImpactOpen((value) => !value)}
              className={`relative inline-flex items-center gap-2 py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-marigold after:transition-transform hover:after:scale-x-100 ${
                isImpactActive || impactOpen
                  ? "font-semibold text-maroon after:scale-x-100 dark:text-marigold"
                  : "text-sandalwood dark:text-ivory-soft/80 hover:text-maroon dark:hover:text-marigold"
              }`}
            >
              Impact
              <ChevronDown className={`h-4 w-4 transition-transform ${impactOpen ? "rotate-180" : ""}`} />
            </button>

            {impactOpen && (
              <div className="absolute left-0 top-full min-w-[220px] rounded-2xl border border-maroon/10 bg-ivory p-2 shadow-[0_18px_36px_rgba(11,15,140,0.08)] dark:border-marigold/15 dark:bg-charcoal-soft">
                {IMPACT_DROPDOWN_LINKS.map((link) => {
                  const active = pathname === link.href || (link.href === "/stories" && pathname.startsWith("/stories/")) || (link.href === "/case-studies" && pathname.startsWith("/case-studies/"));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setImpactOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                        active
                          ? "bg-maroon/5 font-semibold text-maroon dark:bg-marigold/10 dark:text-marigold"
                          : "text-sandalwood hover:bg-maroon/5 dark:text-ivory-soft/80 dark:hover:bg-marigold/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-marigold after:transition-transform hover:after:scale-x-100 ${
                  active
                    ? "font-semibold text-maroon after:scale-x-100 dark:text-marigold"
                    : "text-sandalwood dark:text-ivory-soft/80 hover:text-maroon dark:hover:text-marigold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/donate" className="button-primary px-5 py-2.5">
            Donate
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-maroon/20 dark:border-marigold/30"
          >
            {open ? <X className="h-5 w-5 text-maroon dark:text-marigold" /> : <Menu className="h-5 w-5 text-maroon dark:text-marigold" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu md:hidden ${open ? "mobile-menu-open" : ""}`}>
        <nav className="container-seva flex flex-col py-4">
          <div className="border-b border-maroon/5 py-2 dark:border-marigold/10">
            <button
              type="button"
              onClick={() => setProgramsOpen((value) => !value)}
              aria-expanded={programsOpen}
              className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-sandalwood dark:text-ivory-soft/80"
            >
              <span>Programs</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>

            {programsOpen && (
              <div className="mt-2 space-y-1 rounded-xl bg-maroon/5 p-2 dark:bg-marigold/10">
                {PROGRAM_DROPDOWN_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setProgramsOpen(false);
                        setOpen(false);
                      }}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        active
                          ? "bg-maroon/10 font-semibold text-maroon dark:bg-marigold/20 dark:text-marigold"
                          : "text-sandalwood dark:text-ivory-soft/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-b border-maroon/5 py-2 dark:border-marigold/10">
            <button
              type="button"
              onClick={() => setImpactOpen((value) => !value)}
              aria-expanded={impactOpen}
              className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-sandalwood dark:text-ivory-soft/80"
            >
              <span>Impact</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${impactOpen ? "rotate-180" : ""}`} />
            </button>

            {impactOpen && (
              <div className="mt-2 space-y-1 rounded-xl bg-maroon/5 p-2 dark:bg-marigold/10">
                {IMPACT_DROPDOWN_LINKS.map((link) => {
                  const active = pathname === link.href || (link.href === "/stories" && pathname.startsWith("/stories/")) || (link.href === "/case-studies" && pathname.startsWith("/case-studies/"));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setImpactOpen(false);
                        setOpen(false);
                      }}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        active
                          ? "bg-maroon/10 font-semibold text-maroon dark:bg-marigold/20 dark:text-marigold"
                          : "text-sandalwood dark:text-ivory-soft/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setOpen(false)} className="py-3 text-sm border-b border-maroon/5 dark:border-marigold/10 text-sandalwood dark:text-ivory-soft/80">
            About
          </Link>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm border-b border-maroon/5 dark:border-marigold/10 text-sandalwood dark:text-ivory-soft/80"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-maroon dark:bg-marigold px-5 py-3 text-center text-sm font-semibold text-ivory dark:text-charcoal"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
