import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const EventSetupStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height:800px;
  width:100% ;
`;
export const HeaderStyle = styled.div`
  background: url("/images/create-event.webp");
  background-size: cover;
  background-position:center center ;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  
`;
export const BodyStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #1d1465;
  border-radius: 15px;
  text-align: left;
  padding: 5%;
  gap:25px;
  form{
     display: flex;
  flex-direction: column;
  gap:20px;
  }
  @media screen and (min-width:768px) {
   select{
    height:60px ;
    font-size:18px ;
   }
    .image{
      width:1000px ;
      height:500px ;
      text-align:center ;
    }
  }
`;
export const FeatureStyle = styled.div`
  background: #fff;
  color: black;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  width: 100%;
  /* margin: 0 10%; */
`;



export const SettingStyle = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .setting-type {
  }
`;
