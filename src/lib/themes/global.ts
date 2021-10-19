import { createGlobalStyle } from "styled-components";

import RobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoMedium from "../assets/fonts/Roboto/Roboto-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${(props) => props.theme.typography.fonts.robotoRegular};
    src: url("${RobotoRegular}");
    font-weight: ${(props) => props.theme.typography.weights.regular};
    font-style: normal;
  }
  @font-face {
    font-family: ${(props) => props.theme.typography.fonts.robotoMedium};
    src: url("${RobotoMedium}");
    font-weight: ${(props) => props.theme.typography.weights.medium};
    font-style: normal;
  }
  * {
    font-family: ${(props) => props.theme.typography.fonts.robotoRegular};
    font-size: ${(props) => props.theme.typography.sizes.m};
    color: ${(props) => props.theme.colors.black_1};
  }
`;
