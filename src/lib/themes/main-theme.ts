import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  typography: {
    fonts: {
      robotoRegular: "Roboto-Regular",
      robotoMedium: "Roboto-Medium",
    },
    sizes: {
      xs: "11px",
      s: "12px",
      m: "13px",
    },
    weights: {
      regular: 400,
      medium: 500,
    },
  },
  colors: {
    black_1: "#1F1F1F",
    gray_1: "#EEEEEE",
    gray_2: "#777777",
    gray_3: "#696969",
    gray_4: "#E7E7ED",
    white_1: "#FFFFFF",
  },
  button: {
    sizes: {
      s: "30px",
    },
  },
};

export { mainTheme };
