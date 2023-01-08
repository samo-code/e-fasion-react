import {createSlice} from '@reduxjs/toolkit'
import { currencies } from '../../currency'
import { data } from '../../data'

const initialState = {
    products:data,
    filtered:[],
    currence:currencies[0],
    listOpen:false

}

const navbarSlice = createSlice({
    name:"navbar",
    initialState,
    reducers:{
        
        handleChange:(state,action)=>{
            
                state.currence = action.payload
            
        },
        handleCategory:(state,action)=>{
            state.filtered = action.payload

        }
    }
})

export const {handleChange , handleCategory} = navbarSlice.actions

export default navbarSlice.reducer