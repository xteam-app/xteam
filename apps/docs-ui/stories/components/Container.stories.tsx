import { Container, Text } from '@xteam-app/ui/src'
import { Story } from '@storybook/react'
import { ContainerProps } from '@xteam-app/ui/src/types'

export default {
  title: 'Components / Container',
  component: Container,
}

const Template: Story<ContainerProps> = (args) => {
  return (
    <Container {...args}>
      <Text>Container</Text>
    </Container>
  )
}
const Basic = Template.bind({})
const Center = Template.bind({})
Center.args = {
  justifyContent: 'justify-center',
}

export { Basic, Center }
