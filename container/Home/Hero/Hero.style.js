import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 3% 5%;
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
  .text h1 {
    font-size: 36px;
    font-weight: 700;
  }
  .text h1 span {
    text-decoration: underline;
    color: #1d1465;
  }
  .text p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1465;
  }
  .text .button {
    display: flex;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .text .button .a a{
    border-radius: 40px;
    background-color: #1d1465;
    padding: 10px 30px;
    color: #fff;
    text-decoration:none !important;
  }
  .text .button .a a:hover {
    background-color: transparent;
    border-left: 1px solid #1d1465;
    border-right: 1px solid #1d1465;
    color: #1d1465;
    transition: 0.5s ease-in-out;
  }
  .text .button .b a{
    border-radius: 40px;
    background-color: transparent;
    border-left: 1px solid #1d1465;
    border-right: 1px solid #1d1465;
    padding: 10px 30px;
    color: #1d1465;
    text-decoration:none !important;
  }
  .text .button .b a:hover {
    background-color: #1d1465;
    color: #fff;
    transition: 0.5s ease-in-out;
  }

  .hr {
    margin-top: 8%;
    opacity: 0.5;
  }

  @media screen and (max-width: 760px) {
   margin-top:12% ;
   .hr {
    margin-top: 20%;
  }
    .text h1 {
      font-size: 28px;
      line-height: 40px;
    }
  }

  @media screen and (min-width: 767px) {
   margin-top:6% ;
   .hr {
    margin-top: 20%;
  }
    .text h1 {
      font-size: 28px;
      line-height: 40px;
    }
  }


`;
