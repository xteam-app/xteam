import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { UIThemeProvider, utilities } from "@xteam-app/ui";

export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withBackgrounds,
  (Story) => (
    <UIThemeProvider utilities={utilities}>
      <Story />
    </UIThemeProvider>
  )
]
