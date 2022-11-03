import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit'
import { SoulTechState } from './rootReducer'
import { UserLogado } from './usuariosSlice'


export type Recado = {
    uid:string,
    titulo:string,
    descricao:string,
    userId:UserLogado,
    editOn:boolean,
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

// const initialState:RecadosState={
//     loading:false,
//     message:{
//         type:'',
//         status:200,
//         text:'',
//     },
//    recadosList:[],
// }

const adapter = createEntityAdapter<Recado>({
    // configurar qual é a "chave" da nossa entidade
    selectId: (recado) => recado.uid,
  });

export const { selectAll } = adapter.getSelectors((state: any) => state.recados);

const recadosSlice=createSlice({
    name:'recados',
    initialState: adapter.getInitialState(),
    reducers:{
        setNewRecado: adapter.addOne,
        updateRecado: adapter.updateOne,
        },

    extraReducers:{}
})

export const{ setNewRecado, updateRecado}=recadosSlice.actions
export default recadosSlice.reducer