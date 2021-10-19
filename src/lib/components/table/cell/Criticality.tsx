import styled from "styled-components";
import Text, { TextSizesType } from "../../Text";

export interface CriticalityProps {
  text: string;
  color: string;
}

const CriticalityStyled = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  padding-left: 10px;
  border-left: 4px solid ${(props) => props.color};
  white-space: nowrap;
`;

const TextStyled = styled(Text)`
  color: ${(props) => props.theme.colors.gray_3};
`;

const Criticality: React.FC<CriticalityProps> = (props: CriticalityProps) => {
  const { text, color } = props;
  return (
    <CriticalityStyled color={color}>
      <TextStyled size={TextSizesType.m}>{text}</TextStyled>
    </CriticalityStyled>
  );
};

export default Criticality;
