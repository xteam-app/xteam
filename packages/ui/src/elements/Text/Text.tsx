import { FC } from 'react'
import { Text as RNText } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { TextProps } from '@types'

export const Text: FC<TextProps> = ({ size, type, align, children }) => {
  const tw = useTailwind()
  const defaultStyle =
    'text-md text-dark-primary-100 dark:text-light-primary-100'
  const styles = []

  if (align) {
    styles.push(align)
  }

  if (size) {
    switch (size) {
      case 'xxl':
        styles.push('text-2xl font-semibold')
        break
      case 'xl':
        styles.push('text-lg')
        break
      default:
        styles.push('text-md')
        break
    }
  }
  if (type) {
    console.log('setup style by type of text')
  }
  const newStyles = styles.join(' ')

  return <RNText style={[tw(defaultStyle), tw(newStyles)]}>{children}</RNText>
}
