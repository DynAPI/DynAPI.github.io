import { DefaultTheme } from "vitepress";

export default <DefaultTheme.NavItem[]>[
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
        ]
    },
]
