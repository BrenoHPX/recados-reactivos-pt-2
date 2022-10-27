import { Button, Stack } from "@mui/material"
import React, {useState} from "react"
import MyInput from "../../components/input/MyInput"
import ListaTarefas from "../../components/listaTarefas/ListaTarefas"
import UserBar from "../../components/userBar/UserBar"
// import { getStorage } from "../cadastro/Cadastro"

interface Usuario {
    name: string,
    email: string,
    password: string,
    recados: Recado[],
}
interface Recado {
    titulo: string,
    descricao: string,
    id: number,
}

const usuarioLogado = localStorage.getItem('UsuarioLogado')
// const listaUsuarios = JSON.parse(localStorage.getItem('UsersList') || '[]') 

export function Home() {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    function procurarUsuarios(): Usuario[] {
        return JSON.parse(localStorage.getItem('UsersList') || '[]')
    }

    function salvarRecado(): void{

        const novoRecado: Recado = {
            titulo: titulo,
            descricao: descricao,
            id: Math.floor(Math.random() * Date.now())
        }

        let usuario = acharUsuario() 

        usuario.recados.push(novoRecado)

        atualizarDados(usuario)

        montarHtml(novoRecado)

    }

    // pegar os inputs
    // valor dor inputs -> objeto (novoRecado)
    // recado dar um push no usuario logado
    
    // pegar a lista de usuarios
    // localizar usuario logado
    // push novoRecado nos recados do usuario logado

    function acharUsuario(): Usuario {
        let listaUsuario = procurarUsuarios();
        return listaUsuario.find((user) => user.email === usuarioLogado) as Usuario
    }

    function atualizarDados (dados: Usuario) {
        let listaUsuario = procurarUsuarios()
        let usuarioEncontrado = listaUsuario.findIndex((valor) => valor.email === dados.email)

        listaUsuario[usuarioEncontrado] = dados
        
        atualizarStorage(listaUsuario)
    }

    function atualizarStorage(usuario: Usuario[]): void{
        localStorage.setItem('UsersList', JSON.stringify(usuario))
    }

    function montarHtml(Recado: Recado){

    }

        // const listaUsuarios = getStorage('UsersList')
        // const usuarioLogado = getStorage('UsuarioLogado')
        // console.log (typeof usuarioLogado)

        // listaUsuarios.some((user)=>user.email === usuarioLogado)    

        // function encontrarUsuario(){
        //     let usuario = getStorage('UsersList')
        //     usuario.find((user) => user.email === usuarioLogado)
        // }

    

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
