import styled from "styled-components";

export const Linkstyle = {
  textDecoration: "none",
  color: "white",
};
export const LoginContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
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
      color: white;
    }
    .link {
      text-align: right;
      margin: 5% 0;
      text-decoration: none;
      color: white;
    }
    span{
      font-weight:800 ;
    }
  }

  /* .text-style {
    color: rgba(0, 0, 0, 0.5);
  } */

  /* .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: left;
    left: 0;
    color: rgba(30, 30, 30, 0.5);
    font-size: 10px;
    padding: 3%;
    color: white;
  } */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
