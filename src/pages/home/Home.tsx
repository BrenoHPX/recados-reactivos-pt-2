//inicializa em branco
import { Button, Stack } from "@mui/material"
import React, {useState} from "react"
import MyInput from "../../components/input/MyInput"
import ListaTarefas from "../../components/listaTarefas/ListaTarefas"
import UserBar from "../../components/userBar/UserBar"
import { setUserOff } from "../../store/usuariosSlice"
import { useDispatch,useSelector} from 'react-redux';
import { SoulTechState } from "../../store/rootReducer"
import { Recado, setNewRecado } from "../../store/recadosSlice"


export function Home() {
const dispacth=useDispatch()
const userlogado=useSelector(({usuarios}:SoulTechState)=>usuarios.userOn!)
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    const salvarRecado = () => {
                
        const novoRecado: Recado = { 
            id: String(Math.floor(Math.random() * Date.now())),
            titulo: titulo,
            descricao: descricao,           
            userId:userlogado.id
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

