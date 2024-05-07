import styled from "styled-components";

export const EventStyle = styled.div`
  padding: 6% 5%;
  display: flex;
  flex-direction: column;
  position:absolute ;
  width:100% ;
  gap: 40px;
  height:100% ;
  background-size:cover ;
  background-position:center  ;
  background-repeat:no-repeat ;
 filter:blur(8px) ;
 -webkit-filter:border-top-left-radius(8px);
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
    width:100% ;
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
