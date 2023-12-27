import styled from "styled-components";

export const AlbumContainer = styled.div`
  background: #72757a;
  padding: 5%;
  height: 100vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .header {
    display: flex;
    align-items: center;
    gap: 20px;
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
    height: 70vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .all-image::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .custom-select {
    padding: 10px 30px 10px 10px; /* Adjust padding for arrow space */
    width: 150px; /* Adjust width as needed */
    background-color: #221e26;
    color: #fff;
    border-radius: 100px;
    appearance: none;
    position: relative; /* Set position for pseudo-element */
  }

 
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .image-image {
    border-radius: 10px;
  }
  .selected-image {
    border-radius: 10px;
  }
`;
