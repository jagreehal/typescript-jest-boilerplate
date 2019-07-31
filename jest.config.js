module.exports = {
  clearMocks: true,
  collectCoverage: false,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules/', 'dist'],
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/*spec.{ts,tsx}',
    '!**/*.d.ts',
    '**/*.{ts,tsx}'
  ]
};
