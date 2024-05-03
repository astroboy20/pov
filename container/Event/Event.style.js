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
    display:flex ;
    flex-direction:column ;
    gap:20px;
  }
.body p {
  font-size:18px ;
    font-weight:600 ;
}
  .body p a{
    color:#1D1465 ;
    text-decoration:underline ;
    font-weight:700 ;
  }
  @media screen and (min-width:768px) {
    gap:40px;
    .image{
      width:1000px ;
      height:600px ;
      text-align:center ;
    }
  }
`;
