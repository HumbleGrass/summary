export const searchIndex = [
  {
    "title": "my project summary",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "element-bug",
    "headers": [
      {
        "level": 2,
        "title": "table fixed 固定栏后，边框线消失",
        "slug": "table-fixed-固定栏后-边框线消失",
        "link": "#table-fixed-固定栏后-边框线消失",
        "children": []
      }
    ],
    "path": "/element/bug-summary.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "components",
        "slug": "components",
        "link": "#components",
        "children": []
      }
    ],
    "path": "/element/components.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "axios 封装 方法介绍",
    "headers": [
      {
        "level": 2,
        "title": "@utils/auth.js",
        "slug": "utils-auth-js",
        "link": "#utils-auth-js",
        "children": []
      },
      {
        "level": 2,
        "title": "request.js",
        "slug": "request-js",
        "link": "#request-js",
        "children": []
      }
    ],
    "path": "/vue/axios.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/vue/gmsm.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue学习资料",
    "headers": [
      {
        "level": 2,
        "title": "vue 学习资料",
        "slug": "vue-学习资料",
        "link": "#vue-学习资料",
        "children": []
      },
      {
        "level": 2,
        "title": "vue ui 框架",
        "slug": "vue-ui-框架",
        "link": "#vue-ui-框架",
        "children": []
      },
      {
        "level": 2,
        "title": "vue 实用插件",
        "slug": "vue-实用插件",
        "link": "#vue-实用插件",
        "children": []
      },
      {
        "level": 2,
        "title": "vue 后台管理系统",
        "slug": "vue-后台管理系统",
        "link": "#vue-后台管理系统",
        "children": []
      },
      {
        "level": 2,
        "title": "vue 文档框架",
        "slug": "vue-文档框架",
        "link": "#vue-文档框架",
        "children": []
      }
    ],
    "path": "/vue/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "vue-router",
        "slug": "vue-router",
        "link": "#vue-router",
        "children": []
      }
    ],
    "path": "/vue/vue-router.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
