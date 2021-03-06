import styled from 'styled-components'
import { device } from '../../theme'

export const FooterContainer = styled.footer`
    width: 100%; 
    height: 200px; 
    display: flex; 
    justify-content: center; 
    background: rgb(38,132,255);
    background: linear-gradient(90deg, rgba(38,132,255,1) 0%, rgba(0,184,217,1) 100%);

    & p{
        color: #eeeeee;
        font-weight: 600; 
    }
`

export const FooterLeft = styled.div`
    padding-left: 15px; 
    & hr{
        border: 1px solid #ffffff; 
        width: 80%;
        margin: 0px; 
    }

    a {
        color: #ffffff; 
    }

`

export const FooterInner = styled.div`
    width: 100%; 
    @media ${device.mobleS}{
        max-width: 320px; 
    }
    @media ${device.tablet} {
        max-width: 768px;

    }
    @media ${device.tabletL} {
        max-width: 768px;
       
    }

    @media ${device.laptop} {
        max-width: 1024px;
      
    }
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    flex-wrap: wrap; 
`

export const Social = styled.div`
    display: flex; 
`

export const Icon = styled.div`
    margin: 10px; 

    &:hover{
        cursor: pointer;
    }
`


export const Button = styled.button`
    padding: 15px 40px 15px 40px; 
    
    border-radius: 40px; 
    border: none; 
    background-color: #6e00ff; 
    margin-left: 15px; 
    color: #eeeeee !important; 
    font-weight: 600; 
    font-size: 16px; 
    transition: 0.2s; 
    
    & a{
        margin: 0px; 
    }

    &:hover{
        cursor:pointer; 
        opacity: 0.8; 
    }

    &:focus{
        outline: none; 
    }
`