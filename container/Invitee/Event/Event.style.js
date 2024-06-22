import styled from "styled-components";

export const EventStyle = styled.div`
  /* padding: 6% 5%; */
  overflow: hidden;
  background: ${(props) =>
    props.background ? `url(${props.background})` : "none"};
  /* background-color: black !important; */
  height: 100dvh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #f9f9f9; */
  /* background-blend-mode: screen; */
  position: absolute;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .body {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 3%;
    width: 100%;
    color: white;
    position: relative;
    top: 65%;
    bottom: 0;
    gap: 20px;
  }

  .text {
    font-size: 28px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .hr {
    border: 1px solid #fff;
    width: 50%;
    margin: 0 auto;
  }
  .body p {
    font-size: 24px;
    font-weight: 700;
  }
  .text p a {
    color: #1d1465;
    text-decoration: underline;
    font-weight: 700;
  }
`;
