import styled from "styled-components";
import { MdDelete } from "react-icons/md";


export const FeatureStyle = styled.div`
  background: #fff;
  color: black;
  position: fixed;
  align-items: center;
  bottom:0;
  left: 0;
  right:0 ;
  display: flex;
  justify-content: space-between;
  align-items:center ;
  padding: 3%;
  border: 0.8px solid #00000033;

  .event{
    position:absolute ;
    left:44% ;
    bottom:40px ;
  }


  @media screen and (min-width: 768px) and (max-width:1024px) {
   
    .event{
    left:47% ;
    bottom:70px ;
  }
  }
`;



