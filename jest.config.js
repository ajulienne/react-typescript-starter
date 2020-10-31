module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts|tsx)?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ]
};
