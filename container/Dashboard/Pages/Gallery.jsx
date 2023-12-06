// import React, { useState } from "react";
// import { GalleryStyle } from "../Dashboard.style";
// import { CiCalendarDate } from "react-icons/ci";
// import { FaRegHourglass } from "react-icons/fa";
// import { CiCamera } from "react-icons/ci";
// import { CustomText } from "@/components/CustomText";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
// } from "@chakra-ui/accordion";
// import { Input } from "@chakra-ui/input";
// import { PhotoData, RevealData } from "../../CreateEvent/Options/data";
// import Option from "../../CreateEvent/Options/Options";
// import { ItemStyle } from "../../CreateEvent/Options/Options.style";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import Image from "next/image"
// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [data, setData] = useState({
//     eventName: "",
//     subName: "",
//     photosPerPerson: "",
//     expectedGuests: "",
//     startDate: "",
//     endDate: "",
//     revealTime: "",
//     image: "",
//   });

//   const handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     console.log(data);
//   };
//   const handleRevealValue = (newValue) => {
//     setData((prevData) => ({
//       ...prevData,
//       revealTime: newValue,
//     }));
//   };
//   const handlePhotoValue = (newValue) => {
//     setData((prevData) => ({
//       ...prevData,
//       photosPerPerson: newValue,
//     }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         // Set the image to display before sending
//         setSelectedImage(e.target.result);
//       };

//       reader.readAsDataURL(file); // Read the image file as a data URL
//     }
//   };

//   return (
//     <>
//       <GalleryStyle>
//         <div className="header">
//           <div className="header-head">{data.eventName}</div>
//           <IoCloudUploadOutline />
//           <div>
//             <input
//               type="file"
//               accept="image/*" // Specify that only image files are allowed
//               onChange={handleImageChange}
//             />
//             <div>
//               {selectedImage && (
//                 <Image
//                   src={selectedImage}
//                   alt="Selected"
//                   width = {100}
//                   height={100}
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "200px",
//                     marginTop: "10px",
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="body">
//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <CiCalendarDate />
//                 </div>
//                 <div className="item">
//                   <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                     Event Name
//                   </CustomText>{" "}
//                   {data.eventName && (
//                     <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                       {data.eventName}
//                     </CustomText>
//                   )}
//                 </div>
//               </AccordionButton>
//               <AccordionPanel background="none" p={10}>
//                 <Input
//                   placeholder="Select Date and Time"
//                   size="md"
//                   type="text"
//                   name="eventName"
//                   value={data.eventName}
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>
//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <CiCalendarDate />
//                 </div>
//                 <div className="item">
//                   <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                     Sub Name
//                   </CustomText>{" "}
//                   {data.subName && (
//                     <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                       {data.subName}
//                     </CustomText>
//                   )}
//                 </div>
//               </AccordionButton>
//               <AccordionPanel background="none" p={10}>
//                 <Input
//                   placeholder="Event name"
//                   size="md"
//                   type="text"
//                   name="subName"
//                   value={data.subName}
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>
//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <CiCalendarDate />
//                 </div>
//                 <div className="item">
//                   <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                     Start Date
//                   </CustomText>{" "}
//                   {data.startDate && (
//                     <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                       {data.startDate}
//                     </CustomText>
//                   )}
//                 </div>
//               </AccordionButton>
//               <AccordionPanel background="none">
//                 <Input
//                   placeholder="Select Date and Time"
//                   size="md"
//                   name="startDate"
//                   type="datetime-local"
//                   value={data.startDate}
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>
//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <CiCalendarDate />
//                 </div>
//                 <div className="item">
//                   <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                     End Date
//                   </CustomText>{" "}
//                   {data.endDate && (
//                     <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                       {data.endDate}
//                     </CustomText>
//                   )}
//                 </div>
//               </AccordionButton>
//               <AccordionPanel background="none" p={10}>
//                 <Input
//                   placeholder="Select Date and Time"
//                   size="md"
//                   name="endDate"
//                   type="datetime-local"
//                   value={data.endDate}
//                   onChange={handleChange}
//                   className="input"
//                 />
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>

//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <FaRegHourglass />{" "}
//                 <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                   Reveal Photo
//                 </CustomText>{" "}
//               </AccordionButton>
//               <AccordionPanel background="none" p={10}>
//                 <ItemStyle>
//                   {RevealData.map((reveal) => (
//                     <Option
//                       key={reveal.id}
//                       label={reveal.label}
//                       value={reveal.value}
//                       setValue={handleRevealValue}
//                       selected={data.revealTime === reveal.value}
//                     />
//                   ))}
//                 </ItemStyle>
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>

//           <Accordion allowToggle>
//             <AccordionItem>
//               <AccordionButton
//                 style={{
//                   background: "none",
//                   color: "white",
//                   border: "none",
//                   gap: "10px",
//                 }}
//               >
//                 <CiCamera />{" "}
//                 <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
//                   Photo per person
//                 </CustomText>{" "}
//               </AccordionButton>
//               <AccordionPanel background="none" p={10}>
//                 <ItemStyle>
//                   {PhotoData.map((photo) => (
//                     <Option
//                       key={photo.id}
//                       label={photo.label}
//                       value={photo.value}
//                       selected={data.photosPerPerson === photo.value}
//                       setValue={handlePhotoValue}
//                     />
//                   ))}
//                 </ItemStyle>
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </GalleryStyle>
//     </>
//   );
// };

// export default Gallery;
