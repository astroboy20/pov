import styled from "styled-components";

export const FAQSContainer = styled.div`
  padding: 3% 6%;
  background: rgba(2, 13, 30, 1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  span {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0em;
    text-decoration: underline;
    color: #fff;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sub-box .header {
    color: rgba(2, 13, 30, 1);
    background: #f3faff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }
  .sub-box .content-show {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align:left ;
    padding-top:20px ;

    /* display:block ; */
  }

  @media screen and (max-width: 786px) {
    padding: 6%;

    span {
      font-size: 24px;
      font-weight: 700;
      text-decoration: underline;
      text-align: center;
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
