import React, {FC} from 'react';
import classes from './DataTable.module.scss';
import {DataTableProps} from './DataTable.types';
import {Table, Thead, Tbody, Tr, Th, Td, chakra} from '@chakra-ui/react';
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import cx from 'classnames';

export const DataTable: FC<DataTableProps<object>> = ({className, data, columns}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const {isPhone} = useWindowWidth();

  return (
    <Table size={isPhone ? 'sm' : 'md'}>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = header.column.columnDef.meta;
              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  isNumeric={meta?.isNumeric}
                  className={classes.th}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}

                  <chakra.span className={classes.sortedIcon}>
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === 'desc' ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                      ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr
            key={row.id}
            onClick={() => console.log(row.original)}
            className={cx(classes.row, false && classes['row--isActive'])}
          >
            {row.getVisibleCells().map((cell) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = cell.column.columnDef.meta;
              return (
                <Td key={cell.id} isNumeric={meta?.isNumeric}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
