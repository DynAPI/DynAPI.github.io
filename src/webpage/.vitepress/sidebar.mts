import { DefaultTheme } from "vitepress";

const sidebarGuide: DefaultTheme.SidebarItem[] = [
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

const sidebarReferences: DefaultTheme.SidebarItem[] = [
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

export default <DefaultTheme.Sidebar>{
    '/guide/': { items: sidebarGuide },
    '/references/': { items: sidebarReferences },
}
