export const ORG = {
  name: process.env.ORG_NAME || "Sri Sai Swamy Seva Foundation",
  shortName: process.env.ORG_SHORT_NAME || "Sri Sai Swamy Seva Foundation",
  legalName: process.env.ORG_LEGAL_NAME || "Sri Sai Swamy Seva Foundation",
  addressLine:
    process.env.ORG_ADDRESS ||
    "Chikkaballapur / Kolar region, Karnataka, India",
  phone: process.env.ORG_PHONE || "+91 99452 16711",
  email: process.env.ORG_EMAIL || "contact@srisaiswamysevafoundation.com",
  website: process.env.ORG_WEBSITE || "www.srisaiswamysevafoundation.in",
  pan: process.env.ORG_PAN || "ABFCS2398G",
  facebook: process.env.ORG_FACEBOOK || "https://www.facebook.com/people/Srisai-swamy-seva-foundation/61594044470080",
  instagram: process.env.ORG_INSTAGRAM || "https://www.instagram.com/sssf_foundation?igsi=ZGltdmd4bHYzM2Nr",
  x: process.env.ORG_X || "https://x.com/SevaSwamy",
  legalPageTitle: "Legal and compliance",
  legalPageDescription:
    "Public legal and compliance information for Sri Sai Swamy Seva Foundation. Certificate and status details are shown only where verified documentation exists.",
  foundationProfileUrl: process.env.ORG_PROFILE_URL || "/Srisai-Swamy-Seva-Foundation.pdf",
};

export const ORG_CONTACT = {
  phoneDisplay: ORG.phone,
  emailDisplay: ORG.email,
  addressDisplay: ORG.addressLine,
  websiteDisplay: ORG.website,
};
