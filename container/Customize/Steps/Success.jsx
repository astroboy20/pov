import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import { QRCode } from "react-qr-code";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { useSelector } from "react-redux";
import { CustomText } from "@/components/CustomText";
import { QRContainer } from "./Success.style";
import useFetchItems from "@/hooks/useFetchItems";
import { EventSpinner } from "@/components/Spinner/Spinner";

const Success = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [event, setEvent] = useState([]);
  const router = useRouter();

  const qrCodeRef = useRef(null);

  const eventId =
    typeof window !== "undefined" && localStorage.getItem("creatorId");
  const downloadQrCode = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "captured_element.png";
        link.click();
        router.push("/event");
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

  const { data, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${eventId}`,
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setEvent(data.event);
    }
  }, [data]);

  if (isLoading) return <EventSpinner />;
  
  return (
    <QRContainer ref={qrCodeRef}>
      <>
        <div className="qr-code">
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            <div>{event?.eventName}</div>
          </CustomText>

          <div>
            <QRCode value={`https://cliqpod.co/invitee/${event?._id}`} />
            <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
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
          <CustomText weight={"500"} type={"Htype"} variant={"h3-c"}>
            Made by cliqPod with Love.
          </CustomText>
        </div>
        <Button type="submit" variant="defaultButton" onClick={downloadQrCode}>
          Download
        </Button>
      </>
    </QRContainer>
  );
};

export { Success };
