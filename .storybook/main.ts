import { StorybookConfig } from '@storybook/react-vite';

import { mergeConfig, InlineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/story.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const extendedConfigs: InlineConfig = {
      plugins: [tsconfigPaths()]
    };
    return mergeConfig(config, extendedConfigs);
  }
};

export default config;
