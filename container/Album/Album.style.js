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

  .image-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .image-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }

  .indicator.active {
    background: rgba(255, 255, 255, 1);
  }

  .selected-image {
    position: relative;
    height: 1920px;
    width: 1080px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .invitee-section {
    margin-bottom: 20px;
  }

  .images-with-names {
    margin-top: 20px;
  }
`;
