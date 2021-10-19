import styled from "styled-components";

export enum TextSizesType {
  xs = "xs",
  s = "s",
  m = "m",
}
export interface TextProps {
  size: TextSizesType;
  children: string;
  className?: string;
}
const TextStyled = styled.p<TextProps>`
  display: flex;
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.typography.fonts.robotoRegular};
  font-size: ${(props) => props.theme.typography.sizes[props.size]};
  color: ${(props) => props.theme.colors.black_1};
`;

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { children, className, size } = props;
  return (
    <TextStyled className={className} size={size}>
      {children}
    </TextStyled>
  );
};

export default Text;
