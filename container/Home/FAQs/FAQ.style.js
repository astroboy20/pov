import styled from "styled-components";

export const FAQSContainer = styled.div`
  margin: 3% 6%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 3px solid #1d1465;
  border-radius: 28px;
  span {
    font-size: 24px;
    font-weight: 700;
    /* line-height: 48px; */
    text-align: left;
    color: #000;
  }
  .hr {
    border: 1px solid #1d1465;
    margin: 10px auto;
    width: 100%;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .box {
    display: flex;
    justify-content: space-between;
  }

  .question-section,
  .answer-section {
    width: 49%;
    border-radius: 16px;
    padding: 2%;
  }
  .question-section {
    background: #f2f3f4;
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
  }
  .answer-section {
    background: #1d14654d;
  }
  .answer-section span {
    font-size: 24px;
    font-weight: 700;
  }

  .sub-box .header {
    color: #000;
    background-color: #fff;
    padding: 3% 2%;
    border-radius: 16px;
    font-size: 18px !important ;

    /* padding: 20px 20px;
    width:50%; */
  }

  .sub-box .content-show {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    padding-top: 20px;
    transition: all 1s linear;
    /* display:block ; */
  }

  .answer-section-mobile {
    display: none;
  }
  @media screen and (max-width: 786px) {
    padding: 5%;
    border-radius:4px ;
    margin:15% 5% ;
    .hr {
      border: 1px solid #1d1465;
      margin: 1px auto;
      width: 100%;
    }
    .question-section {
      width: 100%;
      background-color: transparent;
    }
    .answer-section {
      display: none;
    }
    .answer-section-mobile {
      display: block;
    }

    .sub-box .header {
      border-radius: 4px;
      background-color: #f2f3f4;
      padding: 5%;
    }
    .answer-section-mobile .content-show {
      font-size: 14px;
      font-weight:500 ;
      background-color: #1D14654D;
      border-radius: 4px;
      padding: 5%;
      margin-top:5%  ;
      transition: 0.3s ease-in-out;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      text-align: left;
    }

    .sub-box .content-show {
      font-size: 14px;

      /* display:block ; */
    }
  }
`;
