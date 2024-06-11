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
    margin-bottom: 10px; /* Reduced space between sections */
  }

  .swiper-pagination-bullet {
    background:red;
    width: 8px;  // Smaller size for Instagram-like indicators
    height: 8px;
    margin: 0 4px; // Reduce space between indicators
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
    position: relative;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 10px;  // Position indicators at the bottom
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
