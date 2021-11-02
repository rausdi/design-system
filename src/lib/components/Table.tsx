import * as React from "react";

import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  GridCellProps,
  MultiGrid,
} from "react-virtualized";
import Cell, { CellProps } from "./table/Cell";
import styled from "styled-components";
import HeaderCell, { HeaderCellProps } from "./table/HeaderCell";
import { ReactElement, RefObject } from "react";
import Tooltip from "./Tooltip";
import debounce from "lodash/debounce";
import TooltipButtonGroup from "./table/TooltipButtonGroup";

export type HeaderType = {
  name: string;
  displayName: string;
  sortAscFunc?: () => void;
  sortDescFunc?: () => void;
};
export type HeadersType = Array<Array<HeaderType>>;
export enum ContentClassesType {
  text = "text",
  criticality = "criticality",
  assignedTo = "assignedTo",
  assigned = "assigned",
  deadline = "deadline",
  status = "status",
  note = "note",
}
export type ContentOnChangeFuncType = (value: string, event?: Event) => void;
export type ContentDataType = {
  text: string;
  color?: string;
};
export type ContentType = {
  name: string;
  class: ContentClassesType;
  data: ContentDataType;
  onChange?: ContentOnChangeFuncType;
};
export type ContentArrayType = Array<Array<ContentType>>;
export interface TableProps {
  headers: HeadersType;
  content: ContentArrayType;
}

const TableStyled = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.white_1};
`;

const HEADER_CELL_DATA_FOR = "header-cell";

const rebuildTooltip = debounce(
  () => {
    Tooltip.rebuild();
    Tooltip.hide();
  },
  200,
  {
    leading: false,
    trailing: true,
  }
);

class Table extends React.Component<TableProps, any> {
  private readonly cache: CellMeasurerCache = new CellMeasurerCache({
    defaultWidth: 200,
    minWidth: 150,
    fixedHeight: true,
  });
  public gridRef: RefObject<MultiGrid> = React.createRef();

  componentDidMount() {
    rebuildTooltip();
  }

  ifHeaderCellNeedTooltip(header: HeaderType): boolean {
    const { sortAscFunc, sortDescFunc } = header;
    return !!(sortAscFunc || sortDescFunc);
  }

  getHeaderCellElement = (
    cellRendererProps: GridCellProps
  ): ReactElement<HeaderCellProps> => {
    const { columnIndex, key, rowIndex, style } = cellRendererProps;
    const { headers } = this.props;
    const header = headers[rowIndex][columnIndex];
    const ifHeaderCellNeedTooltip = this.ifHeaderCellNeedTooltip(header);
    return (
      <HeaderCell
        style={style}
        key={key}
        cellContent={header}
        dataFor={HEADER_CELL_DATA_FOR}
        dataTip={
          ifHeaderCellNeedTooltip ? `${rowIndex},${columnIndex}` : undefined
        }
        ifCellNeedTooltip={ifHeaderCellNeedTooltip}
      />
    );
  };

  getCellElement = (
    cellRendererProps: GridCellProps
  ): ReactElement<CellProps> => {
    const { columnIndex, key, rowIndex, style } = cellRendererProps;
    const { content } = this.props;
    const cellContent = content[rowIndex - 1][columnIndex];
    return <Cell style={style} key={key} cellContent={cellContent} />;
  };

  cellRenderer = (cellRendererProps: GridCellProps) => {
    const { columnIndex, key, rowIndex, parent } = cellRendererProps;
    let cell;
    if (rowIndex === 0) {
      cell = this.getHeaderCellElement(cellRendererProps);
    } else {
      cell = this.getCellElement(cellRendererProps);
    }
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        {cell}
      </CellMeasurer>
    );
  };

  getGridColumnCount = (): number => {
    const { headers } = this.props;
    return headers[0].length;
  };

  getGridRowCount = (): number => {
    const { content } = this.props;
    return content.length + 1;
  };

  getHeaderCellTooltipContent = (dataTip: string): ReactElement | undefined => {
    if (dataTip) {
      const [rowIndex, columnIndex] = dataTip
        .split(",")
        .map((item: string) => Number(item));
      const { headers } = this.props;
      const cellContent = headers[rowIndex][columnIndex];
      return <TooltipButtonGroup cellContent={cellContent} />;
    }
  };

  render() {
    return (
      <TableStyled>
        <AutoSizer onResize={rebuildTooltip}>
          {(autosizerProps) => {
            const { width, height } = autosizerProps;
            return (
              <MultiGrid
                ref={this.gridRef}
                cellRenderer={this.cellRenderer}
                columnCount={this.getGridColumnCount()}
                columnWidth={this.cache.columnWidth}
                deferredMeasurementCache={this.cache}
                height={height}
                rowCount={this.getGridRowCount()}
                rowHeight={38}
                width={width}
                fixedRowCount={1}
                onScroll={rebuildTooltip}
              />
            );
          }}
        </AutoSizer>
        <Tooltip
          id={HEADER_CELL_DATA_FOR}
          getContent={this.getHeaderCellTooltipContent}
          effect="solid"
          clickable={true}
          place={"bottom"}
        />
      </TableStyled>
    );
  }
}

export default Table;
