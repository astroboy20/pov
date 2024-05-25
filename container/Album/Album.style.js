import styled from "styled-components";

export const AlbumContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6%;
    background-image: url(${props => props.background});
    color:#fff ;
  }

  .input {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .all-image {
    /* height: 100vh; */
    /* overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; */
    margin-bottom:20px ;
    
  }

  .all-image::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .image {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 10px; */
  }

  .image-wrapper {
    /* background-color: #f0f0f0; */
    /* border-radius: 5px; */
    overflow: hidden; /* Ensure the image fits within the wrapper */
  }

  .selected-image {
    border-radius: 10px;
  }

  .invitee-section {
    /* margin-bottom: 20px; */
  }

  .images-with-names {
    /* margin-top: 20px; */
  }

  .toggle {
    display: flex;
    justify-content: space-between;
    align-items:center ;
    position: fixed;
    bottom: 50px;
    background: #fff;
    width: 90%;
    margin: 0 5%;
    padding: 3% 3%;
    border-radius: 80px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }

  .toggle h1 {
    text-align: center;
    /* padding: 10px px; */
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .toggle h1.active {
    background-color: #1D1465;
    color: #fff;
    font-size:14px ;
    font-weight:500 ;
    padding:5px 10px ;
  }
`;
