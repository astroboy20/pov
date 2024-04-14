import styled from "styled-components"

export const HeroContainer = styled.div`
 padding: 3% 5%;
 .text{
    display:flex ;
    flex-direction:column ;
    text-align:center ;
    gap:25px;
 }
 .text h1{
    font-size:36px ;
    font-weight:700 ;
 }
 .text p{
    font-size:14px ;
    font-weight:500 ;
    color:#1D1465 ;
 }
 .text .button{
    display:flex ;
    column-gap:20px;
    justify-content:center ;
    align-items:center ;
 }
 .text .button .a{
    border-radius:40px ;
    background-color:#1D1465 ;
    padding:10px 30px;
    color:#fff ;
 }
 .text .button .b{
    border-radius:40px ;
    background-color:transparent ;
    border:1px solid #1D1465 ;
    padding:10px 30px;
    color:  #1D1465 ;
 }

 .hr{
    margin-top:8% ;
    border: 0.4px solid #1D1465;
 }
`