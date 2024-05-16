import styled from "styled-components";

export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: "#2F3036";
  
  .header {
    height: auto;
    text-align: center;
    align-items: center;
    background-color: #c0ddfa;
    height: fit-content;
    padding: 3%;
  }
  .header-step2 {
    height: auto;
    text-align: center;
    align-items: center;
    height: fit-content;
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
    /* margin: 40% auto; */
    width:100% ;
    height:100% ;
    padding: 2%;
  }
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-input {
    /* background-color: rgba(176, 234, 246, 0.65); */
  }
  .input {
    width: 100%;
    border: 1px solid black;
    height:50px  !important;
    border-radius: 4px !important;
    padding: 12px 10px !important ;
  }
  .body {
    padding: 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height:760px ;
  }
  .body-step2 {
    padding: 5%;
    /* margin-top: 5%; */
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
    flex-direction:column ;
    gap:10px;
    height: 100%;
    margin: 100px auto;
    align-items: center;
    justify-content: center;
  }

  .icon-style .text {
    font-size:16px ;
    text-decoration:underline ;
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

  @media screen and (min-width:768px) and (max-width:1024px) {
    height:1400px ;
    
    .input {
    width: 100%;
    border: 1px solid black;
    height:60px  !important;
    border-radius: 4px !important;
    padding: 12px 10px !important ;
  }
   select, input{
    height:60px ;
   }
  }
`;
