import ReactTooltip, { TooltipProps as ReactTooltipProps } from "react-tooltip";
import styled, { css } from "styled-components";

export interface TooltipProps extends ReactTooltipProps {}

export interface TooltipType extends React.FC<TooltipProps> {
  rebuild: () => void;
  hide: (target?: Element | null) => void;
  show: (target: Element) => void;
}

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

const Tooltip: TooltipType = (props: TooltipProps) => {
  const { children, ...restProps } = props;
  return <TooltipRoot {...restProps}>{children}</TooltipRoot>;
};

Tooltip.rebuild = ReactTooltip.rebuild;
Tooltip.hide = (target) => {
  ReactTooltip.hide(target || undefined);
};
Tooltip.show = (target) => {
  ReactTooltip.show(target);
};

export default Tooltip;
