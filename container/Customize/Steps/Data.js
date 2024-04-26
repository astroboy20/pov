import { AddTextIcon, UploadIcon, ChangeFontIcon, BackgroundIcon, DeleteIcon } from "@/assets";

export const events = [
    {
      id: 1,
      label: "Birthday",
      value: "Birthday",
    },
    {
      id: 2,
      label: "Wedding",
      value: "Wedding",
    },
    {
      id: 3,
      label: "Graduation",
      value: "Graduation",
    },
    {
      id: 4,
      label: "Hangout",
      value: "Hangout",
    },
    {
      id: 5,
      label: "Houseparty",
      value: "House party",
    },
  ];
  
  export const images = [
    {
      id: 1,
      filterName: "Birthday Flier",
      info: "A little story about the template is here, A little story about the template",
      src: "/images/birthday.svg",
    },
    {
      id: 2,
      filterName: "London",
      info: "A little story about the template is here, A little story about the template",
      src: "/images/london.svg",
    },
  ];

  export const editActions = [
    {
        id:1,
        label:"Add Text",
        icon:<AddTextIcon/>,
    },
    {
        id:2,
        label:"Upload Image",
        icon:<UploadIcon/>,
    },
    {
        id:3,
        label:"Uplaod Element",
        icon:<AddTextIcon/>,
    },
    {
        id:4,
        label:"Change font",
        icon:<ChangeFontIcon/>,
    },
    {
        id:5,
        label:"BG color",
        icon:<BackgroundIcon/>,
    },
    {
        id:5,
        label:"Delete",
        icon:<DeleteIcon/>,
    },
  ]
  