import styled from "styled-components";

export const CustomizeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 6% 4%;
  overflow: scroll;
  height:130dvh ;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    font-size: 24px;
    font-weight: 700;
    color: #1d1465;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .body p {
    font-size: 16px;
    font-weight: 500;
  }

  .event-list {
    display: flex;
    gap: 20px;
    overflow: scroll;
  }

  .event-list span {
    border: 1px solid #000;
    padding: 6px 12px;
    align-items: center;
    border-radius: 4px;
    display: block;
  }

  .images{
    display:grid ;
    grid-template-columns:repeat(2, 1fr) ;
    row-gap:10px;
    column-gap:10px;
  }
  .customize-page{
    width:100% ;
    height:100% ;
    display: flex;
    justify-content:center ;
    font-size:16px ;
    font-weight:500 ;
    text-decoration:underline ;
    align-items:center ;
    background-color:#f9eac2 ;
    padding:5%;
    text-align:center;
  }
  .show-more .image {
    display: flex;
    gap: 10px;
  }

  .preview-body {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .preview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .text h1 {
    font-size: 14px;
    font-weight: 700;
  }

  .text p {
    font-size: 12px;
    font-weight: 400;
  }

  .image-preview {
    border-radius: 8px;
  }

  .show-more h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .edit {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow: scroll;
  }

  .item {
    display: grid;
    grid-template-columns:repeat(3, 1fr) ;
    /* align-items: center; */
    gap: 5px;
    margin-bottom: 100px;
    margin-top:10px ;
  }
  .sub-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .sub-items p {
    font-size: 12px;
    font-weight: 400;
    word-break: break-word;
  }

  .dragdiv {
    cursor: grabbing;
    z-index: 1000;
  }

  .text {
    font-size: medium;
    font-weight: 600;
    word-break: break-word;
    font-size: 2000px;
    color: #fff;
  }

  .final {
    display: flex;
    gap: 20px;
    align-items: center;
    color: black;
    background: #f2f3f4;
    box-shadow: 2px 2px 4px 0px #0000001f;
    padding:3%;
  }

  .final-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .final-text h1 {
    font-size: 14px;
    font-weight: 800;
  }

  .final-text p {
    font-size: 12px;
    font-weight: 400;
  }
  .final-text span {
    font-size: 14px;
    font-weight: 800;
    color: #1d1465;
  }
`;
