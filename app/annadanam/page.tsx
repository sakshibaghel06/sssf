import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Annadanam",
  description: "Annadanam food support and meal distribution information for Sri Sai Swamy Seva Foundation.",
};

export default function AnnadanamPage() {
  return <ProgramDetailPage program={programMap.get("annadanam")!} />;
}
