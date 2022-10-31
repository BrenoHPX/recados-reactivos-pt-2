// @ ts-nocheck
import React, { useState } from "react"
import { Box, Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ButtonLogin from "../../components/buttons/ButtonLogin"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';
import { setUserOn, User } from "../../store/usuariosSlice"
import { useDispatch,useSelector} from 'react-redux';
import { userSelectAll} from "../../store/usuariosSlice"

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

    const dispatch=useDispatch()
    
    const usersRedux=useSelector(userSelectAll)

    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    
    const Logar = () => {

        const usuarioLogado = usersRedux.usersList.find((user:User)=>(user.email === email && user.password === password))
console.log(usuarioLogado);

        if(!usuarioLogado){
            alert("Email ou senha incorretas")
            setEmail('')
            setPassword('')
        }else {
            const avatar=usuarioLogado?.nome?.substring(0,1)
            const usuarioOn={
                id:usuarioLogado.id,
                nome:usuarioLogado.nome,
                avatar,
            }
            
            dispatch(setUserOn(usuarioOn))
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