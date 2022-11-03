import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RecadoRow from '../recadoRow/RecadoRow';
import { useAppSelector } from "../../store/modules/hooks";
import  {selectAll}  from "../../store/recadosSlice";

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

  const recadosList=useAppSelector(selectAll)
 
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

       {recadosList.length&&(
        <TableBody>
          {
           recadosList.map((recado)=>{
              return <RecadoRow uid={recado.uid} userId={recado.userId} editOn={recado.editOn} titulo={recado.titulo} descricao={recado.descricao}></RecadoRow>
            })
          }
          </TableBody>
       )} 

      </Table>
    </TableContainer>
    </>
  );
}

