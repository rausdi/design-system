import React, {
  ClassicComponent,
  Component,
  ComponentClass,
  FunctionComponent,
  MouseEventHandler,
} from "react";
import styled from "styled-components";
import Text, { TextSizesType } from "./Text";
import { SVGBaseType } from "./icons/SVGBase";

const ButtonRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.button.sizes.s};
  padding: 0 7px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.gray_4};
  }
`;

const LeftIcon = styled.div`
  display: flex;
  width: 11px;
  height: 11px;
  margin-right: 5px;
`;

const RightIcon = styled.div`
  display: flex;
  width: 11px;
  height: 11px;
  margin-left: 5px;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
`;

const TextStyled = styled(Text)`
  white-space: nowrap;
`;

interface ButtonProps {
  text?: string;
  onClick: MouseEventHandler;
  leftIcon?: (props: SVGBaseType) => JSX.Element;
  rightIcon?: (props: SVGBaseType) => JSX.Element;
}

class Button extends Component<ButtonProps, any> {
  render() {
    const { text, onClick, leftIcon, rightIcon } = this.props;
    return (
      <ButtonRoot onClick={onClick}>
        <LeftBlock>
          {leftIcon && <LeftIcon>{React.createElement(leftIcon)}</LeftIcon>}
          {text && <TextStyled size={TextSizesType.s}>{text}</TextStyled>}
        </LeftBlock>
        {rightIcon && <RightIcon>{React.createElement(rightIcon)}</RightIcon>}
      </ButtonRoot>
    );
  }
}

export default Button;
