export const site = {
  name: "BloomLTO",
  legalName: "BloomLTO LLC",
  domain: "bloomlto.com",
  url: "https://bloomlto.com",
  email: "info@bloomlto.com",
  tagline: "Your LTO library, finally searchable.",
  description:
    "BloomLTO archives files from your server to LTO tape, indexes every one in a database, and restores any file on request.",
  price: "$348.99",
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export const footerNav: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Requirements", href: "/how-it-works#requirements" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
