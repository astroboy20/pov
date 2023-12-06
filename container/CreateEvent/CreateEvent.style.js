import styled from "styled-components";
export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  color: "#2F3036";

  .header {
    height: 50vh;
  }
  .header-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 3%;
    text-align: center;
  }
  .image-input {
    background-color: rgba(176, 234, 246, 0.65);
  }
  .body {
    padding: 5%;
    height: 80vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 5px;
    gap: 20px;
  }
  .item {
    display: flex;
    gap: 10px;
  }
  .sub-item {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
  }
  .input {
    border-radius: 5px;
    padding: 10px;
    border-radius: 12px;
    /* padding: 5px 16px 0 16px; */
    border: 1.5px solid #878e9c;
    width: 100%;
  }
  .icon-style {
    display: flex;
    height: 30vh;
    align-items: center;
    justify-content: center;
  }
  progress {
    accent-color: #1d1465;
    width: 100%;
    height: 20px;
  }

`;
