export type DarkMode = "system" | "light" | "dark";

export type TextTypeValue = "default" | "active";
export type TextAlignValue = "text-left" | "text-center" | "text-right" | "text-justify";

export type TextSizeValue = "sm" | "md" | "lg" | "xl" | "xxl";

export interface TextProps {
  size?: TextSizeValue;
  type?: TextTypeValue;
  align?: TextAlignValue;
}

type BlockPaddingValue = string

export interface BlockProps {
  p: BlockPaddingValue;
}
