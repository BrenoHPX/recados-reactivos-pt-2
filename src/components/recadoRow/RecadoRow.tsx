import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {FormControlLabel, Radio, RadioGroup } from '@mui/material';
import MyInput from '../input/MyInput';
import { useAppDispatch } from '../../store/modules/hooks';
import React, {useState} from "react"
import { Recado, updateRecado } from '../../store/recadosSlice';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

// interface RecadoRowProps {
//     titulo: string
//     descricao: string,
//     uid: string,
//     edit: boolean
// }

const RecadoRow:React.FC<Recado> = ({titulo, descricao, uid, editOn}) => {

  const [novoTitulo, setNovoTitulo] = useState(titulo)
  const [novaDescricao, setNovaDescricao] = useState(descricao)

  const dispatch = useAppDispatch();  

  const editarRecado = () => {
      dispatch(updateRecado({id: uid, changes: {editOn: !editOn } }));
  }     

  const apagarRecado = () => {
                
  //   const novoRecado: Recado = { 
  //       id: String(Math.floor(Math.random() * Date.now())),
  //       titulo: titulo,
  //       descricao: descricao,           
  //       userId:userlogado.id
  //   }
  //  setDescricao('')
  //   setTitulo('')

  //   dispacth(setNewRecado(novoRecado))
  }

    return(
        <StyledTableRow>
          {!editOn && (
            <>
              <StyledTableCell align="center">{titulo}</StyledTableCell>
              <StyledTableCell align="center">{descricao}</StyledTableCell>
            </>
          )}

          {editOn && (
            <>
              <MyInput value={novoTitulo} type="text" label='Titulo' onChange={(e)=>setNovoTitulo(e.target.value)}/>
              <MyInput value={novaDescricao} type="text" label='Descrição' onChange={(e)=>setNovaDescricao(e.target.value)}/>
            </>
          )}

            <StyledTableCell align="center">
            <RadioGroup name="use-radio-group" defaultValue="">
                <FormControlLabel value="completo" control={<Radio color="success" />} label="Completo" />
                <FormControlLabel value="incompleto" control={<Radio color="error" />} label="Incompleto" />
            </RadioGroup>
            </StyledTableCell>

            <StyledTableCell align="center">
                <Button onClick={editarRecado} style={{marginRight: "0.5em"}} variant="contained" startIcon={<EditIcon />} color="success" >Editar</Button>
                <Button onClick={apagarRecado} variant="contained" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
            </StyledTableCell>

        </StyledTableRow>
    )
}

export default RecadoRow
