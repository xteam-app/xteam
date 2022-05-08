import React from "react";
import {useTailwind} from 'tailwind-rn';

export const HelloWorld = () => {
  const tw = useTailwind();
  return (
    <div style={tw('bg-red-800')}>
      <p style={tw('text-sm font-bold text-yellow-200')}>Hello web!</p>
      <p style={tw('text-md font-bold text-yellow-200')}>Hello web!</p>
      <p style={tw('text-xl font-bold text-yellow-200')}>Hello web!</p>
    </div>
  );
};
