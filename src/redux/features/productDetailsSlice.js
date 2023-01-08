import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    
    productDetails:null,
    
}

const productDetailsSlice = createSlice({
    name:"shop",
    initialState,

    reducers: {
        loadProduct(state,action){
            
            state.productDetails=action.payload
            
        },
        }
})
export const {loadProduct} = productDetailsSlice.actions

const productDetailsReducer = productDetailsSlice.reducer

export default productDetailsReducer