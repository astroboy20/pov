import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .new-event {
    display:flex ;
    background: grey;
    border-radius: 10px;
    padding: 2% 3%;
    gap:10px;
    align-items:center ;
  }
`;
export const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: grey;
  border-radius: 10px;
  padding: 6%;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-top: 5%;
`;
export const FeatureStyle = styled.div`
  background: grey;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 6%;
  width: 80%;
  margin: 0 10%;
  border-radius: 5px 5px 0 0;
`;

export const OptionItem = styled.div``;
