module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  coveragePathIgnorePatterns: ['src/index.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
