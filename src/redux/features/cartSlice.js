import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem
       ("cartItems")):[],
    cartQuantity:0,
    cartAmount:0,
    
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const productId = action.payload
           try{
                const itemIndex = state.cartItems.findIndex((product)=> product.id === productId.id &&
                product.size === productId.size && product.color === productId.color)
                if(itemIndex >=0){
                    state.cartItems[itemIndex].cartQuantity +=1
                }else{
                   
                    const tempProduct = {...action.payload, cartQuantity:1,}
                        state.cartItems.push(tempProduct)
                        
                    
                }
           }catch(err){
            return err
           }
            
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },

        removeProduct(state,action){
          const newCartItems =  state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = newCartItems
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

           
        },
        decrement(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1
               
            }else if (state.cartItems[itemIndex].cartQuantity === 1){
                const newCartItems =  state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = newCartItems
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    
               
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        clearCart(state,action){
            state.cartItems = []

           
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        calcTotal(state,action){
           let {total, quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price, cartQuantity} = cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total:0,
                quantity:0
            })
            state.cartQuantity = quantity
            state.cartAmount = total
        },
       
    }
})

export const {addToCart, removeProduct,decrement,clearCart,calcTotal} = cartSlice.actions

export default cartSlice.reducer