import styled from "styled-components";

export const AlbumContainer = styled.div`
  background: #72757A;
  padding: 5%;
  height:auto;
  display:flex ;
  flex-direction:column ;
  gap:20px;
  .header{
    display:flex ;
    align-items:center ;
    gap:20px;
  }
  .input {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  color: white;
}

.custom-select {
  padding: 10px 30px 10px 10px; /* Adjust padding for arrow space */
  width: 150px; /* Adjust width as needed */
  background-color: #221e26;
  color: #fff;
  border-radius: 100px;
  appearance: none;
  position: relative; /* Set position for pseudo-element */
}

/* Styling the custom arrow using a pseudo-element */
.custom-select::after {
  content: ''; /* Add content */
  position: absolute; /* Set position */
  top: 50%; /* Adjust vertically */
  right: 100px; /* Add space before the arrow */
  width: 0;
  height: 0;
  border-left: 5px solid transparent; /* Create arrow-like shape */
  border-right: 5px solid transparent; /* Create arrow-like shape */
  border-top: 5px solid white; /* Color of the arrow */
  transform: translateY(-50%); /* Center vertically */
  pointer-events: none; /* Prevent clicking on pseudo-element */
}
.image{
  display: grid;
  row-gap: 10px;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.image-image{
 
  border-radius:10px ;
  /* padding:2% ; */
}


`;
