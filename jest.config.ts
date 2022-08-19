import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig.json');

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  // coverageProvider: "v8",
  // testEnvironment: "node",

  testMatch: [
    // '<rootDir>/src/components/**/*.spec.tsx',
    '<rootDir>/src/**/*.spec.tsx',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/app/utils/setupTests.js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true,
      },
    },
  },

  transform: {
    // 'node_modules/(@zougt|uuid)/.+\\.(j|t)s?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },

  transformIgnorePatterns: [
    `/node_modules/(?!(uuid|@zougt|some-loader-utils))/`,
    `.*\/node_modules\/uuid.*`,
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@zougt/vite-plugin-theme-preprocessor/':
      '@zougt/vite-plugin-theme-preprocessor/dist/',
    '@zougt/some-loader-utils/': '@zougt/some-loader-utils/dist/',
    ...pathsToModuleNameMapper({
      '@/app/*': ['<rootDir>/src/app/*'],
      '@/atoms/*': ['<rootDir>/src/components/atoms/*'],
      '@/contexts/*': ['<rootDir>/src/app/contexts/*'],
      '@/hooks/*': ['<rootDir>/src/app/hooks/*'],
      '@/graphql/*': ['<rootDir>/src/graphql/*'],
      '@/molecules/*': ['<rootDir>/src/components/molecules/*'],
      '@/organisms/*': ['<rootDir>/src/components/organisms/*'],
      '@/svg/*': ['<rootDir>/src/assets/svg/*'],
      '@/pages/*': ['<rootDir>/src/pages/*'],
      '@/templates/*': ['<rootDir>/src/components/templates/*'],
    }),
  },
}
export default config
