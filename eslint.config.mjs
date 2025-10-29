// @ts-check
import prettier from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  prettier,
  {
    files: ['app/layouts/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
])
