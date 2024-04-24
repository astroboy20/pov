import styled from "styled-components";
export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: "#2F3036";

  .header {
    height: auto;
    text-align:center ;
    align-items:center ;
    background-color: #C0DDFA;
    height:60vh ;
    padding: 3%;
  }
  .header-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top:3% ;
  }
  .header-head h1{
    font-size:24px ;
    font-weight:700 ;
  }
  .image{
    display: flex;
    flex-direction:column ;
    align-items: center;
  }
  .image-input {
    /* background-color: rgba(176, 234, 246, 0.65); */
  }
  
  .body {
    padding: 5%;
    margin-top:5% ;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height:95dvh ;
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
    margin:100px auto;
    align-items: center;
    justify-content: center;
  }
  progress {
    accent-color: #1d1465;
    width: 100%;
    height: 20px;
  }
  .change-image{
    border:none ;
    background: #1d1465;
    padding:10px ;
  color: #fff;
  border: none;
  margin:2% 0 ;
  border-radius:10px ;
  }

`;
