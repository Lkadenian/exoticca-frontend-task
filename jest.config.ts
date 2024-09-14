import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@components$": "<rootDir>/app/presentation/components/$1",
    "^@layouts/(.*)$": "<rootDir>/app/presentation/layouts/$1",
    "^@hooks/(.*)$": "<rootDir>/app/application/hooks/$1",
    "^@assets/(.*)$": "<rootDir>/app/presentation/assets/$1",
    "^@api": "<rootDir>/app/infrastructure/api/api",
    "^@types/(.*)$": "<rootDir>/app/domain/types/$1",
    "^@domain/(.*)$": "<rootDir>/app/domain/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "<rootDir>/app/presentation/components/**/*.{ts,tsx,js,jsx}",
    "<rootDir>/app/application/hooks/**/*.{ts,tsx,js,jsx}",
  ],
  coverageProvider: "v8",
};

export default createJestConfig(config);

