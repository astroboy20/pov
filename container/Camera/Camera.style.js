import styled from "styled-components"

export const Container = styled.div`
width:100% ;
height:100%;
text-align:center ;
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
    bottom:20px;
    left:0 ;
    right:0 ;

}
video{
    width:100% ;
    height:100% ;
    background:none ;
}
span{
    position:absolute ;
    top:10px;
    left:0 ;
    right:0 ;
    color:#fff ;
    font-size:18px ;
}
`