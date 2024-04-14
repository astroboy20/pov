import styled from "styled-components"

export const CustomizeStyle = styled.div`
 padding: 3% 5%;
 display:flex ;
 justify-content:space-between ;
 align-items:center ;
 .left{
    display:flex ;
    flex-direction:column ;
    text-align:left ;
    gap:25px;
 }
 .left h1{
    font-size:36px ;
    font-weight:700 ;
 }
 .left p{
    font-size:14px ;
    font-weight:500 ;
    color:#1D1465 ;
 }
 
 .left span{
    border-radius:40px ;
    background-color:#1D1465 ;
    padding:10px 30px;
    color:#fff ;
    width:fit-content ;
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