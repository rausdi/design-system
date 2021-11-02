import styled from "styled-components";
import { HeaderType } from "../Table";
import Button from "../Button";
import React, { Fragment } from "react";
import Tooltip from "../Tooltip";
import Sort from "../icons/Sort";
import Arrow from "../icons/Arrow";
import SortAsc from "../icons/SortAsc";
import SortDesc from "../icons/SortDesc";

export interface TooltipButtonGroupProps {
  cellContent: HeaderType;
}

const TooltipButtonGroupRoot = styled.div`
  width: 200px;
  background: ${(props) => props.theme.colors.white_1};
  box-shadow: -6px 6px 18px rgba(0, 0, 0, 0.15);
`;

const TooltipButtonGroup: React.FC<TooltipButtonGroupProps> = (
  props: TooltipButtonGroupProps
) => {
  const { cellContent } = props;
  const { sortAscFunc, sortDescFunc } = cellContent;
  const sortButtonGroupRef: React.RefObject<HTMLDivElement> = React.createRef();
  return (
    <TooltipButtonGroupRoot>
      {(sortAscFunc || sortDescFunc) && (
        <Fragment>
          <Button
            text={"Сортировать"}
            onClick={() => {
              if (sortButtonGroupRef.current) {
                const tooltip: Element = sortButtonGroupRef.current;
                Tooltip.show(tooltip);
              }
            }}
            leftIcon={Sort}
            rightIcon={Arrow}
          />
          <div ref={sortButtonGroupRef} data-tip />
          <Tooltip
            getContent={() => {
              return (
                <TooltipButtonGroupRoot>
                  {sortAscFunc && (
                    <Button
                      text={"Сортировать по возрастанию"}
                      onClick={() => {
                        Tooltip.hide(sortButtonGroupRef.current);
                        sortAscFunc();
                      }}
                      leftIcon={SortAsc}
                    />
                  )}
                  {sortDescFunc && (
                    <Button
                      text={"Сортировать по убыванию"}
                      onClick={() => {
                        Tooltip.hide(sortButtonGroupRef.current);
                        sortDescFunc();
                      }}
                      leftIcon={SortDesc}
                    />
                  )}
                </TooltipButtonGroupRoot>
              );
            }}
            place={"left"}
            clickable={true}
          />
        </Fragment>
      )}
    </TooltipButtonGroupRoot>
  );
};

export default TooltipButtonGroup;
