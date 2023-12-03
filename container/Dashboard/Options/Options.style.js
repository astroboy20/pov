import styled from "styled-components";

export const OptionItem = styled.div`
  padding: 13px;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "#1d1465" : "white")};
  color: ${(props) => (props.selected ? "white" : "#1d1465")};
`;

export const ItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .setting-type {
  }
`;
