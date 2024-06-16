import styled from "styled-components";

export const AlbumContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6%;
    font-size: 24px;
    font-weight: 700;
    background-size: cover;
    background-position: center;
  }

  .input {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .images-with-names {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .swiper-container {
    width: 100%;
    height: auto;
    border:1px solid red ;
  }
`;
