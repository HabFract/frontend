import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  // coverageProvider: "v8",
  // testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/*.spec.tsx",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/app/utils/setupTests.ts"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ['node_modules', 'src']
}
export default config
