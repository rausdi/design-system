import * as React from "react";

import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  GridCellProps,
  MultiGrid,
} from "react-virtualized";
import Cell from "./table/Cell";
import styled from "styled-components";
import HeaderCell from "./table/HeaderCell";
import { RefObject } from "react";
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
export type ContentType = {
  name: string;
  class: ContentClassesType;
  data: Object;
  onChange?: ContentOnChangeFuncType;
};
export type ContentArrayType = Array<Array<ContentType>>;
export type TableContentType = HeadersType | ContentArrayType;
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
  private tableContent: TableContentType = this.concatAndGetTableHeadersAndContent();
  public gridRef: RefObject<MultiGrid> = React.createRef();

  componentDidMount() {
    rebuildTooltip();
  }

  concatAndGetTableHeadersAndContent(): TableContentType {
    const { headers, content } = this.props;
    return headers.concat(content);
  }

  ifCellNeedTooltip(cellContent: HeaderType | ContentType): boolean {
    const { sortAscFunc, sortDescFunc } = cellContent;
    return !!(sortAscFunc || sortDescFunc);
  }

  cellRenderer = (cellRendererProps: GridCellProps) => {
    const { columnIndex, key, rowIndex, style, parent } = cellRendererProps;
    const cellContent = this.tableContent[rowIndex][columnIndex];
    let cell;
    if (rowIndex === 0) {
      const ifCellNeedTooltip = this.ifCellNeedTooltip(cellContent);
      cell = (
        <HeaderCell
          style={style}
          key={key}
          cellContent={cellContent}
          dataFor={HEADER_CELL_DATA_FOR}
          dataTip={ifCellNeedTooltip ? `${rowIndex},${columnIndex}` : undefined}
          ifCellNeedTooltip={ifCellNeedTooltip}
        />
      );
    } else {
      cell = <Cell style={style} key={key} cellContent={cellContent} />;
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
                columnCount={this.tableContent[0].length}
                columnWidth={this.cache.columnWidth}
                deferredMeasurementCache={this.cache}
                height={height}
                rowCount={this.tableContent.length}
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
          getContent={(dataTip) => {
            if (dataTip) {
              const [rowIndex, columnIndex] = dataTip.split(",");
              const cellContent = this.tableContent[rowIndex][columnIndex];
              return <TooltipButtonGroup cellContent={cellContent} />;
            }
          }}
          effect="solid"
          clickable={true}
          place={"bottom"}
        />
      </TableStyled>
    );
  }
}

export default Table;
