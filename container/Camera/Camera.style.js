import styled from "styled-components"

export const Container = styled.div`
position:relative;
height:100dvh ;
text-align:center ;
.header-head{
    display:flex ;
    justify-content:space-between ;
}
/* .button{
    display:flex ;
    gap:10px;
    justify-content:center ;
    align-items:center ;
}
video{
    width:100% ;
    padding:2% 0% ;
} */
`
export const Video = styled.video`
  width: 100%;
`;
export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:5% 0% ;
`;
