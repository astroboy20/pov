import styled from "styled-components"

export const FooterContainer = styled.div`
 padding: 3% 5%;
 background: #1D1465;
 color:#fff;
 display:flex ;
 justify-content:space-between ;
 /* align-items:center ; */

.one,.two,.three,.four{
    display:flex ;
    flex-direction:column ;
    gap:25px;
}


span{
    font-size:18px ;
   font-weight:700 ;
}
p{
    font-size: 16px;
}
`