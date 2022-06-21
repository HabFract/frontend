import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "**/*.spec.tsx"
  ],
}
export default config
