import React, {useState, useEffect} from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RecadoRow from '../recadoRow/RecadoRow';
import { SoulTechState } from "../../store/rootReducer";
import {useSelector} from 'react-redux';
import { Recado } from "../../pages/cadastro/Cadastro";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function ListaTarefas() {
  const recadosList=useSelector((state:SoulTechState)=>state.recados.recadosList)
  const[row, setRow]=useState<Recado[]>([])

  useEffect(()=>{
    if (recadosList.length) {
      setRow(recadosList)
    }
  },[recadosList])
  
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

       {row.length&&(
        <TableBody>
          {
           row.map((recado)=>{
              return <RecadoRow titulo={recado.titulo} descricao={recado.descricao}></RecadoRow>
            })
          }
          </TableBody>
       )} 

      </Table>
    </TableContainer>
    </>
  );
}

