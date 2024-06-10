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

  .left,
  .right {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .images-with-names {
    margin-top: 20px;
  }

  .invitee-section {
    margin-bottom: 20px;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 1);
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
