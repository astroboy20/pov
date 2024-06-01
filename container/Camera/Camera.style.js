import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensure Container is the lowest layer */
`;

export const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backdropUrl});
  background-size: cover;
  background-position: center;
  z-index: 2; /* Ensure BackdropOverlay is above the Container and Video */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: 100%;
  z-index: 3; /* Ensure Buttons are above the BackdropOverlay */
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video fills the container */
  z-index: 1; /* Ensure Video is above the Container but below the BackdropOverlay */
`;

export const Span = styled.span`
  color: #fff;
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3; /* Ensure Span is above the BackdropOverlay */
`;
