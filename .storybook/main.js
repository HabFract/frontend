const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
module.exports = {
 
  webpackFinal: async (config) => {
   return {
        ...config,
     resolve: {
       plugins: [
         new TsconfigPathsPlugin({
              baseUrl: path.resolve(__dirname, ".."),
              configFile: path.resolve(__dirname, "..", "tsconfig.json"),
              logLevel: 'info'
         })
       ],
        modules: [
            ...(config?.resolve?.modules || []),
            path.resolve('../')
          ],
          ...config.resolve,
          alias: {
            ...config.resolve?.alias,
            ...{
              'node_modules': '/node/modules',
              '@app': path.resolve(__dirname, '../src/app'),
              '@graphql': path.resolve(__dirname, '../src/graphql'),
              // '@components': path.resolve(__dirname, './src/components'),
              // '@contexts': path.resolve(__dirname, '../src/contexts/'),
              // '@': path.resolve(__dirname, './src'),
            },
          },
     },
     module: {
       rules: [
        {
          test: /\.(s(a|c)ss)$/,
          use: ['style-loader','css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../'),
        },
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
     }
   };
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset",
    '@storybook/addon-postcss',
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/react",
  "core": {
    // "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}