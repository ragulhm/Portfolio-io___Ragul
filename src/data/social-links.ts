export interface SocialLink {
  icon: string;
  label: string;
  href: string;
  username?: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: "Mail",
    label: "Email",
    href: "mailto:Ragul.mr3391@gmail.com",
    username: "Ragul.mr3391@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    href: "tel:+918438173391",
    username: "+91 8438173391",
  },
  {
    icon: "Github",
    label: "GitHub",
    href: "https://github.com/ragulhm",
    username: "ragulhm",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ragul-m-965251252/",
    username: "Ragul M",
  },
];
