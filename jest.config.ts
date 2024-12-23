const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const fs = require("fs");
const jsonc = require("jsonc-parser");

const tsconfigPath = path.resolve(__dirname, "./tsconfig.json");
const tsconfigContent = fs.readFileSync(tsconfigPath, "utf8");
const compilerOptions = jsonc.parse(tsconfigContent).compilerOptions;

const config = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!(@fluentui/react-icons)/)"],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  testMatch: ["**/tests.{ts,tsx}"],
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        useESM: true,
      },
    ],
  },
  preset: "ts-jest",
};

export default config;
