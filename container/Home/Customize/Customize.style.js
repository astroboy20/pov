import styled from "styled-components"

export const CustomizeStyle = styled.div`
 padding: 3% 5%;
 display:inline-flex ;
 justify-content:space-between ;
 align-items:center ;
 width:100% ;
 .left{
    display:flex ;
    flex-direction:column ;
    text-align:left ;
    gap:25px;
    width:100% ;
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
    cursor: pointer;
 }
 
 .left span:hover{
    background-color:transparent ;
    border-left:1px solid #1D1465 ;
    border-right:1px solid #1D1465 ;
    color:  #1D1465 ;
    transition:0.5s ease-in-out ;
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