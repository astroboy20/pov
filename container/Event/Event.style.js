import styled from "styled-components";

export const EventStyle = styled.div`
  padding: 6% 5%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1 {
    font-size: 30px;
    font-weight: 700;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
.text p {
    font-weight:600 ;
}
  .text p a{
    color:#1D1465 ;
    text-decoration:underline ;
    font-weight:700 ;
  }
`;
