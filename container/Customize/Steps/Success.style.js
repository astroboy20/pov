import styled from "styled-components";

export const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 5%;
  text-align: center;
  height: 100dvh;
  box-shadow: 2px 2px 4px 0px #0000001f;
  background-color: #f2f3f4;
  .qr-code {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;
