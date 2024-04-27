import styled from "styled-components";

export const EventStyle = styled.div`
  padding: 6% 5%;
  display: flex;
  flex-direction: column;
  position:absolute ;
  gap: 40px;
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
    background: url("/images/event-BG.svg");
    height: 400px;
    padding: 3%;
    margin-bottom:20% ;
  }
.body p {
  font-size:24px ;
    font-weight:700 ;
}
  .text p a{
    color:#1D1465 ;
    text-decoration:underline ;
    font-weight:700 ;
  }
`;
