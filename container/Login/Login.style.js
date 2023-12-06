import styled from "styled-components";

export const Linkstyle = {
  textDecoration: "none",
  fontWeight: "600",
  color:"black"
};
export const LoginContainer = styled.div`
 color:black ;
 padding:5% ;
  .login-with-google {
    margin-top: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .button-style {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13.3px;
    font-weight: 600;
  }
  .link {
    text-align: right;
    margin: 5% 0;
    text-decoration: none;
  }
  span {
    font-weight: 600;
    color:#1D1465;
  }
  .or{
    margin:5% ;
    text-align:center ;
    position:relative ;
  }
  .or::before{
    content:"" ;
    display:block ;
    width:100px ;
    height:1px ;
    background: #D4D6DD;
    left:0 ;
    top:50%;
    position:absolute ;
  }
  .or::after{
    content:"" ;
    display:block ;
    width:100px ;
    height:1px ;
    background: #D4D6DD;
    right:0 ;
    top:50%;
    position:absolute ;
  }
`;

export const FormHeader = styled.header`
  gap: 30px;
  padding:30px 0;
  display:flex ;
  flex-direction:column ;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
