import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    background-image: linear-gradient(125deg,#6a89cc,#b8e994);
    position: absolute;
    top: 50%;
    text-align: center;
    color: #343434;


`
export const Title = styled.div`
margin-top:30px;
font-size:40px;
`
export const Text = styled.h2`
    font-size: 160px;
    margin: 0;
    font-weight: 900;
    letter-spacing: 20px;
`
export const Paragraph = styled.div`
font-size:20px;
margin-bottom:30px;
`
export const Href = styled.a`
    text-decoration: none;
    background: #e55039aa;
    color: #fff;
    padding: 12px 24px;
    display: inline-block;
    border-radius: 25px;
    font-size: 14px;
    margin-bottom:10px;
    text-transform: uppercase;
    transition: 0.4s;
    &:hover{
        background: #e55039;
    }
`
    