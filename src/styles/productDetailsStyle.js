import styled from 'styled-components'

export const Container = styled.div`
     width: 100%;
     
`
export const Wrapper = styled.div`
     width: 90%;
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Text = styled.div`
     flex-basis: 45%;
`
export const AllImages = styled.div`
    height: 80vh;
    display: flex;
`
export const SmallImages = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    & > img{
        height: 19vh;
        margin-bottom: 9px;
        cursor: pointer;
        height: 30%;
        &:hover{
            opacity: 1;
        }
    }
`
export const MainImages = styled.div`
       height: 60%;
       transition:transform 0.3s;
        &:hover{
            transform:scale(1.5)
        }
       
    `
export const DText = styled.p`
font-weight:bold;
`

export const Paragraph = styled.p`
       margin-bottom: 20px;
`
export const Title= styled.div`
    width: fit-content;
    font-size: 30px;
    padding: 2px 5px;
    font-weight: bold;

`
export const Text1 = styled.p`

margin-bottom: 20px;
`
export const Price= styled.p`
color: #555;
font-size: 26px;
font-weight: bold;
padding-top: 5px;
padding-right: 10px;
margin-top:3px
`
export const Box = styled.div`
display: flex;
align-items: center;
padding-left:20px ;

`
export const Button = styled.button`
    font-size: 15px;
    outline: none;
    border: 0;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 10px;
    margin: 0 10px;
    
    
`
export const Color = styled.button`

    width: 2rem;
    height: 2rem;
    background-color: #000;
    margin-left: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    
   `

export const CheckStyle = styled.span`
    font-size: 1rem;
    color: #fff;
`
export const Size = styled.button`
    width: 35px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
    &.selected{
    background-color:#000;
}
    
`

export const Btn =styled.button`
   font-size: 15px;
    outline: none;
    border: 0;
    text-transform:uppercase;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 10px;
    margin: 0 10px;
    color: #fff;
    background-color: lightgreen;
`