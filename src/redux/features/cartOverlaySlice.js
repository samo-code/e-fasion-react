import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    overlay:false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openOverlay(state,action){
            state.overlay = true
          },
          closeOverlay(state,action){
            state.overlay = false
          }
    }
})
export const {openOverlay,closeOverlay} = uiSlice.actions
const uiReducer = uiSlice.reducer
export default uiReducer