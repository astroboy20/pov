import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* Make sure the backdrop is above the camera preview */
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
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video fills the container */
  z-index: 1;
`;

export const Span = styled.span`
  color: #fff;
  font-size: 18px;
`;
