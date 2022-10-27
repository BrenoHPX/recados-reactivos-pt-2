import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface BarProps {
  usuario: string;
}

export default function UserBar({ usuario }: BarProps) {

  const logout = () => {
    localStorage.removeItem('UsuarioLogado')
  }

  // const imprimirNome: Usuario = () => {
    
  // } 

  // const listaUsuarios = JSON.parse(localStorage.getItem('UsersList') || '[]')

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