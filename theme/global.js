import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}



  body { 
    transition: all 1s linear;
    background-image: linear-gradient(180deg, #1d1465,black) ;
    background-repeat: no-repeat;
    padding: 5%;
    color: white;
    height: 100dvh;
  }


`;
