import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Spiritual Seva",
  description: "Spiritual seva, devotional gathering, and community service information for Sri Sai Swamy Seva Foundation.",
};

export default function SpiritualSevaPage() {
  return <ProgramDetailPage program={programMap.get("spiritual-seva")!} />;
}
