import styled from "styled-components"

export const Container = styled.div`
width:100% ;
text-align:center ;
position:relative ;
height:100% ;
.header-head{
    display:flex ;
    justify-content:space-between ;
}
.button{
    display:flex ;
    gap:10px;
    justify-content:center ;
    align-items:center ;
    padding:5% ;
    position:absolute ;
    width:100% ;
    top:80vh ;
}
video{
    width:100% ;
    height:auto ;
    /* padding:5%  ; */
    background:none ;
}
span{
    color:white ;
    top:10px ;
}
`