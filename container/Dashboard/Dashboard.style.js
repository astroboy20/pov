import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center ;
  .new-event {
    background: #f5fbff ;
    color: #1d1465;
    display:flex ;
    padding:2% ;
    border-radius: 15px;
    gap:10px;
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
  margin: 20% auto;
`;
export const FeatureStyle = styled.div`
  background:  #f5fbff;
  color:#1d1465 ;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  width: 100%;
  /* margin: 0 10%; */
`;

export const OptionItem = styled.div`
   padding: 13px;
  cursor: pointer;
  border-radius:15px ;
  background-color: ${(props) => (props.selected ? '#1d1465' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#1d1465')};
`;

export const SettingStyle = styled.div`
  display:flex ;
  flex-direction:column ;
  gap:10px;
  .setting-type{
  }
`;

