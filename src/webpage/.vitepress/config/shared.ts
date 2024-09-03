import {defineConfig} from "vitepress";


export const shared = defineConfig({
    title: "DynAPI",

    rewrites: {
        'en/:rest*': ':rest*'
    },

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
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
