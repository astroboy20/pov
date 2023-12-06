import styled from "styled-components";

export const OptionItem = styled.div`
  padding: 10px;
  margin-left:15px ;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "white" : "#1d1465")};
  color: ${(props) => (props.selected ? "#1d1465" : "white")};
  border: 2px solid #1d1465;
`;
export const GuestItem = styled.div`
  padding: 10px 15px;
  display:flex ;
  justify-content:space-between ;
  align-items:center ;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "white" : "#1d1465")};
  color: ${(props) => (props.selected ? "#1d1465" : "white")};
  border: 2px solid #1d1465;
`;

export const ItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .setting-type {
  }
`;
