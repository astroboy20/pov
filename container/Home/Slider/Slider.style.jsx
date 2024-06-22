import styled from "styled-components";

export const SliderStyle = styled.div`
  padding: 0% 6% 6% 6%;
  margin-top:6% ;
  header{
    display:flex;
    flex-direction:column ;
    gap:10px;
    text-align:center ;
    margin-bottom:50px ;
  }
  header h1 {
    font-size: 36px;
    font-weight: 700;
  }
  header p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1465;
    inline-size:60%;
    margin:auto ;
  }

  .span{
    margin:50px;
    text-align:center ;
  }
  .span a{
    border-radius: 40px;
    background-color: #1d1465;
    padding: 10px 30px;
    color: #fff;
    width: fit-content;
    cursor: pointer;
    text-decoration:none !important;
   
  }


  @media screen and (max-width: 768px) {
    padding: 10% 5%;
    margin-top:5% ;
    header h1 {
      font-size: 24px;
    }
    header p {
      font-size: 14px;
      inline-size:100%;
    }
  }

  @media screen and (min-width: 768px)  and (max-width:1024px){
   
    padding: 10% 5%;
   
  }
`;
