import { useState, useRef } from "react";
import { useOptionContext } from "@/context/option-context";
import { Delete } from "../Gallery.style";
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

const Hosting = ({ events }) => {
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

  return (
    <>
      <>
        {events?.map((event) => (
          <div key={event?._id}>
            <div>
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
                      // margin: "2% 30%",
                    }}
                  />
                  <div className="text">
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`/gallery/${event?._id}`}
                    >
                      <div className="a">{event?.eventName}</div>
                      <div className="b">{formatDate(event?.event_date)}</div>
                      <div className="c">{event?.event_mode}</div>
                    </Link>
                  </div>
                </div>
                <div className="icons">
                  <span onClick={() => openModalForEvent(event?._id)}>
                    <JoinIcon />
                  </span>
                  <Modal
                    show={showModalForEvent[event?._id]}
                    onClose={() => closeModalForEvent(event?._id)}
                  >
                    <div
                      className="qr-code"
                      ref={qrCodeRef}
                      style={{ padding: "5%" }}
                    >
                      <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
                        <div style={{ padding: "5%" }}>{event?.eventName}</div>
                      </CustomText>
                      <div>
                        <QRCode
                          value={`https://cliqpod.co/invitee/${event?._id}`}
                        />
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h1"}
                        >
                          SCAN ME
                        </CustomText>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="text"
                          id="url"
                          value={`https://cliqpod.co/invitee/${event?._id}`}
                          readOnly
                          style={{
                            width: "100%",
                            padding: "8px",
                            fontSize: "14px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginRight: "8px",
                          }}
                        />
                        <button
                          style={{
                            padding: "8px 16px",
                            fontSize: "14px",
                            backgroundColor: "#1D1465",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                          onClick={handleCopyClick}
                        >
                          {isCopied ? "Copied" : "Copy"}
                        </button>
                      </div>
                      <br />
                      <CustomText
                        weight={"500"}
                        type={"Htype"}
                        variant={"h3-c"}
                      >
                        Made by cliqPod with Love.
                      </CustomText>
                    </div>
                    <Button
                      type="submit"
                      variant="defaultButton"
                      onClick={downloadQrCode}
                    >
                      Download
                    </Button>
                  </Modal>

                  <div className="edit">edit</div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                padding: "3%",
              }}
            >
              Want to create new event?{" "}
              <Link href={"/create-event"} className="href">
                click here
              </Link>{" "}
              to set up new event.
            </p>
          </div>
        ))}
      </>
    </>
  );
};

export { Hosting };
