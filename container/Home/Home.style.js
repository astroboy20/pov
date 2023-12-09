import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
  height:100vh ;
`;
export const StepOnestyle = styled.div`
  background: url("/images/logo.png") ;
  background-repeat: no-repeat;
  height:75vh;
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
  background: url("/images/wedding.png");
  background-repeat: no-repeat;
  height:75vh;
  background-size: cover;
  width: 100%;
  .text {
    display: flex;
    /* flex-direction: column; */
    padding: 5%;
  }
`;
export const StepThreestyle = styled.div`
  background: url("/images/scanQR.png");
  background-repeat: no-repeat;
  height:75vh;
  background-size: cover;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
export const StepFourstyle = styled.div`
  background: url("/images/album.png");
  background-repeat: no-repeat;
  height:75vh;
  background-size: cover;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
