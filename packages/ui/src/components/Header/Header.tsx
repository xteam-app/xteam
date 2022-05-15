import { FC } from 'react'
import { Block, Text } from '../../elements'

export const Header: FC = ({ children }) => {
  return (
    <Block p={'p-4'}>
      <Text size={'xxl'} align={'text-center'}>
        {children}
      </Text>
    </Block>
  )
}
