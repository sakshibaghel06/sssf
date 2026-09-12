import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Women Empowerment",
  description: "Women empowerment and family support information for Sri Sai Swamy Seva Foundation.",
};

export default function WomenEmpowermentPage() {
  return <ProgramDetailPage program={programMap.get("women-empowerment")!} />;
}
