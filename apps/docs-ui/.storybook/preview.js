import { UIThemeProvider, utilities } from '@xteam-app/ui'
import { useDarkMode } from 'storybook-dark-mode'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const dark = useDarkMode()
    return (
      <UIThemeProvider
        utilities={utilities}
        colorScheme={dark ? 'dark' : 'light'}
      >
        <Story />
      </UIThemeProvider>
    )
  },
]
