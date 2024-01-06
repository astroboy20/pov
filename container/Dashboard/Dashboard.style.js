import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const HeaderStyle = styled.div`
  background: url("/images/dashboard.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0px 0px 10px 10px;
  height: 50dvh;
  width: 100%;
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
  background: #fff;
  color: black;
  position: fixed;
  align-items: center;
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
export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    border-bottom: 1px solid black;
  }
  .join {
    display: flex;
    padding: 16px 20px 16px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: #ece6f0;
    border-radius: 100px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  }
  .hr {
    width: 100%;
    color: black;
  }
  .body {
    /* height:200vh ; */
    margin-bottom: 20%;
    overflow: scroll;
  }
  .body-text {
    display:flex ;
    justify-content: space-between;
    color: #000;
    padding: 7% 5%;
    font-weight: 500;
    font-size: 24px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 5% 3%;
    background-color: #ece6f0;
    border-bottom: 1px solid black;
  }
  .sub-info {
    display: flex;
    gap: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
  }
  .text .a {
    font-size: 14px;
    color: #1d1b20;
    font-weight: 500;
  }
  .text .b {
    font-size: 14px;
    color: #49454f;
  }
  .icons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .centered-style {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .qr-code {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;
export const QRcode = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "colunm",
};
export const Delete = styled(MdDelete)`
  width: 24px;
  height: 24px;
  color: black;
`;
