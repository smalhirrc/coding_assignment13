import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },

  settings: {
    react: {
      version: "19.0"
    }
  }
},

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,



  {
    files: ["src/**/*.{ts,tsx}"],
    rules:{
      "@typescript-eslint/ban-ts-comment": ["error", {
        minimumDescriptionLength: 3,
        'ts-check': false,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
      }],

      "react/react-in-jsx-scope": "off"
    }
  },

    {
    ignores: ["dist/**", "build/**", "node_modules/**", "rollup.config.js", ".storybook/**"]
  }

]);
