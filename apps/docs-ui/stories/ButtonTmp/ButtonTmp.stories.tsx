import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ButtonTmp } from "./ButtonTmp";

const MyButtonMeta: ComponentMeta<typeof ButtonTmp> = {
  title: "ButtonTmp",
  component: ButtonTmp,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof ButtonTmp>;

export const Basic: MyButtonStory = (args) => <ButtonTmp {...args} />;
