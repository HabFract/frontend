import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig.json');

const config: Config.InitialOptions = {
  verbose: true,
  bail: true,
  clearMocks: true,

  testMatch: [
    '<rootDir>/src/components/**/*.spec.tsx',
    // "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/app/utils/setupTests.ts'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      // tsconfig: {
      //   allowJs: true,
      // },
    },
  },

  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  transformIgnorePatterns: [
    `.*\/node_modules\/(?!(uuid|@zougt|some-loader-utils))`,
    `.*(?!(@zougt))`,
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper({
      '@/app/*': ['<rootDir>/src/app/*'],
      '@/atoms/*': ['<rootDir>/src/components/atoms/*'],
      '@/contexts/*': ['<rootDir>/src/app/contexts/*'],
      '@/hooks/*': ['<rootDir>/src/app/hooks/*'],
      '@/graphql/*': ['<rootDir>/src/graphql/*'],
      '@/molecules/*': ['<rootDir>/src/components/molecules/*'],
      '@/organisms/*': ['<rootDir>/src/components/organisms/*'],
      '@/pages/*': ['<rootDir>/src/components/organisms/pages/*'],
      '@/templates/*': ['<rootDir>/src/components/templates/*'],
    }),
  },
}
export default config
