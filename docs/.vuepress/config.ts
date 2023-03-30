import { defineUserConfig, defaultTheme } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "summary",
    description: "这是我的第一个 VuePress 站点",
    head: [['link', { rel: 'icon', href: '/ts01.png' }]],
    locales: {
        '/en/': {
            lang: 'en-US',
        },
        '/': {
            lang: 'zh-CN',
        },
    },
    theme: defaultTheme({
        logo: '/ts01.png',
        repo: 'vue/vuepress',
        locales: {
            '/en': {
                selectLanguageName: 'English',
            },
            '/': {
                selectLanguageName: "简体中文"
            },
        },
        navbar: [
            {
                text: 'vue',
                children: [
                    {
                        text: '学习资料',
                        link: '/vue',
                        activeMatch: '^/vue/$'
                    },
                    {
                        text: 'vue-router',
                        link: '/vue/vue-router.md',
                        activeMatch: '^/vue-router$'
                    },
                    {
                        text: 'axios',
                        link: '/vue/axios.md',
                        activeMatch: '/vue/axios'
                    },
                    {
                        text: '接口请求加密',
                        link: '/vue/gmsm.md',
                        activeMatch: '^/vue/gmsm$'
                    },
                ]
            },
            {
                text: 'element',
                children: [
                    {
                        text: '组件封装',
                        link: '/element/components.md',
                    },
                    {
                        text: '问题总结',
                        link: '/element/bug-summary.md',
                    },
                ]
            }
        ],
        sidebar: 'auto'
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/en': {
                    placeholder: 'Search'
                },
                '/': {
                    placeholder: '搜索文档'
                }
            }
        })
    ]
})