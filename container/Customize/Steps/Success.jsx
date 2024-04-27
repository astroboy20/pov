import {useState, useRef} from 'react'
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { QRCode } from "react-qr-code";
import Link from "next/link";
import { Button } from "@/components/Button";

const Success = () => {
    const [showModalForEvent, setShowModalForEvent] = useState({});
    const { option, switchOption } = useOptionContext();
    const [isCopied, setIsCopied] = useState(false);


    const qrCodeRef = useRef(null);

    const downloadQrCode = () => {
      if (qrCodeRef.current) {
        html2canvas(qrCodeRef.current).then((canvas) => {
          const image = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = image;
          link.download = "captured_element.png";
          link.click();
        });
      }
    };
  
    const copyTextToClipboard = async (text) => {
      if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand("copy", true, text);
      }
    };
  
    const handleCopyClick = () => {
      const inputField = document.getElementById("url");
      const textToCopy = inputField.value;
      copyTextToClipboard(textToCopy)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((error) => {
          toast.warning(error);
        });
    };
    

  return (
    <div>Success</div>
  )
}

export  {Success}