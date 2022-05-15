export type DarkMode = 'system' | 'light' | 'dark'

export type TextTypeValue = 'default' | 'active'
export type TextAlignValue =
  | 'text-left'
  | 'text-center'
  | 'text-right'
  | 'text-justify'

export type TextSizeValue = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface TextProps {
  size?: TextSizeValue
  type?: TextTypeValue
  align?: TextAlignValue
}

type TWPaddingValue = string
type TWWidthValue = 'w-full'
type TWHeightValue = 'h-full'
type TWJustifyValue =
  // | "justify-start"
  // | "justify-end"
  'justify-center'
// | "justify-between"
// | "justify-around"
// | "justify-evenly";
type TWItemsValue =
  // | "items-start"
  // | "items-end"
  'items-center'
// | "items-baseline"
// | "items-stretch";

export interface BlockProps {
  p?: TWPaddingValue
  w?: TWWidthValue
  h?: TWHeightValue
  justifyContent?: TWJustifyValue
  alignItems?: TWItemsValue
}

export type ContainerProps = Omit<BlockProps, 'w' | 'h'>
