import styled from "styled-components";

const FormData = styled.div`
  display: none;
  /* padding: 5%; */
  @media screen and (max-width: 800px) {
    display: flex;

    width: 100%;
    flex-direction: column;
    height:100vh ;
    .sign-in {
      margin: 5% 0;
      text-align: center;
      font-weight:700 ;
    }
    span{
      font-weight:800 ;
    }
  }
`;
export const RegisterContainer = styled(FormData)`
  padding: 5%;
  height: 100vh;
  form{
  gap: 20px;
  display:flex ;
  flex-direction:column ;
  color: #1D1465;
 }
`;

export const FormHeader = styled.header`
  gap: 10px;
  padding:20px 0;
  display:flex ;
  flex-direction:column ;
  color:#1D1465 ;
  h1{
    font-size:40px ;
    font-weight:700 ;
  }
  p{
    font-size:18px ;
    font-weight:400 ;
  }
`;
export const FormContainer = styled(FormData)``;
export const VerifyContainer = styled(FormData)`
  gap: 30px;
  .verify-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* font-size:200px ; */
  }
`;
