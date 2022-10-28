import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {FormControlLabel, Radio, RadioGroup } from '@mui/material';

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

interface RecadoRowProps {
    titulo: string
    descricao: string,
}

const RecadoRow:React.FC<RecadoRowProps> = ({titulo, descricao}) => {
    
    return(
        <StyledTableRow>

            <StyledTableCell align="center">{titulo}</StyledTableCell>
            
            <StyledTableCell align="center">{descricao}</StyledTableCell>

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
    )
}

export default RecadoRow
