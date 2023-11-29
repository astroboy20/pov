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
    background: #f5fbff ;
    color: #1d1465;
    border-radius: 15px;
    padding: 0%  2%;
    border: 50%;
    /* gap:10px; */
    align-items:center ;
  }
`;
export const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5fbff;
  color:#1d1465 ;
  border-radius: 15px;
  padding: 6%;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-top: 5%;
`;
export const FeatureStyle = styled.div`
  background:  #f5fbff;
  color:blue ;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  width: 100%;
  /* margin: 0 10%; */
`;

export const OptionItem = styled.div``;
