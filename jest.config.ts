import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { TextEncoder, TextDecoder } from 'util';
import 'isomorphic-fetch';

const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  globals: {
    TextEncoder,
    TextDecoder
  },
  setupFiles: ['<rootDir>/setupTests.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  }
}
 
export default createJestConfig(config)