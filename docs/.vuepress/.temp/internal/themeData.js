export const themeData = JSON.parse("{\"logo\":\"/ts01.png\",\"repo\":\"vue/vuepress\",\"locales\":{\"/en\":{\"selectLanguageName\":\"English\"},\"/\":{\"selectLanguageName\":\"简体中文\"}},\"navbar\":[{\"text\":\"vue\",\"children\":[{\"text\":\"学习资料\",\"link\":\"/vue\",\"activeMatch\":\"^/vue/$\"},{\"text\":\"vue-router\",\"link\":\"/vue/vue-router.md\",\"activeMatch\":\"^/vue-router$\"},{\"text\":\"axios\",\"link\":\"/vue/axios.md\",\"activeMatch\":\"/vue/axios\"},{\"text\":\"接口请求加密\",\"link\":\"/vue/gmsm.md\",\"activeMatch\":\"^/vue/gmsm$\"}]},{\"text\":\"element\",\"children\":[{\"text\":\"组件封装\",\"link\":\"/element/components.md\"},{\"text\":\"问题总结\",\"link\":\"/element/bug-summary.md\"}]}],\"sidebar\":\"auto\",\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
