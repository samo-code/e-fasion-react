import styled from 'styled-components'

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index:1;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
`
export const CartSidebar= styled.div`
    background-color: #fff;
    width: 250px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 20;
    overflow-y: auto;
    overflow-x:hidden;
    padding:20px;
    
`

export const CartTitle = styled.div`
    font-size: 25px;
    margin-top: 70px;
`
export const CloseIcon = styled.div`
 
    position: absolute;
    right: 10px;
    bottom: 550px;
    cursor: pointer;
    font-size: 20px;
`
export const Title = styled.h4`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 4px;
    padding: 40px 30px 20px;
    border-bottom: 1px solid #dbdbdb;
`
export const CartBody=styled.div`
     padding: 30px 0;
`
export const List=styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
`
export const ListItems =styled.div`
   display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 30px;
    border-bottom: 2px solid #dbdbdb; 
    & > img{
        width:150px;
        height:150px;
    }
`
export const Text =styled.div`
    width: 20%;
    float: left;
`

export const Img =styled.div`
    width: 100px;
    height: 100px;
    padding-top:30px
`
export const Lists =styled.div`
   
    padding-top:10px
`
 export const Change = styled.div`
 display:flex;
 align-items:center;
 justify-content:flex-end;
 letter-spacing:15px;
 

 `
 export const Signs= styled.p`
 &:hover{
    cursor: pointer;
 }
 `

export const Spans = styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 3px;
    display: block;
    margin-bottom: 5px;
`
export const Delete =styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    width: 80%;
    float: left;
    margin-bottom: 60px;
    color:red;
    &:hover{
        cursor: pointer;
    }
`
export const CheckOut=styled.div`
    margin-bottom: 30px;
    padding-top: 10px;
`
export const Total =styled.div`
     margin-bottom: 30px;
`
export const View =styled.div`
     margin-left: 40px;
     
         
`
export const Button =styled.button`
  border:none;
  padding:20px;
  background-color:#fff;
  font-size:13px;
  &:hover{
    cursor: pointer;
  }
  
`

