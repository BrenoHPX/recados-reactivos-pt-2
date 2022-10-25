import React, {useState} from "react"
import { Paper, Box } from "@mui/material"
import { Link } from "react-router-dom"
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
    width: '25vw',
    height: '40vh',
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
    password: string,
    recados: Recado[],
}


function getStorage(key:string):Array<Usuario>{
    return JSON.parse(localStorage.getItem(key) || '[]')
}

function setStorage(key:string, usersList:Array<Usuario>):void {
    localStorage.setItem(key, JSON.stringify(usersList));
}


export const Cadastro = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    function cadastrar(){
        validarCampos()

        // verificando se já existe o usuario
        let listandoUsuarios = getStorage('UsersList');
        let checkUsuarios = listandoUsuarios.some((user) => user.email === email)
        
        if (checkUsuarios){
            alert('Já existe este email em nosso sistema!')
            return
        }

        const newUser: Usuario = {
            name: name,
            email: email,
            password: password,
            recados: []
        }

        listandoUsuarios.push(newUser)
        setStorage('UsersList', listandoUsuarios)

        alert("Conta criada")

        setName('')
        setEmail('')
        setPassword('')
        setRepassword('')
    }

    function validarCampos():Boolean{

        if(!name || !email || !password || !repassword){
            alert('Preencha todos os campos!')
            return false
        }
        if(password !== repassword){
            alert('As senhas não conferem!')
            return false
        }return true
    }
    


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