import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
// 如果使用了AutoImport vue-router 需要从 VueRouterAutoImports引入
import { VueRouterAutoImports } from 'unplugin-vue-router'

// 自动导入组件
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 布局
import Layouts from 'vite-plugin-vue-layouts'

// PWA
import { VitePWA } from 'vite-plugin-pwa'

// mock
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      /* options */
      // 允许子目录作为组件的命名空间前缀
      directoryAsNamespace: true,
      // 省略相同的前缀
      collapseSamePrefixes: true,
      resolvers: [ElementPlusResolver()]
    }),
    Layouts({
      // 路径
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
      // registerType: 'autoUpdate',
      // workbox: {
      //   clientsClaim: true,
      //   skipWaiting: true
      // }
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
