import ReactTooltip, { TooltipProps as ReactTooltipProps } from "react-tooltip";
import styled, { css } from "styled-components";

export interface TooltipProps extends ReactTooltipProps {}

const TooltipRoot = styled(ReactTooltip)`
  padding: 0 !important;
  margin: 0 !important;
  background: unset !important;
  border: unset !important;
  border-radius: unset !important;
  opacity: 1 !important;
  &:before {
    content: unset !important;
  }
  &:after {
    content: unset !important;
  }
`;

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { children, ...restProps } = props;
  return <TooltipRoot {...restProps}>{children}</TooltipRoot>;
};

Tooltip.rebuild = ReactTooltip.rebuild;
Tooltip.hide = ReactTooltip.hide;
Tooltip.show = ReactTooltip.show;

export default Tooltip;
