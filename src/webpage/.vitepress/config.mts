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
      ['meta', { name: 'theme-color', content: '#6196ff' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:title', content: 'DynAPI | an out-of-the-box Dynamic API for many databases' }],
      ['meta', { property: 'og:site_name', content: 'DynAPI' }],
      ['meta', { property: 'og:image', content: 'https://dynapi.github.io/og-image.png' }],
      ['meta', { property: 'og:image:type', content: 'image/png' }],
      ['meta', { property: 'og:url', content: 'https://dynapi.github.io/' }],
  ],
  themeConfig: {
    logo: {
      src: '/dynapi.svg',
      width: 24,
      height: 24,
    },
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
