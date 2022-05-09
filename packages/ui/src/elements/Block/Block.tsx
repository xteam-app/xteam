import React, { FC } from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { BlockProps } from "@types";

export const Block: FC<BlockProps> = ({ p, children }) => {
  const tw = useTailwind();
  const defaultStyle = "w-full bg-light-secondary-100 dark:bg-dark-secondary-100";
  const styles = []
  if (p) {
    styles.push(p)
  }
  return <View style={[tw(defaultStyle), tw(styles.join(' '))]}>{children}</View>;
};