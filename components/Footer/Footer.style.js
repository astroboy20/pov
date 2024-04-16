import styled from "styled-components"

export const FooterContainer = styled.div`
 padding: 3% 5%;
 background: #1D1465;
 color:#fff;
 display:flex ;
 flex-direction:column ;
 gap:30px;
 /* align-items:center ; */

 footer{
    color:#fff;
 display:flex ;
 justify-content:space-between ;
 }
.one,.two,.three,.four{
    display:flex ;
    flex-direction:column ;
    gap:25px;
}
.icon {
    display: flex;
    gap: 10px;
  }

span{
    font-size:18px ;
   font-weight:700 ;
}
p{
    font-size: 16px;
}

.hr{
    opacity:0.4 ;
    width:100% ;
 }
`