import { DefaultTheme } from "vitepress";

export default <DefaultTheme.NavItem[]>[
    {
        text: "Quickstart",
        link: '/quickstart',
        activeMatch: '/quickstart',
    },
    {
        text: "Documentation",
        link: '/docs',
        activeMatch: '/docs',
    },
    {
        text: "Repositories",
        items: [
            {
                text: "DynAPI Website",
                link: 'https://github.com/DynAPI/DynAPI.github.io',
                target: '_blank',
            },
            {
                text: "DynAPI",
                link: 'https://github.com/DynAPI/org.dynapi.DynAPI',
                target: '_blank',
            },
            {
                text: "DynAPI (v1)",
                link: 'https://github.com/DynAPI/DynAPI',
                target: '_blank',
            },
        ]
    },
]
