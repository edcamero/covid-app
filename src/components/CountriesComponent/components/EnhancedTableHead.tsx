import { TableHead, TableRow, TableCell, TableSortLabel, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React from 'react';
import { CoutryTable } from './resource/CoutriesResource';

type Order = 'asc' | 'desc';


interface HeadCell {
    disablePadding: boolean;
    id: keyof CoutryTable;
    label: string;
    numeric: boolean;
  }

  const headCells: readonly HeadCell[] = [    
    {
      id: 'Country',
      numeric: true,
      disablePadding: false,
      label: 'Country',
    },
    {
      id: 'TotalConfirmed',
      numeric: true,
      disablePadding: false,
      label: 'Total Confirmed',
    },
    {
      id: 'TotalDeaths',
      numeric: true,
      disablePadding: false,
      label: 'Total Deaths',
    },
    {
      id: 'TotalRecovered',
      numeric: true,
      disablePadding: false,
      label: 'TotalRecovered',
    },
  ];

interface EnhancedTableHeadProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CoutryTable
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof CoutryTable) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
