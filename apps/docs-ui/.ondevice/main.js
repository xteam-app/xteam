module.exports = {
  stories: [
    '../stories/**/*.stories.?(ts|tsx|js|jsx)',
    // we can use stories from ui package directly
    // "../../../packages/ui/src/**/*.stories.?(ts|tsx|js|jsx)"
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
}
