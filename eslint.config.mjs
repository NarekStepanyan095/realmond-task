import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      "prettier",
      'next/typescript'
    ],
    plugins: ["unused-imports"],
    env: {
      browser: true,
      node: true,
      es6: true
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: true
      }
    },
    ignorePatterns: ["node_modules", "dist", "public"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"]
            }
          ]
        }
      ],
      "@typescript-eslint/ban-ts-comment": ["off", { "ts-expect-error": true }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" }
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],
      "unused-imports/no-unused-vars": "off",
      "no-unused-vars": "off",

      "unused-imports/no-unused-imports": "error",

      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",

      "linebreak-style": ["error", "unix"],
      "jsx-quotes": ["error", "prefer-double"],
      "no-debugger": "warn",
      curly: ["error"],
      "object-curly-newline": [
        "off",
        {
          ObjectExpression: "always",
          ObjectPattern: {
            minProperties: 2
          }
        }
      ],
      "object-shorthand": ["error", "properties"],

      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never"
        }
      ],
      "react/self-closing-comp": ["error", {
        "component": true,
        "html": true
      }],
      "react/jsx-boolean-value": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: ["return", "block-like", "case"] },
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "any", prev: "case", next: "case" }
      ],
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": "off"
    }
  }),
];

export default eslintConfig;
