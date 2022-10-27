import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {FormControlLabel, Radio, RadioGroup } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  titulo: string,
  descricao: string,
  status: string,
  acao?: string,
) {
  return { titulo, descricao, status, acao};
}

const rows = [
  createData('Aprender React', 'Dar com a cabeça no teclado', 'concluido'),
  createData('Arrumar trampo', 'Fazer boas entrevistas', 'incompleto'),
];

export default function ListaTarefas() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Título</StyledTableCell>
            <StyledTableCell align="center">Descrição</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Ação</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="center">{row.titulo}</StyledTableCell>
              <StyledTableCell align="center">{row.descricao}</StyledTableCell>
              <StyledTableCell align="center">
               <RadioGroup name="use-radio-group" defaultValue="">
                  <FormControlLabel value="completo" control={<Radio color="success" />} label="Completo" />
                  <FormControlLabel value="incompleto" control={<Radio color="error" />} label="Incompleto" />
                </RadioGroup>
              </StyledTableCell>
              <StyledTableCell align="center">
                    <Button style={{marginRight: "0.5em"}} variant="contained" startIcon={<EditIcon />} color="success" >Editar</Button>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

