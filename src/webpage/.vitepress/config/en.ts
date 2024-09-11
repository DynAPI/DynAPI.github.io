import {DefaultTheme, defineConfig} from "vitepress";


export const en = defineConfig({
    lang: 'en-US',
    description: "an out-of-the-box Dynamic API for many databases",

    themeConfig: {
        nav: nav(),
        sidebar: {
            '/guide/': { items: sidebarGuide() },
            '/references/': { items: sidebarReferences() },
        },
    }
})


function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: '/guide/what-is-dynapi/',
            activeMatch: '/guide/',
        },
        {
            text: "References",
            link: '/references/',
            activeMatch: '/references/',
        },
        {
            text: "Repositories",
            items: [
                {
                    text: "DynAPI",
                    link: 'https://github.com/DynAPI/org.dynapi.DynAPI',
                    target: '_blank',
                },
                {
                    text: "DynAPI (v1)",
                    link: 'https://github.com/DynAPI/DynAPI-v1',
                    target: '_blank',
                },
                {
                    text: "DynAPI Website",
                    link: 'https://github.com/DynAPI/DynAPI.github.io',
                    target: '_blank',
                },
                {
                    text: "The Interceptor",
                    link: 'https://github.com/DynAPI/Interceptor',
                    target: '_blank',
                },
                {
                    text: "org.dynapi:squirtle",
                    link: 'https://github.com/DynAPI/org.dynapi.squirtle',
                    target: '_blank',
                },
                {
                    text: "org.dynapi:openapispec",
                    link: 'https://github.com/DynAPI/org.dynapi.openapispec',
                    target: '_blank',
                },
                {
                    text: "org.dynapi:json-schema-gen",
                    link: 'https://github.com/DynAPI/org.dynapi.json-schema-gen',
                    target: '_blank',
                },
                {
                    text: "org.dynapi:common",
                    link: 'https://github.com/DynAPI/org.dynapi.common',
                    target: '_blank',
                },
            ]
        },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            items: [
                {
                    text: "What is DynAPI?",
                    link: "/guide/what-is-dynapi/",
                },
                {
                    text: "Getting Started",
                    link: "/guide/quickstart/",
                },
                {
                    text: "Proxy Server",
                    link: "/guide/proxy-server/",
                    collapsed: true,
                    items: [
                        {
                            text: "NGINX",
                            link: "/guide/proxy-server/nginx/",
                        },
                        {
                            text: "Apache",
                            link: "/guide/proxy-server/apache/",
                        }
                    ]
                },
            ]
        },
        {
            text: "Configuration",
            link: "/references/config/"
        }
    ]
}

function sidebarReferences(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Reference",
            link: "/references/",
            items: [
                {
                    text: "Configuration",
                    link: "/references/config/"
                }
            ]
        }
    ]
}
