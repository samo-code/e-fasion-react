import React, { Component } from 'react'
import { useParams,Link } from 'react-router-dom'
import{connect} from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'
import { Container ,Wrapper,Text,AllImages,SmallImages,MainImages,
    Title,Text1,Price,Box,Btn,DText,Color,Size,CheckStyle} from '../styles/productDetailsStyle'
import { FaCheck } from 'react-icons/fa'



const withRouter = WrappedComponent => props =>{
    const params = useParams()
   
    return (
      <WrappedComponent {...props} params ={params}  />
    )
  }
  
 class ProductDetails extends Component {
    state={
        
        previewImg:this.props.productDetails.img01,
        color:this.props.productDetails.colors[0],
        size:this.props.productDetails.sizes[0],
        
          
        }

        
  render() {

    
    const {previewImg} =this.state
    const { productDetails,currence} = this.props
    const {color} = this.state
    const{size} = this.state
    

    
    return (
      <>
        <Container>
          <Wrapper>
          {!productDetails.stock <1 ?(
            <>
            <AllImages>
            <SmallImages> 
                 <img src={productDetails.img01} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img01})} />
                 <img src={productDetails.img02} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img02})}/>
                 <img src={productDetails.img03} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img03})}/>
                 <img src={productDetails.img04} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img04})}/>


              </SmallImages> 
              <MainImages>
               <img src={previewImg} alt={productDetails.title} /> 

              </MainImages>
              

            </AllImages>
            <Text>
             
                <Title>{productDetails.title}</Title>
                <Text1> {productDetails.description}</Text1>
                <DText>Sizes:  </DText>
                {
                      productDetails.sizes.map((curSize,index) =>(
                        <Size className={size === curSize ? "selected": ""} style={{background:curSize, color:"grey"}}  key={index}
                        value={curSize} name="size" onClick={()=>this.setState({size:curSize}) }> {curSize}
                        </Size>
                  ))}
                  <DText> Colors:</DText>
                  {
                      productDetails.colors.map((curColor,index) =>(
                        <Color style={{background:curColor }}  key={index}
                        value={curColor} name="color" onClick={()=>this.setState({color:curColor}) }> 
                         {color === curColor ? <CheckStyle><FaCheck /></CheckStyle> : null}</Color>
                  ))}
                  
                  
                <DText>Price: {" " }</DText>
                <Box>
                    
                  <Price>{currence.symbol}{" " }{productDetails.price}</Price>

                </Box>
               
                
                <Link to="/cart"> <Btn onClick={()=>this.props.handleAddToCart({
                  id:productDetails.id,
                  img01:productDetails.img01,
                  title:productDetails.title,
                  description:productDetails.description,
                  price:productDetails.price,
                  size:size,
                  color:color,
                  amount:1,
                  
                })}>Add to cart</Btn></Link>
                <Link to="/"><Btn>Back To shopping</Btn></Link>
               <p>This is great</p>
             

            </Text>
            </>
          ):(
            <>
            <AllImages>
            <SmallImages> 
                 <img src={productDetails.img01} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img01})} />
                 <img src={productDetails.img02} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img02})}/>
                 <img src={productDetails.img03} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img03})}/>
                 <img src={productDetails.img04} alt={productDetails.title} onClick={()=>this.setState({previewImg:productDetails.img04})}/>


              </SmallImages> 
              <MainImages>
               <img src={previewImg} alt={productDetails.title} /> 

              </MainImages>
              

            </AllImages>
            <Text>
             
                <Title>{productDetails.title}</Title>
                <Text1> {productDetails.description}</Text1>
                <DText>Sizes:  </DText>
                {
                      productDetails.sizes.map((curSize,index) =>(
                        <Size className={size === curSize ? "selected": ""} style={{background:curSize, color:"grey"}}  key={index}
                        value={curSize} name="size" onClick={()=>this.setState({size:curSize}) }> {curSize}
                        </Size>
                  ))}
                  
                  <DText> Colors:</DText>
                  {
                      productDetails.colors.map((curColor,index) =>(
                        <Color style={{background:curColor }}  key={index}
                        value={curColor} name="color" onClick={()=>this.setState({color:curColor}) }> 
                         {color === curColor ? <FaCheck className="checkStyle" /> : null}</Color>
                  ))}             
                  
                <DText>Price: {" " }</DText>
                <Box>
                    
                  <Price>{currence.symbol}{" " }{productDetails.price}</Price>

                </Box>
               
                <Link to="/"><Btn>Back To shopping</Btn></Link>
               <p>This is great</p>
             

            </Text>
            </>
          )}
              

          </Wrapper>

        </Container>
      </>
    )
  }
}
const mapStateToProps =(state)=>{
    return{
      productDetails: state.shop.productDetails,
      currence:state.navbar.currence,
    }
     
    
   
  }
  
  const mapDispatchToProps =(dispatch)=>{
   return{
     handleAddToCart:(productDetails)=>dispatch(addToCart(productDetails)),
   }
       
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProductDetails))