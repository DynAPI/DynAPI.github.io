import { DefaultTheme } from "vitepress";

const sidebarDocumentation: DefaultTheme.SidebarItem[] = {

}

export default <DefaultTheme.Sidebar>{
    '/docs/': {'base': '/docs/', items: sidebarDocumentation},
}
