import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  GraduationCap,
  ShieldPlus,
  Users,
  Flame,
  Utensils,
  Baby,
} from "lucide-react";
import { foundationProgramPhotos } from "@/lib/foundationPhotos";

export type ProgramStatus = "verified" | "pending";

export type ProgramContent = {
  slug: string;
  title: string;
  tag: string;
  shortIntro: string;
  problem: string;
  objectives?: string[];
  activities?: string[];
  whoBenefits?: string[];
  beneficiaries?: string[];
  locations?: string;
  geography?: string;
  trackRecord?: string;
  annualBudget?: string;
  monitoring?: string[];
  impact?: string;
  whatWeDo?: string[];
  photos: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  howToHelp: string[];
  contact?: string[];
  image: string;
  icon: LucideIcon;
  accent: "sky" | "magenta" | "leaf" | "rust";
  ctaLabel: string;
  ctaHref: string;
};

export const priorityPrograms: ProgramContent[] = [
  {
    slug: "health",
    title: "Health",
    tag: "Health",
    shortIntro: "Rural healthcare access through general health camps, eye care, dental check-ups, preventive awareness, and elder and disability support in Chintamani Taluk and Srinivasapura Taluk.",
    problem: "Many families in Chintamani Taluk and Srinivasapura Taluk continue to face limited access to primary healthcare, preventive screening, and regular support for elderly and differently-abled persons.",
    objectives: [
      "Improve access to general healthcare and referral support for rural communities.",
      "Provide free eye camps and dental check-ups to underserved households.",
      "Strengthen preventive health awareness and support for elderly and disability care needs.",
    ],
    activities: [
      "General health camps and basic clinical support in rural communities.",
      "Free eye camps and dental check-ups.",
      "Preventive health awareness sessions and community health education.",
      "Support for elderly and disability care through outreach and coordination.",
    ],
    beneficiaries: [
      "Rural families facing healthcare access barriers.",
      "Older persons and persons with disabilities.",
      "Community members in Chintamani Taluk and Srinivasapura Taluk.",
    ],
    geography: "Chintamani Taluk and Srinivasapura Taluk, Karnataka.",
    trackRecord: "The initiative builds on the Foundation’s existing health outreach work and the audited-account figures maintained in its public records. Historical track-record information should be read alongside the audited financial records rather than treated as a forecast.",
    annualBudget: "Indicative annual budget: ₹10,50,000",
    monitoring: [
      "Field coordination and activity documentation for camps and outreach events.",
      "Review of beneficiary reach, service delivery and resource use against annual plans.",
      "Reporting through the Foundation’s public records and partner communication channels.",
    ],
    whoBenefits: [
      "Rural families facing healthcare access barriers.",
      "Older persons and persons with disabilities.",
      "Community members in Chintamani Taluk and Srinivasapura Taluk.",
    ],
    locations: "Chintamani Taluk and Srinivasapura Taluk, Karnataka.",
    impact: "Track record and audited-account figures reflect historical health outreach work. These figures are distinct from the indicative annual budget for planned future work.",
    photos: [...foundationProgramPhotos.healthcare],
    howToHelp: [
      "Support medical camp logistics, screenings, medicines and outreach coordination.",
      "Contribute toward preventive healthcare, disability care and elder support.",
      "Partner with the Foundation to strengthen rural healthcare access.",
    ],
    contact: [
      "Contact the Foundation through the official contact page for current coordination and partnership information.",
    ],
    image: foundationProgramPhotos.healthcare[0].src,
    icon: Stethoscope,
    accent: "sky",
    ctaLabel: "Support health",
    ctaHref: "/donate",
  },
  {
    slug: "education",
    title: "Education",
    tag: "Education",
    shortIntro: "Government school infrastructure improvement through repair, plastering and painting, learning support, mentoring, and community mobilisation in Chintamani and Srinivasapura taluks.",
    problem: "Government schools in Chintamani and Srinivasapura taluks need practical infrastructure support and resource inputs to maintain a safe, dignified, and functioning learning environment.",
    objectives: [
      "Improve school infrastructure through repair, plastering and painting.",
      "Support students with school bags, books and stationery.",
      "Facilitate career guidance and mentorship and mobilise community and volunteer support.",
    ],
    activities: [
      "Repair, plastering and painting of government school buildings and facilities.",
      "Distribution of school bags, books and stationery.",
      "Career guidance and mentorship for students.",
      "Community and volunteer mobilisation for school improvement.",
    ],
    beneficiaries: [
      "Government school students and teachers.",
      "Students in Chintamani and Srinivasapura taluks.",
      "Families and communities seeking stronger school infrastructure and student support.",
    ],
    geography: "Chintamani and Srinivasapura taluks, Karnataka.",
    trackRecord: "This initiative builds on the Foundation’s existing education engagement and public documentation of school support activity. Historical records should be distinguished from proposed annual planning estimates.",
    annualBudget: "Indicative annual budget: ₹8,00,000",
    monitoring: [
      "School-wise activity tracking and documentation of repair and support work.",
      "Verification of student materials distribution and school engagement records.",
      "Reporting against annual plan and community coordination.",
    ],
    whoBenefits: [
      "Government school students and teachers.",
      "Students in Chintamani and Srinivasapura taluks.",
      "Families and communities seeking stronger school infrastructure and student support.",
    ],
    locations: "Chintamani and Srinivasapura taluks, Karnataka.",
    impact: "Track record reflects the Foundation’s school support work, while this proposal sets out the planned annual budget and activity scope for future support.",
    photos: [...foundationProgramPhotos.education],
    howToHelp: [
      "Support school infrastructure repair, stationery and student resources.",
      "Volunteer with school engagement and community mobilisation efforts.",
      "Partner with the Foundation to strengthen government school support.",
    ],
    contact: [
      "Contact the Foundation through the official contact page for current coordination and partnership information.",
    ],
    image: foundationProgramPhotos.education[0].src,
    icon: GraduationCap,
    accent: "magenta",
    ctaLabel: "Support education",
    ctaHref: "/donate",
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    tag: "Women Empowerment",
    shortIntro: "Vocational skills training, Self Help Groups, menstrual hygiene support, and leadership development for women in distress and adolescent girls in Chintamani and Srinivasapura taluks.",
    problem: "Women and adolescent girls in these taluks often need access to livelihood pathways, confidence-building platforms, hygiene support, and social protection in times of distress.",
    objectives: [
      "Strengthen vocational skills and livelihood pathways for women.",
      "Support Self Help Groups and community-based women’s networks.",
      "Promote menstrual hygiene and adolescent girl support.",
      "Encourage recognition, sport and leadership opportunities for women.",
    ],
    activities: [
      "Vocational skills training for rural women.",
      "Support for Self Help Groups and community mobilisation.",
      "Menstrual hygiene awareness and adolescent girl support.",
      "Recognition, sport and leadership platform development for women.",
    ],
    beneficiaries: [
      "Women in distress.",
      "Rural women seeking skills, livelihood support and confidence building.",
      "Adolescent girls and women in Chintamani and Srinivasapura taluks.",
    ],
    geography: "Chintamani and Srinivasapura taluks, Karnataka.",
    trackRecord: "The proposal refers to the Foundation’s existing SHG investment information and women-focused support work. Historical SHG investment and past support activity should be treated as track record, not as the proposed annual budget.",
    annualBudget: "Indicative annual budget: ₹7,50,000",
    monitoring: [
      "Tracking of SHG and vocational training participation.",
      "Documentation of menstrual hygiene and leadership support activities.",
      "Review of benefit reach and annual program implementation.",
    ],
    whoBenefits: [
      "Women in distress.",
      "Rural women seeking skills, livelihood support and confidence building.",
      "Adolescent girls and women in Chintamani and Srinivasapura taluks.",
    ],
    locations: "Chintamani and Srinivasapura taluks, Karnataka.",
    impact: "Historical SHG investment information and women-focused support work are part of the track record. The annual budget below reflects the proposed plan for future implementation.",
    photos: [...foundationProgramPhotos.volunteers, ...foundationProgramPhotos.events].slice(0, 4),
    howToHelp: [
      "Support vocational training, SHG coordination and community mobilisation.",
      "Contribute toward menstrual hygiene support and leadership development.",
      "Partner with the Foundation to strengthen women’s welfare and livelihoods.",
    ],
    contact: [
      "Contact the Foundation through the official contact page for current coordination and partnership information.",
    ],
    image: foundationProgramPhotos.volunteers[0].src,
    icon: Users,
    accent: "magenta",
    ctaLabel: "Support women empowerment",
    ctaHref: "/donate",
  },
  {
    slug: "feeding-hunger",
    title: "Feeding Hunger",
    tag: "Feeding Hunger",
    shortIntro: "School meal support, dry ration kits, and volunteer-led feeding for poor school children, food-insecure families, elderly persons and disabled persons in Chintamani and Srinivasapura taluks.",
    problem: "Schoolchildren, low-income families, and elderly or disabled persons in Chintamani and Srinivasapura taluks face recurring food insecurity and a need for reliable, practical support.",
    objectives: [
      "Support meals for poor school children.",
      "Distribute dry ration kits to food-insecure families.",
      "Provide feeding support for elderly and disadvantaged persons.",
      "Strengthen community kitchen and volunteer-led food distribution.",
    ],
    activities: [
      "School meal support for poor children.",
      "Dry ration kit distribution to food-insecure families.",
      "Elderly and disadvantaged feeding support.",
      "Community kitchen and volunteer drives.",
    ],
    beneficiaries: [
      "Poor school children.",
      "Food-insecure families.",
      "Elderly and disabled persons in need of regular feeding support.",
    ],
    geography: "Chintamani and Srinivasapura taluks, Karnataka.",
    trackRecord: "The Foundation’s existing support includes 150+ students/families and 34+ disadvantaged elderly individuals. This is track record and historical support, not the indicative future annual budget.",
    annualBudget: "Indicative annual budget: ₹12,00,000",
    monitoring: [
      "Beneficiary documentation and distribution records for meal and ration support.",
      "Volunteer coordination and kitchen/community drive reporting.",
      "Annual review against planned support targets.",
    ],
    whoBenefits: [
      "Poor school children.",
      "Food-insecure families.",
      "Elderly and disabled persons in need of regular feeding support.",
    ],
    locations: "Chintamani and Srinivasapura taluks, Karnataka.",
    impact: "The existing support includes more than 150 students/families and 34+ disadvantaged elderly individuals. These figures reflect historical support and are distinct from the proposed annual budget.",
    photos: [...foundationProgramPhotos.annadanam],
    howToHelp: [
      "Support meal distribution, dry ration kits and community kitchen logistics.",
      "Volunteer in food drives and support coordination.",
      "Contribute toward feeding support for poor children and elderly persons.",
    ],
    contact: [
      "Contact the Foundation through the official contact page for current coordination and partnership information.",
    ],
    image: foundationProgramPhotos.annadanam[0].src,
    icon: Utensils,
    accent: "rust",
    ctaLabel: "Support feeding hunger",
    ctaHref: "/donate",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tag: "Healthcare",
    shortIntro: "Healthcare outreach, rural health camp and welfare support information for Sri Sai Swamy Seva Foundation.",
    problem: "The source supports healthcare and welfare activity that responds to community health needs through field healthcare services.",
    whatWeDo: [
      "The source identifies general rural health camps as a healthcare activity example.",
      "The source also describes free food and healthcare support for 34 disadvantaged elderly people as a source-supported activity example.",
    ],
    whoBenefits: [
      "Disadvantaged elderly people.",
      "Communities requiring rural health services and healthcare support.",
    ],
    locations: "Rural and urban areas of Chikkaballapura district; Rural and urban areas of Kolar district; Throughout India in general.",
    impact: "The organization’s source examples include a general rural health camp and a free food and healthcare support example for 34 disadvantaged elderly people. These are activity examples and should not be converted into total impact counters.",
    photos: [...foundationProgramPhotos.healthcare],
    howToHelp: [
      "Donate toward healthcare outreach and community health support.",
      "Coordinate verified healthcare support where field documentation is available.",
      "Contact the foundation for current healthcare program information.",
    ],
    image: foundationProgramPhotos.healthcare[0].src,
    icon: Stethoscope,
    accent: "sky",
    ctaLabel: "Support healthcare",
    ctaHref: "/donate",
  },
  {
    slug: "annadanam",
    title: "Annadanam",
    tag: "Food & Relief",
    shortIntro: "Feeding hunger through free food and dry-ration support for underserved communities.",
    problem: "The source includes feeding hunger as a major initiative and activity example involving food support for poor students and families.",
    whatWeDo: [
      "The source describes free food and dry-ration support to 150 poor students and their families.",
      "The source also describes free food and healthcare support for 34 disadvantaged elderly people.",
    ],
    whoBenefits: [
      "Poor students and families.",
      "Disadvantaged elderly people.",
      "Communities requiring effective food support and hunger-relief coordination.",
    ],
    locations: "Rural and urban areas of Chikkaballapura district; Rural and urban areas of Kolar district; Throughout India in general.",
    impact: "The source example describes free food and dry-ration support for 150 poor students and their families and free food and healthcare support for 34 disadvantaged elderly people. These numbers are presented as activity examples, not cumulative impact statistics.",
    photos: [...foundationProgramPhotos.annadanam],
    howToHelp: [
      "Donate toward food support and hunger-relief coordination.",
      "Volunteer to help organize or support practical food service activities.",
      "Contact the foundation for current annadanam coordination and documentation.",
    ],
    image: foundationProgramPhotos.annadanam[0].src,
    icon: Utensils,
    accent: "rust",
    ctaLabel: "Support annadanam",
    ctaHref: "/donate",
  },
  {
    slug: "child-welfare",
    title: "Child Welfare",
    tag: "Children",
    shortIntro: "Support for children in need, adolescent girls, education continuity, and awareness on child sexual abuse.",
    problem: "The source identifies children in need and adolescent girl children as themes requiring education, welfare, and safety awareness support.",
    whatWeDo: [
      "The source describes child-focused awareness work including awareness programmes on child sexual abuse.",
      "The source also identifies children in need, education, and adolescent girls as themes for program attention.",
    ],
    whoBenefits: [
      "Children in need.",
      "Adolescent girl children.",
      "Students and families requiring support in education and welfare continuity.",
    ],
    locations: "Rural and urban areas of Chikkaballapura district; Rural and urban areas of Kolar district; Throughout India in general.",
    impact: "The source identifies child welfare themes and awareness work. No unsupported child-impact statistics are added.",
    photos: [...foundationProgramPhotos.childWelfare],
    howToHelp: [
      "Donate to support child-focused welfare, education continuity, and awareness initiatives.",
      "Volunteer to participate in child-focused awareness and educational activities where verified.",
      "Contact the foundation for documented child welfare activities and project needs.",
    ],
    image: foundationProgramPhotos.childWelfare[0].src,
    icon: Baby,
    accent: "leaf",
    ctaLabel: "Support child welfare",
    ctaHref: "/donate",
  },
  {
    slug: "disaster-relief",
    title: "Disaster Relief",
    tag: "Relief",
    shortIntro: "Disaster-relief activity is not described in the verified source material supplied for this phase.",
    problem: "Disaster-relief field activity is not supported by the provided source material and remains pending verified documentation.",
    whatWeDo: [
      "No explicit disaster-relief activity examples are provided in the source material for this phase.",
      "This program description remains pending verified source-backed project details.",
    ],
    whoBenefits: [
      "Communities and groups will be identified when verified disaster-relief records are supplied.",
    ],
    locations: "Program locations — to be verified",
    impact: "Program impact data — to be verified and updated with documented results.",
    photos: [],
    howToHelp: [
      "Contact the foundation for verified disaster-relief activity details when source-supported records are available.",
      "Do not add unsupported disaster-response examples.",
    ],
    image: "",
    icon: ShieldPlus,
    accent: "rust",
    ctaLabel: "Support relief",
    ctaHref: "/donate",
  },
  {
    slug: "spiritual-seva",
    title: "Spiritual Seva",
    tag: "Spiritual Care",
    shortIntro: "Spiritual-seva activity is not described in the verified source material supplied for this phase.",
    problem: "The source material supplied for this phase does not identify explicit spiritual-seva programming or events.",
    whatWeDo: [
      "No explicit spiritual-seva activities are described in the supplied source material.",
      "This program description remains pending verified source-backed project details.",
    ],
    whoBenefits: [
      "Program participants and community groups will be identified when verified source-backed spiritual-seva records are supplied.",
    ],
    locations: "Program locations — to be verified",
    impact: "Program impact data — to be verified and updated with documented results.",
    photos: [...foundationProgramPhotos.spiritualSeva],
    howToHelp: [
      "Contact the foundation for verified spiritual-seva activity details when source-supported records are available.",
      "Do not add unsupported spiritual activities.",
    ],
    image: foundationProgramPhotos.spiritualSeva[0].src,
    icon: Flame,
    accent: "sky",
    ctaLabel: "Support spiritual seva",
    ctaHref: "/donate",
  },
];

export const priorityProgramLinks = [
  { href: "/health", label: "Health" },
  { href: "/education", label: "Education" },
  { href: "/women-empowerment", label: "Women Empowerment" },
  { href: "/feeding-hunger", label: "Feeding Hunger" },
];

export const priorityProgramSlugs = priorityProgramLinks.map((link) => link.href.replace("/", ""));

export const programsContent: ProgramContent[] = priorityPrograms.filter((program) => priorityProgramSlugs.includes(program.slug));

export const programDetails = Object.fromEntries(
  priorityPrograms.map((p) => [p.slug, p])
) as Record<string, ProgramContent>;

export const programMap = new Map(priorityPrograms.map((p) => [p.slug, p]));
