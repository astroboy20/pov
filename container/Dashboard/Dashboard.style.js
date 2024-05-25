import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* height:1400px ; */
  /* margin-bottom:700px !important; */
  .header {
    background: url("/images/header.svg");
    height: 200px;
    border-radius: 0 0 15px 0;
    padding: 3%;
  }
  .input {
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #ffffff;
    padding: 3%;
    border-radius: 15px;
    position: relative;
    top: 130px;
  }
  .input input {
    width: 100%;
  }

  .body {
    padding: 6% 4%;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .body .upcoming-event {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .body .scroll {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .scroll {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .thumbnail {
    width: 85px;
    height: 100px;
    border-radius: 8px;
  }
  .event {
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 4px 0px #0000001a;
    gap: 10px;
    width: 70%;
    flex-shrink: 0;
    border-radius: 8px;
    /* padding:2% 0 ; */
  }
  .upcoming-event .text {
    padding: 2%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .upcoming-event .text h3 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .upcoming-event p {
    font-size: 10px;
    font-weight: 700;
  }
  .upcoming-event h1,
  .popular-event h1 {
    font-size: 24px;
    font-weight: 700;
  }
  .popular-scroll {
    height: 320px !important;
    overflow-y: scroll;
    /* width:10% ; */
    width: 100%;
  }
  .popular-event .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .event-body {
  }

  /* .event-body  */
  /* .event-body  */

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 1700px;
    .header {
      background: url("/images/header.svg");
      /* background-repeat:no-repeat ; */
      background-size: contain;
      height: 10000000px;
      width: 100%;
      border-radius: 0 0 20px 20px;
      padding: 3%;
    }
    .input {
      top: 50px;
    }
    .event-a {
      width: 70%;
    }
    .event-body {
      background-size: cover;
      background-repeat: no-repeat;
      height: 200px;
      border-radius: 8px;
    }
  }
`;
export const EventBody = styled.div`
  /* background: url("/images/bg.svg"); */
  background:  url(${props => props.background});
  background-size: cover;
  background-position:  top center ;
  background-repeat: no-repeat;
  width: 100%;
  height: 160px;
  border-radius: 0 8px 8px 0;
  padding: 2%;
  margin-bottom: 25px;

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f2f3f480;
    border-radius: 8px;
    padding: 3%;
    position: relative;
    top: 90px;
  }

  .text p {
    font-size: 16px;
    font-weight: 700;
  }
  .text span {
    background: #1d1465;
    color: #fff;
    padding: 5.5px 12px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    border-radius: 8px;
  }
`;
