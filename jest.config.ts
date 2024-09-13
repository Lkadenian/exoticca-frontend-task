import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
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
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
};

export default config;

