//inicializa em branco
import { Button, Stack } from "@mui/material"
import MyInput from "../../components/input/MyInput"
import ListaTarefas from "../../components/listaTarefas/ListaTarefas"
import UserBar from "../../components/userBar/UserBar"
import { userSelectLogged } from "../../store/usuariosSlice"
import { useDispatch} from 'react-redux';
import { Recado, setNewRecado } from "../../store/recadosSlice"
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../store/modules/hooks"
import { useState } from "react";


export function Home() {

const dispacth=useDispatch()

const userLogado = useAppSelector(userSelectLogged)

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    const salvarRecado = () => {
                
        const novoRecado: Recado = { 
            uid: uuidv4(),
            titulo: titulo,
            descricao: descricao,           
            userId: userLogado!, //garantir que tem usuario logado para salvar recado
            editOn: false,
        }

        setDescricao('')
        setTitulo('')
   
        dispacth(setNewRecado(novoRecado))
      }     
       
    return (
        <>
            <UserBar usuario={'odete'}/>
            <Stack sx={{padding:2}} direction="row" spacing={2}>
                <MyInput value={titulo} type="text" label='Titulo' onChange={(e)=>setTitulo(e.target.value)}/>
                <MyInput value={descricao} type="text" label='Descrição' onChange={(e)=>setDescricao(e.target.value)}/>
                <Button onClick={salvarRecado} variant="contained">Salvar</Button>
            </Stack>
            <ListaTarefas />
        </>
    )
    }

