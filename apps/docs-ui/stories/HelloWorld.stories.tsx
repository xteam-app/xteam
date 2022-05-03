import { HelloWorld } from "@xteam-app/ui";

export default {
  title: 'Hello World Inner',
  component: HelloWorld
}

const Basic = (args: any) => <HelloWorld {...args} />

export {
  Basic
}