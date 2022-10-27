import React, { useState } from "react"
import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ButtonLogin from "../../components/buttons/ButtonLogin"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';
import { getStorage, setStorage } from "../cadastro/Cadastro"

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


    // const Logar = () => {
    //     const listaUsuarios = getStorage('UsersList');
        
    //     listaUsuarios.find((user)=>{
    //         if (user.email === email && user.password === password){
    //             navigate('/home')
    //             setStorage()
    //     } 
    // }
    
    const Logar = () => {
        const listaUsuarios = getStorage('UsersList');
        const usuarioLogado:any = listaUsuarios.find((user)=>(user.email === email && user.password === password))

        if(!usuarioLogado){
            alert("Email ou senha incorretas")
            setEmail('')
            setPassword('')
            return
        }else {
            setStorage('UsuarioLogado', usuarioLogado)
            navigate('/home')
        }

    }

    return (
        <DivStyle>
            <LogStyle elevation={8}>
                <MyInput value={email} type="text" label='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <MyInput value={password} type="text" label='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <ButtonLogin onClick={Logar}></ButtonLogin>
                <Link to={"/cadastro"}>Não possui conta?</Link>
            </LogStyle>
        </DivStyle>
    )
}