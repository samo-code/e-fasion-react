import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import{connect} from 'react-redux'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import CartOverlay from './components/CartOverlay'
import Cart from './components/Cart'
import Default from './components/Default'
import Category from './components/Category'
import {gql,useQuery} from '@apollo/client'


class App extends Component {
 
  render() {
    const {overlay} = this.props
    
  return (
      <>
     
      
      <Navbar />
      
      { overlay && <CartOverlay/>}
      <Routes> 
        
        <Route path="/" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Default />}/>
         
     </Routes>

      </>
    )
  }
}
const mapStateToProps=(state)=>{
 
  return{
        
        overlay:state.ui.overlay,
        items:state.cart.cartItems,
        totalAmount:state.cart.totalAmount,
        totalPrice:state.cart.totalPrice,
        
    }
}
export default connect(mapStateToProps)(App)
