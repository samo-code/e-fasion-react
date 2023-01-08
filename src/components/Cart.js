import React, { Component } from 'react'
import{connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { removeProduct,decrement,addToCart, calcTotal,clearCart} from '../redux/features/cartSlice'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {Container,CartContainer,Product,ProductInfo,Paragraph,
Products,Values,CartTotal,Price,Btns,Btn,RemoveProduct,CartEmpty,Tax,Button,Align,Btr} from '../styles/cartStyle'

class Cart extends Component {
    componentDidMount(){
        const {calcTotal} = this.props
        calcTotal()
       
        }
    componentDidUpdate(){
       const {calcTotal} = this.props
       calcTotal()
      
       }
  render() {
    const {items,currence} =this.props
    return (
        <>
     <Container>
                <CartContainer >
                    {items.length === 0 ? (
                        <CartEmpty>Your cart is empty, <Link to="/">continue shopping</Link></CartEmpty>
                    ):(
                        <Products>
                        {items.map((cartItem,index)=>(
                            < Product key={index}>
                                <img src={cartItem.img01} alt={cartItem.title} />
                                <ProductInfo>
                                    <h3>{cartItem.title}</h3>
                                  <div>
                                    Sizes:{" "}
                                    <Align >
                                    <Button style={{backgroundColor:cartItem.size}}>{cartItem.size}</Button>
                                    </Align>
                                    </div>
                                    <div>
                                    Colors:{" "}
                                    
                                    
                                    <Align >{/* <p  className="btnStyle" style={{backgroundColor:cartItem.color}}></p> */}
                                    <Btr style={{backgroundColor:cartItem.color}}></Btr>
                                    </Align>
                                    </div>
                                    <p>{cartItem.description}</p>
                                    <Price >{currence.symbol} {cartItem.price}</Price>

                                    < Values>
                                    <Paragraph  onClick={()=> this.props.handleIncrement(cartItem)}>+</Paragraph>
                                    <p >{cartItem.cartQuantity}</p>
                                    <Paragraph  onClick={()=> this.props.handleDecrement(cartItem)}>-</Paragraph>
                                    </ Values>
                                    <RemoveProduct>
                                        <span><RiDeleteBin6Line onClick={()=> this.props.handleRemove(cartItem)}/></span>
                                    </RemoveProduct>
                                    

                                </ProductInfo>
                               

                            </ Product >
                            
                        ))}
                        

                    </Products>

                    )}
                    
                </CartContainer>
                <CartTotal>
            <p>
                    <span>Tax: </span>
                    <Tax >21%</Tax >
                    <span>{items.reduce((acc,cartItem)=>acc + cartItem.cartQuantity * cartItem.price * 4/100 ,0

).toFixed(2)}</span>
                </p>
                <p>
                    <Tax>Quantity:</Tax>
                    <span>{(items).length}</span>
                </p>
                <p>
                    <Tax>Total:</Tax>
                    <span>{currence.symbol} {items.reduce((acc,cartItem)=>(acc + cartItem.cartQuantity * cartItem.price )+(acc + cartItem.cartQuantity * cartItem.price * 4/100 ),0

).toFixed(2)} </span>
                </p>
                

            </CartTotal>
                <Btns>
                    <Btn onClick={()=> this.props.handleClearCart()}>Clear Cart</Btn>
                    <Btn >Order</Btn>
                </Btns >

            </Container>
      </>
    )
  }
}

const mapStateToProps=(state)=>{
 
    return{
          items:state.cart.cartItems,
          cartCount:state.cart.cartTotalQuantity,
          cartAmount:state.cart.cartAmount,
          currence:state.navbar.currence
      }
  }
  
  const mapDispatchToProps =(dispatch)=>{
    return{
      
       handleRemove:(cartItem)=>dispatch(removeProduct(cartItem)),
       handleDecrement:(cartItem)=>dispatch(decrement(cartItem)),
       handleIncrement:(cartItem)=>dispatch(addToCart(cartItem)),
       calcTotal:()=>dispatch(calcTotal()),
       handleClearCart:()=>dispatch(clearCart()),
       handleAddToCart:(productDetails)=>dispatch(addToCart(productDetails)),
       
      
      
     
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


