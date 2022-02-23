// @ts-ignore
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-measure',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-outline',
    "@storybook/addon-notes",
    "@storybook/addon-options",
    "@storybook/addon-knobs",
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin()
    ]
    return config;
  },
};



