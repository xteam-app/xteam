import { Text } from "@xteam-app/ui/src";

export default {
  title: "Elements/Text",
  component: Text,
};

const Dark = ({ ...args }) => <Text {...args}>Example text</Text>;

export { Dark };
