import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-size: 10px;
    height: 100dvh;
    overflow:hidden ;

    .swiper {
      width: 100%;
      height: 70vh;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
