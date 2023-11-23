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
  background: none;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(30, 30, 30, 0.35);
  border-radius: 5px;
  border: 1px solid white;
  /* color: white; */
  background: none;
  span {
    background: white;
    padding: 10px;
    border-radius: 0 5px 5px 0;
  }
`;
export const InputPasswordStyle = styled.input`
  color: white;
  width: 100%;
  border: none;
  /* background-color: none; */
  padding-left: 10px;
`;
