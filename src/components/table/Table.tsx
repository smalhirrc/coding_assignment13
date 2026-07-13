import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;

  background-color: ${(props) =>
    props.disabled
      ? "#cccccc"
      : props.backgroundColor || "#ffffff"};

  opacity: ${(props) =>
    props.disabled ? 0.7 : 1};

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
  padding: 10px;
`;

const HeaderCell = styled.th`
  border: 1px solid #dddddd;
  padding: 10px;
  text-align: left;
`;

const TableFooter = styled.tfoot`
  background-color: #f9f9f9;
  font-weight: bold;
`;

const Table = ({
  headers,
  data,
  footer,
  backgroundColor,
  disabled,
}: TableProps) => {
  return (
    <StyledTable
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-component"
    >
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <HeaderCell key={header}>
              {header}
            </HeaderCell>
          ))}
        </TableRow>
      </TableHeader>

      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>

      {footer && (
        <TableFooter>
          <TableRow>
            {footer.map((item, index) => (
              <TableCell key={index}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      )}
    </StyledTable>
  );
};

export default Table;