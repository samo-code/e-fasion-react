import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import{connect} from 'react-redux'
import { RiDeleteBin6Line,RiCloseLine   } from 'react-icons/ri'
import { removeProduct,decrement,addToCart} from '../redux/features/cartSlice'
import {closeOverlay} from '../redux/features/cartOverlaySlice'
import { Overlay,ListItems,List,CartTitle,CloseIcon,Delete,
CartSidebar,CheckOut,Total,View,Lists,Button,Change,Signs} from '../styles/cartOverlayStyle'


 class CartOverlay extends Component {
  
  
  render() {
    const {items} =this.props
    
   
    return (
      <Overlay onClick={()=> this.props.handleCloseOverlay()} >
        <CartSidebar onClick={(e)=> e.stopPropagation()} >
          <CloseIcon  onClick={()=> this.props.handleCloseOverlay()}>
            <RiCloseLine />
          </CloseIcon>
          <CartTitle >My Bag has {(items).length} Items</CartTitle>
          <List>
          {
                items.map(item=>(
                  <ListItems key={item.id} >
              
                 <img src={item.img01}  alt={item.title} />
                 <Change>
                 <Signs onClick={()=> this.props.handleIncrement(item)}>+</Signs>
                 <p >{item.cartQuantity}</p>
                 <Signs onClick={()=> this.props.handleDecrement(item)}>-</Signs>
                 </Change>
                <Lists>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  </Lists>
                  <Delete>
                  < RiDeleteBin6Line  onClick={()=> this.props.handleRemove(item)} />
                  </Delete>
                </ListItems>
                ))
              }
               <CheckOut>
                <Total>
                        Total:<span>${items.reduce((acc,cartItem)=>acc + cartItem.cartQuantity * cartItem.price,0

                        ).toFixed(2)}</span> 
                         </Total >
                        <View >
                         <Link to="/cart">< Button>View Bag</ Button></Link>
                         <Link to="/checkout"><Button>checkout</Button></Link>
                    </View >
                    </CheckOut>
                    

            
          </List>
        </CartSidebar>
      </Overlay>
    )
  }
}
const mapStateToProps=(state)=>{
 
  return{
        items:state.cart.cartItems,
        cartCount:state.cart.cartTotalQuantity,
        cartAmount:state.cart.cartAmount,
        cartQuantity:state.cart.cartQuantity,
        
    }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    
     handleRemove:(cartItem)=>dispatch(removeProduct(cartItem)),
     handleCloseOverlay:()=>dispatch(closeOverlay()),
     handleDecrement:(cartItem)=>dispatch(decrement(cartItem)),
     handleIncrement:(cartItem)=>dispatch(addToCart(cartItem)),
     
    
     
    
    
   
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartOverlay)
