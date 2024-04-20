import styled from "styled-components";

export const MemoriesContainer = styled.div`
  padding: 3% 5%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 100px;
  .right {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 25px;
    /* width: ; */
  }
  .right h1 {
    font-size: 36px;
    font-weight: 700;
  }
  .right p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1465;
  }

  .right .button {
    display: flex;
    column-gap: 20px;
    margin:auto ;
  }
  .right .button .a a {
    border-radius: 40px;
    background-color: #1d1465;
    padding: 10px 30px;
    color: #fff;
    text-decoration: none !important;
  }
  .right .button .a a:hover {
    background-color: transparent;
    border-left: 1px solid #1d1465;
    border-right: 1px solid #1d1465;
    color: #1d1465;
    transition: 0.5s ease-in-out;
  }
  .right .button .b a {
    border-radius: 40px;
    background-color: transparent;
    border-left: 1px solid #1d1465;
    border-right: 1px solid #1d1465;
    padding: 10px 30px;
    color: #1d1465;
    text-decoration: none !important;
  }
  .right .button .b a:hover {
    background-color: #1d1465;
    color: #fff;
    transition: 0.5s ease-in-out;
  }

  .phone1 {
    width: 620px;
    height: 640px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 10% 5%;
    .phone1 {
      width: 300px;
      height: 300px;
    }
    .right {
      text-align: center;
    }
    .right h1 {
      font-size: 24px;
    }
    .right p {
      font-size: 14px;
    }
  }
`;
