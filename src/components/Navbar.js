import React, { Component } from 'react'
import{connect} from 'react-redux'
import { currencies } from '../currency'
import {Link} from 'react-router-dom'
import {  handleChange, handleCategory} from '../redux/features/navbarSlice'
import { addToCart } from '../redux/features/cartSlice'
import {loadProduct} from '../redux/features/productDetailsSlice'
import {openOverlay} from '../redux/features/cartOverlaySlice'
import { Nav,BtnContainer,Bag,CartContainer, 
  CartIcon,Badge,BagIcon,types,Tab,DropDown, CategoryType,SubNav } from '../styles/navbarStyle'
import {RiShoppingBag2Fill} from 'react-icons/ri'
import {FiShoppingCart} from 'react-icons/fi'


class Navbar extends Component {
 state={
      
    active:types[0],
    loading:false
    
  }

  componentDidMount(){
    this.setState({loading:true})
    setTimeout(()=>{
      this.setState({loading:false})
     },3000)
    
  }
  componentWillUnmount(){
    clearTimeout(this.myInterval)
  }
   
 
    
  handleCurrency =(e)=>{
    let symbol = e.target.options[e.target.selectedIndex].text
    let itemObj = {symbol}
    this.props.handleChange(itemObj)
    
  }
  handleCategoryChange =(e)=>{
    const newItem = this.props.products.filter((item)=>{
      return item.category === e.target.value
    })
    this.props.handleCategory(newItem)
  }

  render() {
    const {cartQuantity} =this.props
    
return (
     
      <>
      {
        this.state.loading ? ("Loading..."):(
          <>
          <Nav>
          <SubNav>
        <BtnContainer>
          
        {types.map(type=>(
           <Tab key={type} value={type} active={this.state.active === type} 
           onClick={(item)=> {this.setState({active:type}); this.handleCategoryChange(item)}}>
              {type}
          </Tab>
      ))}
    
         
        </BtnContainer>
        <Bag>
                  <Link to="/"> <BagIcon> <RiShoppingBag2Fill /> </BagIcon></Link> 
            </Bag>
            <CartContainer>
                  <DropDown>
                  
                  <select onChange={(e)=>this.handleCurrency(e)}>

                {
                    currencies.map((curr,index)=>{
                         return (
                                  <option value={curr.symbol} key={index}>
                                        {curr.symbol}
                                  </option>
                         )
                    })
                }
            </select>
                          
                          </DropDown>
                        
                          < CartIcon onClick={()=> this.props.handleOpenOverlay()}>
                                <FiShoppingCart />
                          
                          <Badge>{cartQuantity}</Badge>
                          </ CartIcon>
                          
                          </CartContainer>
                          
                          </SubNav>
                          
                   </Nav>
                   <CategoryType>Category :{" "} {this.state.active} </CategoryType>
                   
                   </>

                   
        )
        
      }
      
                  
      </>
       

    )
  }
}
const mapStateToProps=(state)=>{
 
  return{
     
       
       cartQuantity:state.cart.cartQuantity,
       filtered:state.navbar.filtered,
       products:state.navbar.products
        
    }
}


const mapDispatchToProps =(dispatch)=>{
  return{
    handleLoadItem:(item)=>dispatch(loadProduct(item)),
    handleAddToCart:(product)=>dispatch(addToCart(product)),
    handleOpenOverlay:()=>dispatch(openOverlay()),
    handleChange:(itemObj )=>dispatch(handleChange(itemObj )),
    handleCategory:(item)=>dispatch(handleCategory(item))
    
      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
