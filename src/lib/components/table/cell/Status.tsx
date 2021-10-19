import styled from "styled-components";
import Text, { TextSizesType } from "../../Text";

export interface StatusProps {
  text: string;
  color: string;
}

const StatusStyled = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.gray_1};
  border-radius: 3px;
`;

const ColorPin = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Status: React.FC<StatusProps> = (props: StatusProps) => {
  const { text, color } = props;
  return (
    <StatusStyled>
      <Wrapper>
        <ColorPin color={color} />
        <Text size={TextSizesType.m}>{text}</Text>
      </Wrapper>
    </StatusStyled>
  );
};

export default Status;
