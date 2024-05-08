import styled from "styled-components";
// import { MdDelete } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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
    color: #1d1465;
  }

  .body {
    /* height:200vh ; */
    margin-bottom: 20%;
    overflow: scroll;
    padding: 3% 2%;
    border: 8px;
  }
  .body-text {
    display: flex;
    justify-content: space-between;
    color: #000;
    padding: 4% 5%;
    font-weight: 500;
    font-size: 24px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 5% 3%;
    background: #f2f3f499;
    box-shadow: 2px 2px 4px 0px #0000001a;
    margin-bottom:20px ;
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
    font-size: 16px;
    color: #1d1b20;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .text .b,
  .c {
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;
  }
  .icons {
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 50px;
    align-items: center;
  }
  .icons .edit {
    background-color: #1d1465;
    border-radius: 2px;
    padding: 4px 14px;
    font-size: 8px;
    color: #fff;
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

  /* In your CSS file */
  .qr-code-actions {
    display: flex;
    align-items: center; /* Align items vertically in the center */
  }

  .qr-code-input {
    flex: 1; /* Take remaining space */
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  }

  .qr-code-button {
    padding: 8px 16px;
    font-size: 14px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .href{
    color:#1D1465 ;
    font-weight:700 ;
    text-decoration:underline ;
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
