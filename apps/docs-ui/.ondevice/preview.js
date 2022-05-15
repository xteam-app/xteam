import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { UIThemeProvider, utilities } from '@xteam-app/ui/src'
import { Appearance } from 'react-native'

export const parameters = {
  backgrounds: [
    { name: 'light', value: 'white' },
    {
      name: 'dark',
      value: '#232323',
      default: Appearance.getColorScheme() === 'dark',
    },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withBackgrounds,
  (Story) => (
    <UIThemeProvider
      utilities={utilities}
      colorScheme={Appearance.getColorScheme()}
    >
      <Story />
    </UIThemeProvider>
  ),
]
