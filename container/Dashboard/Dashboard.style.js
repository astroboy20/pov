import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  .header{
    background:url("/images/header.svg") ;
    height:200px ;
    border-radius:0 0 15px 0 ;
    padding:3% ;
  }
  .input{
    display:flex ;
    gap:10px;
    align-items:center ;
    background-color:#FFFFFF ;
    padding:3% ;
    border-radius:15px ;
    position:relative ;
    top:130px ;
  }
  .input input{
    width:100% ;
  }
`;
export const HeaderStyle = styled.div`
  background: url("/images/event-create.svg");
  background-size: cover;
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
