import styled from "styled-components";
export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: "#2F3036";
  /* height: fit-content; */
  .header {
    height: auto;
    text-align: center;
    align-items: center;
    background-color: #c0ddfa;
    height: 480px;
    padding: 3%;
  }
  .header-step2 {
    height: auto;
    text-align: center;
    align-items: center;
    background: url("/images/event-BG.svg");
    height: 400px;
    padding: 3%;
  }

  .header-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 3%;
  }
  .header-head h1,
  .header-text h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .header-text {
    margin: 40% auto;
  }
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-input {
    /* background-color: rgba(176, 234, 246, 0.65); */
  }
.input{
  width:100% ;
  border:1px solid black ;
  border-radius:4px !important;
  padding:12px 10px !important ;
}
  .body {
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .body-step2 {
    padding: 5%;
    margin-top: 5%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 500px;
  }
  .body-step2 .text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 20px;
    font-weight: 400px;
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
    border: 1.5px solid #878e9c;
    width: 100%;
  }
  .icon-style {
    display: flex;
    height: 100%;
    margin: 100px auto;
    align-items: center;
    justify-content: center;
  }
  progress {
    accent-color: #1d1465;
    width: 100%;
    height: 20px;
  }
  .change-image {
    border: none;
    background: #1d1465;
    padding: 10px;
    color: #fff;
    border: none;
    margin: 2% 0;
    border-radius: 10px;
  }
`;
