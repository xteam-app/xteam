import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

export const HelloWorld = () => {
  const tw = useTailwind();
  return (
      <View style={tw("bg-pink-500")}>
        <Text style={tw('text-xl font-bold text-yellow-500')}>Hello Native!==</Text>
      </View>
  );
};
