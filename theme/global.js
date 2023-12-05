import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}

body{
  display:none ;
}
@media (min-width: 768px) and (max-width: 1024px) {
  body { 
    display:block ;
    transition: all 1s linear;
    background-repeat: no-repeat;
    padding: 5%;
    
  }
}
@media screen and (max-width:769px) {
  body { 
    display:block ;
    width:100% ;
    transition: all 1s linear;
    overflow-y:auto ;
    padding: 5%;
    height:100dvh ;
  }
}
  


`;
