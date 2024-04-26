import styled from "styled-components";

export const CustomizeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 6% 4%;
  overflow:scroll ;
  height:170vh ;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    font-size: 30px;
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

  .images,
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
    display: flex;
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
    /* position: relative; */
    display: flex;
    flex-direction: column;
    width: 100%;

  }

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }
  .sub-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:20px ;
  }
  .sub-items p {
    font-size: 12px;
    font-weight: 400;
    word-break: break-word;
  }

  .dragdiv {
  cursor: grabbing;
}

  .text {
    font-size: medium;
    font-weight: 600;
    word-break: break-word;
    font-size:20px ;
  }
`;
