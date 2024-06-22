import styled from "styled-components";

export const WorkStyle = styled.div`
  padding: 0 6% 10% 6%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .header{
    text-align:center ;
  }
  .header h1 {
    font-size: 36px;
    font-weight: 700;
  }
  .header p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1465;
  }
  .big-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 50px;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .box span {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .box .span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box h2 {
    font-size: 18px;
    font-weight: 800;
  }

  .box p {
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 0 5%;
    margin:6% auto ;
    .big-box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 50px;
      column-gap: 10px;
      align-items: center;
    }
    .header {
      text-align: center;
    }
    .right .button {
      margin: auto;
    }
    .header h1 {
      font-size: 24px;
    }
    .header p {
      font-size: 14px;
    }
    .box h2 {
      font-size: 20px;
    }
    .box p {
      font-size: 18px;
    }
    .box span div {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    /* padding: 10% 5%; */
    .big-box {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      row-gap: 50px;
      column-gap: 30px;
      align-items: center;
    }
    .header {
      text-align: center;
    }
    .right .button {
      margin: auto;
    }
    .header h1 {
      font-size: 24px;
    }
    .header p {
      font-size: 14px;
    }
    .box h2 {
      font-size: 20px;
    }
    .box p {
      font-size: 18px;
    }
    .box span div {
      display: none;
    }
  }
`;
