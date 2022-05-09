import { Header } from "@xteam-app/ui/src";
import { Story } from "@storybook/react";

export default {
  title: 'Components/Header',
  component: Header
}

const Basic: Story = (args) => {
  return (
    <Header {...args}>Example header</Header>
  )
}

export {
  Basic
}