import React, { Component } from 'react'
import{connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from '../redux/features/cartSlice'
import {loadProduct} from '../redux/features/productDetailsSlice'
import {FiShoppingCart} from 'react-icons/fi'
import { Container,Contents,CartImage,Txt,Frame,Cart } from '../styles/navbarStyle'



 class Category extends Component {
 
  
  getLocalPrice =(price)=>{
    const {symbol} =this.props.currence

          if(symbol==="$"){
            return price.toFixed(2);
        }
        if(symbol==="£"){
          return (price * 10).toFixed(2);
      }
      if(symbol==="€"){
        return (price * 20).toFixed(2);
      }
      if(symbol==="¥"){
        return (price * 30).toFixed(2);
      }
  }
  
     render() {
      const {currence} = this.props
     
    return (
      
        <>
        <Container>

                
              {
                  this.props.filtered.map(product=>(
                    <Contents key={product.id} > 
                  
                  {!product.stock < 1 ? (
                    <>
                     <Link to={`/product/${product.id}`} > 
                    <img src={product.img01} alt={product.title} onClick={()=>this.props.handleLoadItem(product)}/>
                    </Link> 
                    <h5>{product.title}</h5>
                    
                      <h5>{currence.symbol} {this.getLocalPrice(product.price)}</h5>
                      
                      <CartImage>
                      <Frame>
                      <Link to="/cart"><Cart><FiShoppingCart  onClick={()=>this.props.handleAddToCart(product)}/></Cart></Link>
                      </Frame>
                          </CartImage>
                          
                          </>
                  ):(
                    <>
                    <Txt>
                      Out of Stock
                      </Txt>
                      <Link to={`/product/${product.id}`} > 
                      <img src={product.img01} alt={product.title} onClick={()=>this.props.handleLoadItem(product)}/>
                    </Link> 
                    <h5>{product.title}</h5>
                    
                      <h5>{currence.symbol} {this.getLocalPrice(product.price)}</h5>
                      
                      </>
                  )}
                  
                  
                    </Contents>
                
              ))
              
              }



</Container> 
</>
        
        
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    currence:state.navbar.currence,
    filtered:state.navbar.filtered,
    
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    handleLoadItem:(item)=>dispatch(loadProduct(item)),
    handleAddToCart:(product)=>dispatch(addToCart(product)),
    
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)
