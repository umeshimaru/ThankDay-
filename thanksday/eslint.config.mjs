import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'

export default [
  // 基本設定
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: { ...globals.browser },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true } // JSXサポート有効化[5][7]
      }
    }
  },

  // ESLint推奨ルール
  js.configs.recommended,

  // React設定
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect' // Reactバージョン自動検出[1][4]
      }
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // 推奨ルール継承
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-unused-vars': 'off'
    }
  }
]
