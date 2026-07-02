// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";

export default [
  // Base recommended rules from ESLint
  js.configs.recommended,

  // TypeScript support (if you use TS/TSX files)
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // ESLint core rules
      "no-unused-vars": "warn",
      "no-console": "off",

      // Prettier integration
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "es5",
        },
      ],
    },
  },
];
