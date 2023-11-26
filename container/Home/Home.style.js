import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    padding:2% ;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;

    .span {
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: 100%;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
    }
    .mySwiper {
      display: flex;
      text-align: center;
      width: 100%;
      height: 80vh;
    }
  }
`;
