import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { programMap } from "@/lib/programsContent";

export const metadata: Metadata = {
  title: "Feeding Hunger",
  description: "Feeding Hunger initiative covering school meal support, dry ration kits, community kitchens and elder support in Chintamani and Srinivasapura taluks.",
};

export default function FeedingHungerPage() {
  return <ProgramDetailPage program={programMap.get("feeding-hunger")!} />;
}
