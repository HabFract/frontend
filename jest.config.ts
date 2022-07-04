import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/*.spec.tsx"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/app/utils/setupTests.ts"
  ]
}
export default config
