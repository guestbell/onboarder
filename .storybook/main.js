module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "@storybook/addon-storysource",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  reactOptions: {
    fastRefresh: true,
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
