import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Child Welfare",
  description: "Child welfare and education continuity support information for Sri Sai Swamy Seva Foundation.",
};

export default function ChildWelfarePage() {
  return <ProgramDetailPage program={programMap.get("child-welfare")!} />;
}
