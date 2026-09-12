import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Healthcare outreach, health camp, and welfare support information for Sri Sai Swamy Seva Foundation.",
};

export default function HealthcarePage() {
  return <ProgramDetailPage program={programMap.get("healthcare")!} />;
}
