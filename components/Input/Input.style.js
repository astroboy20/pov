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
  border: 1.5px solid #878E9C;
  background: transparent;
  &:focus{
    background-color:transparent ;
  }
  &:active{
    background-color: transparent;
  }
  &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active {
  background-color: transparent !important;
  -webkit-box-shadow: 0 0 0 0px rgba(30, 300, 30, 0) inset;
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  border: 1.5px solid #878E9C;
  background: transparent;
  
  .error{
    color:red ;
  }
`;
export const InputPasswordStyle = styled.input`

  color: white;
  width: calc(100% - 40px); 
  border: transparent;
  padding: 12px;
  background-color: transparent; 
  color:black;
`;

export const ConfirmPasswordStyle = styled.input`
  color: white;
  width: calc(100% - 40px);
  border: transparent;
  background-color: transparent; 
  padding:12px ;
  color:black;
`;
