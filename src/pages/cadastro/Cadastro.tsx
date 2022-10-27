//to do list
//validar email


import React, { useState} from "react"
import { Paper, Box } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ButtonCadastrar from "../../components/buttons/ButtonCadastrar"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';

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
    id: string,
    titulo: string,
    descricao: string,
}

interface Usuario {
    name: string,
    email: string,
    password?: string,
    recados?: Recado[],
}

function getStorage(key:string):Array<Usuario>{
    return JSON.parse(localStorage.getItem(key) || '[]')
}

function setStorage(key:string, usersList:Array<Usuario>):void {
    localStorage.setItem(key, JSON.stringify(usersList));
}


export function Cadastro()  {

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
        if(password.length > 5 && password.length < 10){
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
            let listaUsuarios = getStorage('UsersList');
            let checkUsuarios = listaUsuarios.some((user) => user.email === email)
            
            if (checkUsuarios){
                alert('Já existe este email em nosso sistema!')
                limpaCampos()
                return false
            }

            const newUser: Usuario = {
                name: name,
                email: email,
                password: password,
                recados: []
            }

            listaUsuarios.push(newUser)
            setStorage('UsersList', listaUsuarios)

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

export { getStorage, setStorage }
export type { Usuario }
