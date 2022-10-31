// @ ts-nocheck

import React, { useState} from "react"
import { Paper, Box } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ButtonCadastrar from "../../components/buttons/ButtonCadastrar"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';
import { useDispatch,useSelector} from 'react-redux';
import { setNewUser, userSelectAll, UserState,User } from "../../store/usuariosSlice"

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
    padding: '25px',
}))

interface Recado {
    id: number,
    titulo: string,
    descricao: string,
}

interface Usuario {
    id: number,
    name?: string,
    email: string,
    password?: string,
    recados?: Array<Recado>,
}

export function Cadastro()  {
    const dispatch=useDispatch()

    const usersRedux:UserState=useSelector(userSelectAll)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const limpaCampos = () => {
        setName('')
        setEmail('')
        setPassword('')
        setRepassword('')
    }

    const validarCampos = ():Boolean =>{

        if(!name || !email || !password || !repassword){
            alert('Preencha todos os campos!')
            limpaCampos()
            return false
        }
        if(password.length < 5 && password.length > 10){
            alert('A senha deve ter entre 5 e 10 caracteres!')
            return false
        }
        if(password !== repassword){
            alert('As senhas não conferem!')
            limpaCampos()
            return false
        }
        return true
    }

    const cadastrar = () => {
        if (validarCampos()){

            // verificando se já existe o usuario
            let checkUsuarios = usersRedux.usersList.some((user:User) => user.email === email)
            
            if (checkUsuarios){
                alert('Já existe este email em nosso sistema!')
                limpaCampos()
                return false
            }

            const newUser: Usuario = {
                id: Math.floor(Math.random() * Date.now()),
                name: name,
                email: email,
                password: password,           
            }
           
            dispatch(setNewUser(newUser))

            alert("Conta criada")
            limpaCampos()
            navigate('/')

        }
        return true
    }

    let navigate = useNavigate()
   
    
    return (
        <DivStyle>
            <LogStyle elevation={8}>
                <MyInput value={name} type="text" label='Nome' onChange={(e)=>setName(e.target.value)}/>
                <MyInput value={email} type="email"  label='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <MyInput value={password} type="password" label='Senha' onChange={(e)=>setPassword(e.target.value)} />
                <MyInput value={repassword} type="password" label='Repita sua senha' onChange={(e)=>setRepassword(e.target.value)}/>
                <ButtonCadastrar onClick={cadastrar}/>
                <Link to={"/"}>Já possui conta?</Link>
            </LogStyle>
        </DivStyle>
    )
}

export type { Usuario, Recado }
