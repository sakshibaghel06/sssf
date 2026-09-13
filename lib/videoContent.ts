export type VideoCategory = "Women Empowerment";

export type VideoRecord = {
  id: string;
  title: string;
  category: VideoCategory;
  description: string;
  videoFile: string;
  poster?: string;
  date?: string;
  location?: string;
  program: string;
  relatedProgrammeLink?: string;
  status: string;
};

export const videosContent: VideoRecord[] = [
  {
    id: "women-empowerment-1",
    title: "Women Empowerment Activity",
    category: "Women Empowerment",
    description: "A women empowerment activity video shared by the Foundation.",
    videoFile: "/videos/WhatsApp Video 2026-09-03 at 16.42.39.mp4",
    poster: "/images/WhatsApp-Image2.jpeg",
    program: "Women Empowerment",
    relatedProgrammeLink: "/women-empowerment",
    status: "Published",
  },
  {
    id: "women-empowerment-2",
    title: "Women Empowerment Activity",
    category: "Women Empowerment",
    description: "A women empowerment activity video shared by the Foundation.",
    videoFile: "/videos/WhatsApp Video 2026-09-03 at 16.44.39.mp4",
    poster: "/images/WhatsApp-Image2.jpeg",
    program: "Women Empowerment",
    relatedProgrammeLink: "/women-empowerment",
    status: "Published",
  },
];

export const videoShowcaseStatus = "Videos will be added here as verified foundation activities are documented.";
