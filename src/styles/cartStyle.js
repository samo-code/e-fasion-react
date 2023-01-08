import styled from 'styled-components'
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export const CartContainer = styled.div`
     display: flex;
`
export const Products = styled.div`
 flex: 0.75;

`
export const Tax = styled.span`
padding-right:15px;

`
export const Price = styled.div`
 margin-bottom: 20px;

`

export const Product = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border: 1px solid silver;
    margin-bottom:20px;
    &:hover{
        border: none;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        transform: scale(1.01);
    }
    & > img{
    width: 300px;
    height: 300px;
    object-fit: cover;
    padding:5px 0px
   

    }
`
export const Btr = styled.button`

    width: 2rem;
    height: 2rem;
    background-color: #000;
    margin-left: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    
   `
export const CartEmpty = styled.p`
font-size:20px;
`
export const ProductInfo = styled.div`
    padding: 20px;
    width: 100%;
    position: relative;
   
    
`
export const Paragraph = styled.p`
        margin: 20px 0px;
        font-weight: bold;
        &:hover{
            cursor: pointer;
        }
`
export const RemoveProduct = styled.div`
    position: absolute;
    bottom: 20px;
    right: 5px; 
    padding: 10px 25px;
    color: red;
    &:hover{
        cursor: pointer;
    }
    
`
export const Values = styled.div`
    position: absolute;
    right: 30px;
    top:20px
`
export const CartTotal= styled.div`
    height: 150px;
    width: 900px;
    border: 1px solid silver;
    padding: 20px 0px;
    margin: 30px 0px;
    & > p{
    padding-left: 20px;
    margin: 20px 0px;
    font-size: 20px;
    font-weight: bold;
    }
`
export const Btns = styled.button`
    padding: 10px 0px;
    margin: 0 10px; 
    border: none;
    outline: none;
    background:#fff
   
`
export const Btn = styled.button`
   margin: 0 40px;
    padding: 10px 20px;
    border: none;
    outline: none;
    font-size: 15px;
    color: #fff;
    background: lightgreen;
    &:hover{
        cursor: pointer;
    }
`
export const Button = styled.button`
    width: 40px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
`
export const Align = styled.div`
margin: 10px  10px;
`
