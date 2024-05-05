import styled,{css} from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  padding: 14px 24px;
  width: 100%;
  @media screen and (min-width:768px) and (max-width:1024px) {
  padding:20px 16px ;
  font-size:18px ;
  }
`;
export const DefaultButton = styled(ButtonStyle)`
  background: #1d1465;
  color: #fff;
  border: none;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
  
`;
export const TransparentButton = styled(ButtonStyle)`
  background: none;
  font-size: 14px;
  font-weight: 400;
  color:#0F1115 ;
  border: 1px solid #C5C6CC ;
`;

export const WhiteButton = styled(ButtonStyle)`
  background: white;
  color:black ;
  font-size: 14px;
  font-weight: 400;
  border:none ;
`;
