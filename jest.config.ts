import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  cache: false,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
  },
}

export default config
