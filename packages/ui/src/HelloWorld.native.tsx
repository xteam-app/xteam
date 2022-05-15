import { useTailwind } from 'tailwind-rn'
import { View } from 'react-native'
import { Text } from './elements'

export const HelloWorld = () => {
  const tw = useTailwind()
  return (
    <View style={tw('bg-dark-secondary-100')}>
      <Text align={'text-center'}>Hello Native!==</Text>
    </View>
  )
}
