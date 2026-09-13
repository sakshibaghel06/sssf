import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Health",
  description: "Health initiative for rural healthcare access, eye camps, dental check-ups and preventive community care in Chintamani and Srinivasapura taluks.",
};

export default function HealthPage() {
  return <ProgramDetailPage program={programMap.get("health")!} />;
}
