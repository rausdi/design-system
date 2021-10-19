import styled from "styled-components";
import { CSSProperties, Key } from "react";
import { ContentClassesType, ContentType } from "../Table";
import Text, { TextSizesType } from "../Text";
import Criticality from "./cell/Criticality";
import AssignedTo from "./cell/AssignedTo";
import Assigned from "./cell/Assigned";
import Deadline from "./cell/Deadline";
import Status from "./cell/Status";
import Note from "./cell/Note";

export interface CellProps {
  key: Key;
  style: CSSProperties;
  cellContent: ContentType;
}

const CellStyled = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_1};
  white-space: nowrap;
`;

const TextStyled = styled(Text)`
  color: ${(props) => props.theme.colors.gray_3};
`;

const Cell: React.FC<CellProps> = (props: CellProps) => {
  function getCellContent() {
    const { cellContent } = props;
    switch (cellContent.class) {
      case ContentClassesType.text: {
        return (
          <TextStyled size={TextSizesType.m}>
            {cellContent.data.text}
          </TextStyled>
        );
      }
      case ContentClassesType.criticality: {
        return (
          <Criticality
            text={cellContent.data.text}
            color={cellContent.data.color}
          />
        );
      }
      case ContentClassesType.assignedTo: {
        return <AssignedTo text={cellContent.data.text} />;
      }
      case ContentClassesType.assigned: {
        return <Assigned text={cellContent.data.text} />;
      }
      case ContentClassesType.deadline: {
        return <Deadline text={cellContent.data.text} />;
      }
      case ContentClassesType.status: {
        return (
          <Status text={cellContent.data.text} color={cellContent.data.color} />
        );
      }
      case ContentClassesType.note: {
        return (
          <Note
            defaultText={cellContent.data.text}
            onChange={cellContent.onChange}
          />
        );
      }
      default:
        break;
    }
  }
  const { style } = props;
  const content = getCellContent();
  return <CellStyled style={style}>{content}</CellStyled>;
};

export default Cell;
