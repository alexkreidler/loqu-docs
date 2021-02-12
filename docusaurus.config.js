const siteName = "Loqu";
const path = require("path");
const theme = require("prism-react-renderer/themes/github");

console.log("started");
// console.log(theme);

module.exports = {
  title: siteName,
  tagline:
    "A powerful frontend library for writing and using Semantic Web Components.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "icons/favicon.ico",
  organizationName: "alexkreidler", // Usually your GitHub org/user name.
  projectName: "loqu", // Usually your repo name.
  themeConfig: {
    // prism: {
    //   theme: require("prism-react-renderer/themes/github"),
    //   darkTheme: require("prism-react-renderer/themes/dracula"),
    //   // theme: theme,
    //   // darkTheme: theme, // require("prism-react-renderer/themes/dracula"),
    // },
    sidebarCollapsible: false,

    navbar: {
      title: siteName,
      logo: {
        alt: "Loqu Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/alexkreidler",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Loqu Project Contributors. `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "getting-started",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "my-fs-empty")],
};
