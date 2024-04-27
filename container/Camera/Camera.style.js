import styled from "styled-components"

export const Container = styled.div`
width:100% ;
text-align:center ;
background:#1D1465 ;

.header-head{
    display:flex ;
    justify-content:space-between ;
}
.button{
    display:flex ;
    gap:10px;
    justify-content:center ;
    align-items:center ;
    position:absolute ;
    bottom:10px;
    left:0 ;
    right:0 ;

}
video{
    width:100% ;
    height:120% ;
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