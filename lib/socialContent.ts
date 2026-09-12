export type SocialPlatform = "Instagram" | "Facebook" | "YouTube" | "LinkedIn" | "WhatsApp";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
  label: string;
  status: string;
};

export const socialContent: SocialLink[] = [
  {
    platform: "Instagram",
    url: "",
    label: "Instagram",
    status: "Verified Instagram link to be added",
  },
  {
    platform: "Facebook",
    url: "",
    label: "Facebook",
    status: "Verified Facebook link to be added",
  },
  {
    platform: "YouTube",
    url: "",
    label: "YouTube",
    status: "Verified YouTube link to be added",
  },
  {
    platform: "LinkedIn",
    url: "",
    label: "LinkedIn",
    status: "Verified LinkedIn link to be added",
  },
  {
    platform: "WhatsApp",
    url: "",
    label: "WhatsApp",
    status: "Verified WhatsApp contact link to be added",
  },
];

export const socialSectionStatus = "Verified social links will be added as platform permissions and URLs are confirmed.";
