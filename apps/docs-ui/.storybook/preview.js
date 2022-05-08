import { UIThemeProvider, utilities } from "@xteam-app/ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <UIThemeProvider utilities={utilities}>
      <Story />
    </UIThemeProvider>
  ),
];