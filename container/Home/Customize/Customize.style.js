import styled from "styled-components";

export const CustomizeStyle = styled.div`
  padding: 3% 5%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .left {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 25px;
    width: 100%;
  }
  .left h1 {
    font-size: 36px;
    font-weight: 700;
  }
  .left p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1465;
  }

  .left span a{
    border-radius: 40px;
    background-color: #1d1465;
    padding: 10px 30px;
    color: #fff;
    width: fit-content;
    cursor: pointer;
    text-decoration:none !important;
  }

  .left span a:hover {
    background-color: transparent;
    border-left: 1px solid #1d1465;
    border-right: 1px solid #1d1465;
    color: #1d1465;
    transition: 0.5s ease-in-out;
  }

  .text .button .b {
    border-radius: 40px;
    background-color: transparent;
    border: 1px solid #1d1465;
    padding: 10px 30px;
    color: #1d1465;
  }

  .phone2 {
    width: 420px;
    height: 640px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding:10% 5% ;
    .left span{
      margin:auto ;
    }
    .phone2 {
      width: 200px;
      height: 300px;
    }
    .left {
      text-align: center;
    }
    .left h1 {
      font-size: 24px;
    }
    .left p {
      font-size: 14px;
    }
   
  }

  @media screen and (min-width: 768px) and (max-width:1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    
    .left span{
      margin:auto ;
    }
    .phone2 {
      width: 300px;
      height: 300px;
    }
    .left {
      text-align: center;
    }
    .left h1 {
      font-size: 28px;
    }
    .left p {
      font-size: 18px;
    }
   
  }
`;
