module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
    jest: true,
  },
  settings: {
    // Configure module resolver paths
    'import/resolver': {
      node: {
        // Allow importing modules from 'src' directory
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: { version: "18.2" }
  },
  parserOptions: {
    ecmaVersion: 2022, // Changed "latest" to the specific ECMAScript version
    sourceType: "module",
  },
  plugins: ["react-refresh", "import", "node", "promise", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // Naming conventions
    camelcase: ["error", { properties: "never" }],
    "consistent-this": ["error", "self"],
    "no-magic-numbers": ["error", { ignore: [-1, 0, 1, 2] }],
    "id-length": ["error", { min: 2, exceptions: ["i", "j", "k"] }],

    // File organization
    "grouped-accessor-pairs": "error",
    "no-empty-function": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    // "no-unused-vars": "error",

    // Code structure
    "no-dupe-args": "error",
    "no-invalid-this": "error",
    "no-throw-literal": "error",
    "no-useless-call": "error",

    // General best practices
    "consistent-return": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-new-wrappers": "error",

    // Documentation
    "valid-jsdoc": [
      "error",
      {
        prefer: { return: "returns" },
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],

    // Other recommended rules
    "no-console": "warn",
    "no-undef": "warn",
    "no-extra-semi": "warn",
    'import/no-named-as-default': 'off',
  },
  ignorePatterns: ["dist/", "node_modules/", "docs/", "public/"],
};