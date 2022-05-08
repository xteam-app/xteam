module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // we can use stories from ui package directly
    // "@xteam-app/ui/src/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "storybook-dark-mode"
  ],
  framework: "@storybook/react",
};
