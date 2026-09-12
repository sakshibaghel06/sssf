import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Education",
  description: "Education support activities and community learning service information for Sri Sai Swamy Seva Foundation.",
};

export default function EducationPage() {
  return <ProgramDetailPage program={programMap.get("education")!} />;
}
