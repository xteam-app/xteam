import React from "react";
import {useTailwind} from 'tailwind-rn';

export const HelloWorld = () => {
  const tw = useTailwind();
  return (
    <div style={tw('bg-red-200')}>
      <p style={tw('text-green-500')}>Hello web!</p>
    </div>
  );
};
