import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Make the container cover the entire viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Needed for absolute positioning of the counter */

  .button {
    position: absolute;
    bottom: 10px; /* Adjust this value to control the distance from the bottom */
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 5%;
  }

  video {
    width: 100vw; /* Make the video cover the entire viewport width */
    height: 100vh; /* Make the video cover the entire viewport height */
    background: none;
  }

  .counter {
    position: absolute;
    top: 10px; /* Adjust this value to control the distance from the top */
    margin-top: 10px; /* Add additional margin for spacing */
  }
`;
