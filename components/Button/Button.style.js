import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  border-radius: 13px;
  padding: 15px;
  width: 100%;
`;
export const DefaultButton = styled(ButtonStyle)`
  background: #1d1465;
  color: #fff;
  border: none;
  
`;
export const TransparentButton = styled(ButtonStyle)`
  background: none;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid white;
`;

export const WhiteButton = styled(ButtonStyle)`
  background: white;
  color:black ;
  font-size: 14px;
  font-weight: 400;
  border:none ;
`;
