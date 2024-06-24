import { useState, useRef } from "react";
import { useOptionContext } from "@/context/option-context";
import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { QRCode } from "react-qr-code";
import Link from "next/link";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { JoinIcon } from "@/assets";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";

const Hosting = ({ events, deleteEvent }) => {
  const [showModalForEvent, setShowModalForEvent] = useState({});
  const { option, switchOption } = useOptionContext();
  const [isCopied, setIsCopied] = useState(false);

  const openModalForEvent = (eventId) => {
    setShowModalForEvent((prev) => ({
      ...prev,
      [eventId]: true,
    }));
  };

  const closeModalForEvent = (eventId) => {
    setShowModalForEvent((prev) => ({
      ...prev,
      [eventId]: false,
    }));
  };

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];

    // Get day
    const day = date.getDate();

    // Get year
    const year = date.getFullYear();

    // Format the date
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };

  const handleId = (id) => {
    return (
      typeof window !== "undefined" && localStorage.setItem("id-route", id)
    );
  };

  return (
    <>
      <>
        {events?.map((event) => (
          <div key={event?._id}>
            <div className="info">
              <div className="sub-info">
                <Image
                  width={60}
                  height={60}
                  src={event?.event_image}
                  alt="event_banner"
                  objectFit="cover"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
                <div className="text" onClick={() => handleId(event?._id)}>
                  <div className="a">{event?.eventName}</div>
                  <div className="b">{formatDate(event?.event_date)}</div>
                  <div className="c">{event?.event_mode}</div>
                </div>
              </div>
              <div className="icons">
                <Link href={`/album/${event?._id}`}>
                  <div className="edit" >View Album</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
       
      </>
    </>
  );
};

export { Hosting };
