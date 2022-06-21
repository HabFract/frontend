const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
  webpackFinal: async config => {
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        baseUrl: path.resolve(__dirname, '..'),
        configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
        logLevel: 'info'
      })
    )
    config.resolve = {
      ...config.resolve,

      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
      modules: [...(config?.resolve?.modules || []), path.resolve('..')]
    }

    config.module = {
      rules: [
        {
          test: /\.(s(a|c)ss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../')
        },
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
          }
        }
      ]
    }
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-postcss',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true
  }
}
