import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

export const HelloWorld = () => {
  const tw = useTailwind();
  return (
      <View style={tw("bg-blue-200")}>
        <Text style={tw('text-green-700')}>Hello Native!==</Text>
      </View>
  );
};
