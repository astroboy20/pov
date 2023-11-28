import styled from "styled-components";

const FormData = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    .sign-in {
      margin: 5% 0;
      text-align: center;
    }
    span{
      font-weight:800 ;
    }
  }
`;
export const RegisterContainer = styled(FormData)`
  /* padding: 5%; */
  height: 100vh;
`;

export const FormHeader = styled(FormData)`
  gap: 10px;
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
