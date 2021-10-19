import { Meta, Story } from "@storybook/react";

import Text, { TextProps, TextSizesType } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>Hello</Text>;

export const General = Template.bind({});
General.args = {
  size: TextSizesType.m,
};
