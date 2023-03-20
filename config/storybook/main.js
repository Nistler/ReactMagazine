module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', 'storybook-css-modules'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  babel: async (options) => ({
    ...options,
  }),
  webpackFinal: async (config) => config,
};
