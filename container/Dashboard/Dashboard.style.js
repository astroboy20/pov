import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const HeaderStyle = styled.div`
  background: url("/images/dashboard.png");
  border-radius: 0px 0px 10px 10px;
  height: 50dvh;
`;
export const BodyStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #1d1465;
  border-radius: 15px;
  text-align: left;

  padding: 5%;
`;
export const FeatureStyle = styled.div`
  background: #f5fbff;
  color: #1d1465;
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
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "#1d1465" : "white")};
  color: ${(props) => (props.selected ? "white" : "#1d1465")};
`;

export const SettingStyle = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .setting-type {
  }
`;
