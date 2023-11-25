import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    padding-top:15% ;
    display: flex;
    flex-direction: column;
    gap:30px;
    height: 100dvh;

    .swiper {
      height: 70vh;
      
    }


    .swiper-slide img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70%;
      object-fit: cover;
    }
    .mySwiper{
      display:flex ;
      align-items: center;
      justify-content:center ;
      width:100% ;
      text-align:center ;
    }
  }
`;
