import { Block, Text } from "@xteam-app/ui/src";
import { Story } from "@storybook/react";
import { BlockProps } from "@xteam-app/ui/src/types";

export default {
  title: "Elements/Block",
  component: Block,
};

const Basic: Story<BlockProps> = (args) => {
  return (
    <Block {...args}>
      <Text>Example Block</Text>
    </Block>
  );
};

export { Basic };
