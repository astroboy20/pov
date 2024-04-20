import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 3% 5%;
  background: #1d1465;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* align-items:center ; */

  footer {
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
  .one,
  .two,
  .three,
  .four {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .icon {
    display: flex;
    gap: 10px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }

  .hr {
    opacity: 0.4;
    width: 100%;
  }

  .icon-mobile{
    display:none ;
  }

  @media screen and (max-width: 768px) {
    footer {
      flex-direction: column;
      justify-content: center;
      gap: 25px;
    }

    .one,
    .two,
    .three,
    .four {
      gap: 10px;
    }
    .icon {
      display: none;
    }

    .five {
      margin: 25px 0;
    }
    .icon-mobile {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`;
