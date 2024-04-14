import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 3% 5%;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header .right {
    display: flex;
    align-items:center ;
    column-gap: 20px;
    font-size: 24px;
    font-weight: 500;
  }

  .header .right p {
    color:"#1D1465"
  }
  .header .right span{
    border-radius:40px ;
    background-color:#1D1465 ;
    padding:10px 30px;
    color:#fff ;
  }
`;
