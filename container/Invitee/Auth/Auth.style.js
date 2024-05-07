import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  padding: 2% 5%;
  flex-direction: column;
  gap: 40px;
  margin-top: 3%;
  text-align: center;
  .header {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #1d1465;
    gap:10px;
  }
  .header div {
    font-size: 30px;
    font-weight: 700;
    display:flex ;
    gap:10px;
    align-items:end ;
  }
  .header p{
    font-size:14px ;
  }

  .info p {
    color: #1d1465;
    font-size:20px ;
    font-weight:600 ;
    text-align:left ;
  }
  .login-with-google {
    margin-top: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .button-style {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13.3px;
    font-weight: 600;
  }
  .link {
    text-align: right;
    margin: 5% 0;
    text-decoration: none;
  }
  span {
    font-weight: 600;
    color: #1d1465;
  }
  .or {
    margin: 5%;
    text-align: center;
    position: relative;
  }
  .or::before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    left: 0;
    top: 50%;
    position: absolute;
  }
  .or::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    right: 0;
    top: 50%;
    position: absolute;
  }
`;
