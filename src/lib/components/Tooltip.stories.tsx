import { Meta, Story } from "@storybook/react";

import Text, { TextSizesType } from "./Text";
import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <div>
    <a data-for={"link"} data-tip>
      Hover me
    </a>
    <Tooltip {...args}>
      <Text size={TextSizesType.m}>Hello</Text>
    </Tooltip>
  </div>
);

export const General = Template.bind({});
General.args = {
  id: "link",
};
