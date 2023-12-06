import styled,{css} from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  padding: 13px 24px;
  width: 100%;
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
