import { Globe2, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { socialContent, socialSectionStatus } from "@/lib/socialContent";

const iconMap = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
};

export default function SocialSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-seva">
        <div className="max-w-2xl">
          <span className="eyebrow">Social media</span>
          <h2 className="mt-4 font-display text-3xl text-maroon dark:text-ivory">Stay connected</h2>
          <p className="mt-4 text-sm leading-relaxed text-sandalwood dark:text-ivory-soft/70">
            Verified social links and platform updates will be added as the foundation confirms the appropriate channels.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {socialContent.map((item) => {
            const PlatformIcon = iconMap[item.platform as keyof typeof iconMap] || Globe2;
            return (
              <div key={item.platform} className="group rounded-[2rem] border border-maroon/10 bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-marigold/50 hover:shadow-lg dark:border-marigold/15 dark:bg-charcoal-soft/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15 text-marigold transition-transform duration-300 group-hover:scale-105">
                  <PlatformIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-maroon dark:text-ivory">{item.platform}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-sandalwood dark:text-ivory-soft/60">{item.status}</p>
                {item.url ? (
                  <a href={item.url} className="mt-4 inline-block text-sm font-semibold text-maroon dark:text-marigold">{item.label}</a>
                ) : (
                  <span className="mt-4 block text-xs text-sandalwood dark:text-ivory-soft/60">{socialSectionStatus}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
