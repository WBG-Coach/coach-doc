import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
require("dotenv").config();

const config: Config = {
  title: `Coach Doc ${process.env.COUNTRY}`,
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: `https://coachdigital.org/`,
  baseUrl: `/${process.env.COUNTRY}/docs`,

  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Coach App Logo",
        src: `img/coach_logo_${process.env.COUNTRY}.png`,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "appSidebar",
          position: "left",
          label: "Using the app",
        },
        {
          type: "docSidebar",
          sidebarId: "adminSidebar",
          position: "left",
          label: "Using the admin",
        },
        {
          type: "docSidebar",
          sidebarId: "codeSidebar",
          position: "left",
          label: "Developer documentation",
        },
        {
          href: `https://coachdigital.org/${process.env.COUNTRY}/download`,
          label: "Download the app",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/WBG-Coach",
            },
            {
              label: "Download app",
              href: `https://coachdigital.org/${process.env.COUNTRY}/download/`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The World Bank Group.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
