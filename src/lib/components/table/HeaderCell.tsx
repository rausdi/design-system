import styled from "styled-components";
import { CSSProperties, Key } from "react";
import Text, { TextSizesType } from "../Text";
import Draggable from "../icons/Draggable";
import Rectangle from "../icons/Rectangle";
import { HeaderType } from "../Table";

export interface HeaderCellProps {
  key: Key;
  style: CSSProperties;
  cellContent: HeaderType;
  dataFor?: string;
  dataTip?: string;
  ifCellNeedTooltip?: boolean;
}

const DraggableStyled = styled(Draggable)`
  display: none;
  width: 7px;
  height: 16px;
  margin-left: 5px;
  fill: ${(props) => props.theme.colors.black_1};
`;

const RectangleStyled = styled(Rectangle)`
  display: none;
  width: 9px;
  height: 5px;
  margin-right: 5px;
  fill: ${(props) => props.theme.colors.black_1};
`;

const HeaderCellRoot = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_1};
  white-space: nowrap;
  &:hover {
    border-radius: 10px 10px 0 0;
    background: ${(props) => props.theme.colors.gray_4};
    cursor: pointer;
    ${DraggableStyled} {
      display: block;
    }
    ${RectangleStyled} {
      display: block;
    }
  }
`;

const TextStyled = styled(Text)`
  margin: 0 5px;
  color: ${(props) => props.theme.colors.gray_2};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderCell: React.FC<HeaderCellProps> = (props: HeaderCellProps) => {
  const { style, cellContent, dataFor, dataTip, ifCellNeedTooltip } = props;
  const { displayName } = cellContent;
  return (
    <HeaderCellRoot
      style={style}
      data-for={dataFor}
      data-tip={dataTip}
      data-event="click"
    >
      <Left>
        <DraggableStyled />
        <TextStyled size={TextSizesType.xs}>{displayName}</TextStyled>
      </Left>
      {ifCellNeedTooltip && (
        <Right>
          <RectangleStyled />
        </Right>
      )}
    </HeaderCellRoot>
  );
};

export default HeaderCell;
