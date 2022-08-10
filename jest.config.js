module.exports = {
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
    testPathIgnorePatterns: ["node_modules"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.types.ts",
        "!src/**/index.ts",
        "!src/**/*.d.ts",
        "!src/index.tsx",
        "!src/App.tsx",
        "!src/routes.tsx"
    ],
    coveragePathIgnorePatterns: ["<rootDir>/src/lib", "<rootDir>/src/graphql"],
    setupFilesAfterEnv: ["./src/setupTests.js"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
