import React, { useState } from "react"
import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ButtonLogin from "../../components/buttons/ButtonLogin"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';
import { getStorage, Usuario } from "../cadastro/Cadastro"

const DivStyle = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh',
}))

const LogStyle = styled(Paper)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '25px'
}))



export function Login(): JSX.Element {

    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function setLogado(key:string, user:Usuario): void{
        localStorage.setItem(key, JSON.stringify(user.email))
    }
    
    const Logar = () => {
        const listaUsuarios = getStorage('UsersList');
        const usuarioLogado = listaUsuarios.find((user)=>(user.email === email && user.password === password))

        if(!usuarioLogado){
            alert("Email ou senha incorretas")
            setEmail('')
            setPassword('')
            return
        }else {
            setLogado('UsuarioLogado', usuarioLogado)
            navigate('/home')
        }

    }

    return (
        <DivStyle>
            <LogStyle elevation={8}>
                <MyInput value={email} type="text" label='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <MyInput value={password} type="password" label='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <ButtonLogin onClick={Logar}></ButtonLogin>
                <Link to={"/cadastro"}>Não possui conta?</Link>
            </LogStyle>
        </DivStyle>
    )
}