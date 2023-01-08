import styled from 'styled-components'

export const Nav = styled.nav`
background:#fff;
width:100%;
height:60px;
display:flex;
justify-content:space-between;
padding:10px 20px;
z-index:1;
top:0;
left:0;
font-size:20px;
position:fixed;


@media screen and (max-width:768px) {
    transition:0.8s all ease;
}
`
export const SubNav = styled.div`
width:80%;
margin:auto;
display:flex;
justify-content:space-between;
align-items:center;
`
export const types = ["Women","Men","Kids"]


export const Tab = styled.button`
padding:10px 60px;
font-size:15px;
cursor: pointer;
opacity:0.6;
background:white;
height:40px;
border-bottom:2px solid transparent;
border:0;
outline:0;
transition:ease border-bottom 250ms;
${({active})=>active && `
   border-bottom:2px solid lightgreen;
   opacity:1;
   color:lightgreen
`}

`
export const CategoryType = styled.p`
margin-top:120px;
margin-left:60px;
padding-right:50px;
font-size:30px;
` 
export const BtnContainer = styled.div`
display:flex;
justify-content:space-around;
`


export const Bag= styled.div`
    padding-top:20px;
    color:green;
    
   
`
export const BagIcon= styled.div`
   
    color:lightgreen;
    
`
export const CartIcon= styled.div`
   color:lightgreen;
   font-size:20px;
   cursor: pointer;
   position:relative;
 
`
export const Badge= styled.span`
   position:absolute;
   top:-10px;
   right:-10px;
   background:lightgreen;
   color:#fff;
   width:15px;
   height:15px;
   border-radius:50%;
   font-size:.8rem;
   font-weight:500;
   display:flex;
   align-items:center;
   justify-content:center;
    
`
export const CartContainer= styled.div`
display:flex;
align-items:center;
gap:3;


`
export const DropDown= styled.div`
padding:30px;


`
export const Container= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color:#f5fbfd;
    position:relative;
    &:hover{

    }
    & > img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        padding:5px 0px
    }
    
`
export const Frame = styled.div`
    position:absolute;
    bottom:5px;
    right:5px;
    padding:5px 5px;
    height:20px;
    width:20px;
    border-radius:50px;
    background:lightgreen;
`
export const CartImage= styled.div`
  position:absolute;
  bottom:0;
  right:0;
  padding:2rem 2rem;
  transform:translate(100%,100%);
  
 
  `
export const Cart = styled.div`
color:#fff;
`
export const Contents= styled.div`
    min-width: 250px;
    min-height: 200px;
    overflow: hidden;
    padding: 10px;
    box-shadow: 2px 8px 20px #ddd;
    margin: 10px;
    transition: 0.5s linear;
    position:relative;
    overflow:hidden;
    &:hover{
        transform:scale(1.1);
        transition:all 1s linear;
        cursor: pointer;
       
    }
    &:hover ${CartImage}{
        transform:translate(0,0);
        
    }
    
`
export const Imt = styled.img`
height:150px;
width:150px;
`
 export const Txt = styled.div`
 position:absolute;
 top:120px;
 left:50px;
 font-size:25px;
 font-weight:500;
 `







