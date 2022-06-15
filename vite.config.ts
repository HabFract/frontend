import { defineConfig } from 'vite'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from "@zougt/vite-plugin-theme-preprocessor";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths'
import Checker from 'vite-plugin-checker'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
        },
        javascriptEnabled: true
      },
    },
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    Checker({
      typescript: true,
      // FIXME this is bug
      enableBuild: true,
    }),
    themePreprocessorPlugin({
      // 同时使用 scss 和 less， 区别写multipleScopeVars，其他属性共用即可
      scss: {
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-default",
            // path 和 varsContent 必选一个
            path: path.resolve("src/app/theme/theme-vars.scss"),
            // varsContent参数等效于 path文件的内容
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          },
          // {
          //   scopeName: "theme-dark",
          //   path: path.resolve("src/app/theme/theme-dark.scss"),
          // },
          // {
          //   scopeName: "theme-red",
          //   path: path.resolve("src/app/theme/theme-red.scss"),
          // },
          // {
          //   scopeName: "theme-red-dark",
          //   path: path.resolve("src/app/theme/theme-red-dark.scss"),
          // },
        ],
      },
      less: {
        // 是否启用任意主题色模式，这里不启用
        arbitraryMode: false,
        // 提供多组变量文件
        multipleScopeVars: [

          {
            // 必需
            scopeName: "theme-default",
            // path 和 varsContent 必选一个
            path: path.resolve("src/app/theme/light.less"),
            // varsContent参数等效于 path文件的内容
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          },
          {
            scopeName: "theme-dark",
            path: path.resolve("src/app/theme/dark.less"),
          },
          // {
          //   scopeName: "theme-dark",
          //   path: [
          //     path.resolve("src/theme/theme-red-dark.less"),
          //     path.resolve("src/theme/theme-dark.scss"),
          //   ],
          // },
          // {
          //   scopeName: "theme-red",
          //   path: path.resolve("src/theme/theme-red.scss"),
          // },
          // {
          //   scopeName: "theme-red-dark",
          //   path: [
          //     path.resolve("src/theme/theme-red-dark.less"),
          //     path.resolve("src/theme/theme-red-dark.scss"),
          //   ],
          // },
        ],
        // 【注意】 css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            color: "#ffffff",
          },
          {
            color: ["transparent","none"],
          },
        ],
        // // 默认取 multipleScopeVars[0].scopeName
        defaultScopeName: "",
        // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
        extract: true,
        // // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
        outputDir: "",
        // // 会选取defaultScopeName对应的主题css文件在html添加link
        themeLinkTagId: "theme-link-tag",
        // // "head"||"head-prepend" || "body" ||"body-prepend"
        // themeLinkTagInjectTo: "head",
        // // 是否对抽取的css文件内对应scopeName的权重类名移除
        // removeCssScopeName: false,
      },
    }),
    // development need theme HMR
    themePreprocessorHmrPlugin(),
  ]
})
