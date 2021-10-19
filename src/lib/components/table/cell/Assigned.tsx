import styled from "styled-components";
import Text, { TextSizesType } from "../../Text";

export interface AssignedProps {
  text: string;
}

const AssignedStyled = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.gray_1};
  border-radius: 3px;
`;

const Assigned: React.FC<AssignedProps> = (props: AssignedProps) => {
  const { text } = props;
  return (
    <AssignedStyled>
      <Wrapper>
        <Text size={TextSizesType.m}>{text}</Text>
      </Wrapper>
    </AssignedStyled>
  );
};

export default Assigned;
