import { Story } from "@storybook/react";
import { Header, Text } from "@xteam-app/ui";
import { Container } from "@xteam-app/ui/src";

export default {
  title: "Screens/Welcome",
};

const Basic: Story = (args) => {
  return (
    <Container justifyContent={'justify-center'}>
      <Header>Welcome</Header>
      <Text>Click on screen!</Text>
    </Container>
  );
};

export { Basic };
