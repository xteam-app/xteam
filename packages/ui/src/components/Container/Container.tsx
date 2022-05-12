import React, { FC } from "react";
import { Block } from "../../elements";
import { BlockProps, ContainerProps } from "@types";

const defaultStyle: BlockProps = {
  w: "w-full",
  h: "h-full",
  alignItems: "items-center",
};

export const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return <Block {...{ ...defaultStyle, ...props }}>{children}</Block>;
};
