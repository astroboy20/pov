import styled from "styled-components";

export const Linkstyle = {
  textDecoration: "none",
  fontWeight: "600",
  color:"black"
};
export const LoginContainer = styled.div`
 color:black ;
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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
