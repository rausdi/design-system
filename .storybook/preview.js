import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/lib/themes/global";
import { mainTheme } from "../src/lib/themes/main-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
