import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/productDetailsSlice";
import navbarReducer from './features/navbarSlice';
import cartReducer , { calcTotal } from './features/cartSlice';
import uiReducer from "./features/cartOverlaySlice";

 
    const store = configureStore({
        reducer:{
            navbar:navbarReducer,
            shop:productDetailsReducer,
            cart:cartReducer,
            ui:uiReducer,
            }
    })
    store.dispatch(calcTotal())
    
    export default store