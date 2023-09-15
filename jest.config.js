module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/generators/'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
