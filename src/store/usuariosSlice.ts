import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import { SoulTechState } from './rootReducer'


export type User = {
    id:string,
    nome:string,
    email:string,
    password:string,
}
export type UserLogado = {
    id:string,
    nome:string,
    avatar:string,
}

export type UserState={
    loading:boolean,
    message:{
        type:string,
        status:number,
        text:string,
    }
    usersList:Array<User>,
    userOn:UserLogado|null
}

const initialState:UserState={
    loading:false,
    message:{
        type:'',
        status:200,
        text:'',
    },
    usersList:[],
    userOn:null
}

export const userSelectAll=(state:SoulTechState)=>state.usuarios

const userSlice=createSlice({
    name:'usuarios',
    initialState,
    reducers:{
        setNewUser:(state,action)=>{
            state.usersList=[...state.usersList,action.payload]
                    },
        setUserOn:(state,action)=>{
            state.userOn=action.payload
        },
        setUserOff:(state)=>{
            state.userOn=null
    },
},
    extraReducers:{}
})

export const{setNewUser,setUserOn,setUserOff}=userSlice.actions
export default userSlice.reducer