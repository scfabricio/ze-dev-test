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
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/config/fileMock.js",
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
