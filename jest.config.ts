import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from "ts-jest";
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig.json');

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  // coverageProvider: "v8",
  // testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/components/**/*.spec.tsx",
    // "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/app/utils/setupTests.ts"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper({
    "@/atoms/*": ["<rootDir>/src/components/atoms/*"],
    "@/app/*": ["<rootDir>/src/app/*",],
    "@/components/*": ["<rootDir>/src/components/*",],
    "@/contexts/*": ["<rootDir>/src/app/contexts/*",],
    "@/graphql/*": ["<rootDir>/src/graphql/*",],
    "@/pages/*": ["<rootDir>/src/components/organisms/pages/*",]
  })
}
export default config
