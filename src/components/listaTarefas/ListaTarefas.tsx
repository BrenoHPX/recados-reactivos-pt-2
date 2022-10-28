import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getStorage} from '../../pages/cadastro/Cadastro';
import RecadoRow from '../recadoRow/RecadoRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const emailLogado = JSON.parse(localStorage.getItem('UsuarioLogado')!);
const listaUsuarios = getStorage('UsersList')
const usuarioLogado = listaUsuarios.find((user)=>user.email===emailLogado)
const listaRecados = usuarioLogado?.recados!


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
          {listaRecados.map((recado)=>{
            return <RecadoRow titulo={recado.titulo} descricao={recado.descricao}></RecadoRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

