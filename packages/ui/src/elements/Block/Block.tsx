import { FC } from 'react';
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { BlockProps } from '@types'

const defaultStyle = `
  w-full 
  bg-light-secondary-100 dark:bg-dark-secondary-100
`

export const Block: FC<BlockProps> = ({ children, ...props }) => {
  const tw = useTailwind()
  const styles = []
  for (const value of Object.values(props)) {
    styles.push(value)
  }
  return (
    <View style={[tw(defaultStyle), tw(styles.join(' '))]}>{children}</View>
  )
}
