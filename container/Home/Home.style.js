import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const Homestyle = styled.div``;
export const Container = styled.div`
  display: flex;
  /* padding: 5%; */
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;
export const StepOnestyle = styled.div`
  background: url("/images/capture.png");
  width: 100%;
  height:70vh ;
  .text {
    display: flex;
    flex-direction: column;
    /* gap: 20999px; */
    padding:5% ;
  }
`;

export const StepTwostyle = styled.div`
  background: url("/images/several.png");
  height:70vh ;
  .text {
    display: flex;
    /* flex-direction: column; */
    padding: 5%;
  }
`;
export const StepThreestyle = styled.div`
  background: url("/images/qr.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  height:70vh ;
  width: 100%;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
export const StepFourstyle = styled.div`
  background: url("/images/album.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:70vh ;
  .text {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
