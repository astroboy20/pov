import styled from "styled-components";

export const AlbumContainer = styled.div`
  background: #72757A;
  padding: 5%;
  height:100dvh;
  display:flex ;
  flex-direction:column ;
  gap:20px;
  .header{
    display:flex ;
    align-items:center ;
    gap:20px;
  }
  .input{
    display:flex ;
    justify-content:space-between ;
  }
  .left,.right{
    display:flex ;
    flex-direction:column ;
    /* align-items:center ; */
    color: #fff;
  }
  .custom-select {
  padding:10px 20px; /* Add padding */
  font-size: 16px; /* Set font size */
  width:100% ;
  border: 1px solid #ccc; /* Add border */
  border-radius: 50px; /* Add border radius */
  background-color: #221E26; /* Background color */
  color: #fff; /* Text color */
  outline: none; /* Remove outline */
  cursor: pointer; /* Show pointer cursor */
  text-align:center ;
}
`;
