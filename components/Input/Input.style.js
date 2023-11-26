import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6% 0;
  font-size: 13px;
  gap: 5px;
`;
export const InputStyle = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1.5px solid white;
  background: transparent;
  color: white;
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
  border: 1px solid rgba(30, 30, 30, 0.35);
  border-radius: 5px;
  border: 1px solid white;
  background: none;
  span {
    background: white;
    padding: 8px;
    border-radius: 0 5px 5px 0;
  }
`;
export const InputPasswordStyle = styled.input`
  color: white;
  width: calc(100% - 40px); /* Adjust input width for icon */
  border: transparent;
  padding: 12px;
  background-color: transparent; /* Apply a transparent background */
`;
