export default {
  transform: {
    "^.+\\.(js|jsx|mjs|cjs)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "mjs", "cjs"],
};
