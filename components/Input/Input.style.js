import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6% 0;
  font-size: 13px;
  gap: 5px;
`;
export const InputStyle = styled.input`
  border-radius: 12px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  width: 100%;
  @media screen and (min-width:768px) and (max-width:1024px) {
  padding:20px 16px ;
  font-size:18px ;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  padding: 5px 16px 0 16px;
  border: 1.5px solid #878e9c;
  
`;




