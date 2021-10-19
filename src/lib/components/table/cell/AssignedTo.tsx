import styled from "styled-components";
import Text, { TextSizesType } from "../../Text";

export interface AssignedToProps {
  text: string;
}

const AssignedToStyled = styled.div`
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

const AssignedTo: React.FC<AssignedToProps> = (props: AssignedToProps) => {
  const { text } = props;
  return (
    <AssignedToStyled>
      <Wrapper>
        <Text size={TextSizesType.m}>{text}</Text>
      </Wrapper>
    </AssignedToStyled>
  );
};

export default AssignedTo;
