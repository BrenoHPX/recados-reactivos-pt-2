import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import { SoulTechState } from './rootReducer'


export type Recado = {
    id:string,
    titulo:string,
    descricao:string,
    userId:string,
}

export type RecadosState={
    loading:boolean,
    message:{
        type:string,
        status:number,
        text:string,
    }
    recadosList:Array<Recado>,
   
}

const initialState:RecadosState={
    loading:false,
    message:{
        type:'',
        status:200,
        text:'',
    },
   recadosList:[],

 
}

export const recadosSelectAll=(state:SoulTechState)=>state.recados

const recadosSlice=createSlice({
    name:'recados',
    initialState,
    reducers:{
        setNewRecado:(state,action)=>{
            state.recadosList=[...state.recadosList,action.payload]
                    },
    },
    extraReducers:{}
})

export const{ setNewRecado}=recadosSlice.actions
export default recadosSlice.reducer