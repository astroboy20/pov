"use client"
import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 2% 5% ;
  .header {
    display: flex;
    justify-content: space-between;
    align-items:center ;
  }
  .logo-image{
    width:150px ;
    height:50px ;
  }
  .header .right {
    display: flex;
    align-items:center ;
    column-gap: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .header .right p  a {
    color:"#1D1465";
    text-decoration:none !important;
  }
  .header .right span a{
    border-radius:40px ;
    background-color:#1D1465 ;
    padding:10px 30px;
    color:#fff ;
    text-decoration:none ;
  }

  @media screen and (max-width:768px) {
    .logo-image{
    width:90px ;
    height:40px ;
  }
    .header .right p{
      display:none ;
    }
    .header .right span{
      font-size:14px ;
    border-radius:40px ;
    background-color:#1D1465 ;
    padding: 10px 15px;
    color:#fff ;
  }
  }
`;
