import styled from "styled-components";

export const EventStyle = styled.div`
  /* padding: 6% 5%; */
  display: flex;
  flex-direction: column;


  .blur {
    height: 100dvh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background: url("/images/event-bg.svg"); */
    background: ${props => props.background ? `url(${props.background})` : 'none'};
    backdrop-filter: blur(8px);
    -webkit-filter: blur(3px);
  }

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
    height: 400px;
    padding: 3%;
    /* margin-bottom: 20%; */
    width: 100%;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    gap:20px;
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
    width:50% ;
    margin:0 auto ;
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
