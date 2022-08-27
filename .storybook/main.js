const { mergeConfig } = require('vite');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: '/storybook-tailwind-foundations/example/',
      resolve: {
        alias: {
          '@': resolve('../src'),
        },
      },
    });
  },
  env: (config) => ({
    ...config,
    STORYBOOK_TAILWIND: fullConfig,
    STORYBOOK_SHOW_TAILWIND_COLORS: false,
  }),
}
