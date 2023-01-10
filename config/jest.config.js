module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/test.config.js'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['dist']
};