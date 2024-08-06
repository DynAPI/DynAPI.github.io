import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.mjs";
import nav from "./nav.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "DynAPI",
  titleTemplate: "DynAPI",
  description: "Dynamic API for many Databases",
  srcDir: "src/",
  srcExclude: ['**/README.md', '**TODO.md'],
  lastUpdated: true,
  cleanUrls: true,
  head: [
      // favicon
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/dynapi.svg' }],
  ],
  themeConfig: {
    logo: '/dynapi.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DynAPI/org.dynapi.dynapi' },
    ],
    search: {
      provider: 'local',
    },
    nav: nav,
    sidebar: sidebar,
    footer: {
      copyright: "Copyright © 2024-present DynAPI",
    }
  },
  ignoreDeadLinks: 'localhostLinks',
  markdown: {
    image: {
      lazyLoading: true,
    }
  }
})
