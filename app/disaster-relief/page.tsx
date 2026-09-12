import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Disaster Relief",
  description: "Disaster relief and emergency welfare coordination information for Sri Sai Swamy Seva Foundation.",
};

export default function DisasterReliefPage() {
  return <ProgramDetailPage program={programMap.get("disaster-relief")!} />;
}
