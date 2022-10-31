import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setUserOff } from "../../store/usuariosSlice"

interface BarProps {
  usuario: string;
}

export default function UserBar({ usuario }: BarProps) {

  let navigate = useNavigate()

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setUserOff())
    navigate('/')
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bem vindo(a) {usuario}!
          </Typography>
          <Link to='/'>
            <Button onClick={logout} color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}