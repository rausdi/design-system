import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      fonts: {
        robotoRegular: string;
        robotoMedium: string;
      };
      sizes: {
        xs: string;
        s: string;
        m: string;
      };
      weights: {
        regular: number;
        medium: number;
      };
    };
    colors: {
      black_1: string;
      gray_1: string;
      gray_2: string;
      gray_3: string;
      gray_4: string;
      white_1: string;
    };
    button: {
      sizes: {
        s: string;
      };
    };
  }
}
