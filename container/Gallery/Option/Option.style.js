import styled from "styled-components"
export const OptionItem = styled.div`
  padding: 13px;
  cursor: pointer;
  border-radius: 15px;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  color: ${(props) => (props.selected ? "black" : "#1d1465")};
`;