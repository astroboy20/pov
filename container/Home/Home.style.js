import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;
export const StepOnestyle = styled.div`
  background: url("https://res.cloudinary.com/dm42ixhsz/image/upload/v1702011790/home_eikfqn.png") ;
  background-repeat: no-repeat;
  height:70vh;
  background-size: cover;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    /* gap: 20999px; */
    padding: 5%;
  }
`;

export const StepTwostyle = styled.div`
  background: url("/images/event.png");
  background-repeat: no-repeat;
  /* height:80vh; */
  background-size: cover;
  height: 70vh;
  .text {
    display: flex;
    /* flex-direction: column; */
    padding: 5%;
  }
`;
export const StepThreestyle = styled.div`
  background: url("https://res.cloudinary.com/dm42ixhsz/image/upload/v1702011827/real-qr_nlcisi.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
export const StepFourstyle = styled.div`
  background: url("https://res.cloudinary.com/dm42ixhsz/image/upload/v1702011822/gallery_nfhr7h.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
