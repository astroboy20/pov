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

const Hosting = ({ events, isLoading, deleteEvent }) => {
  const [showModalForEvent, setShowModalForEvent] = useState({});
  const { option, switchOption } = useOptionContext();

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

  return (
    <div>
      {option === "Hosting" && (
        <>
          {isLoading ? (
            <div className="centered-style">
              <PurpleSpinner />
            </div>
          ) : events && events.length === 0 ? (
            <div className="centered-style">
              <CustomText weight={"500"} type={"Htype"} variant={"p"}>
                No events available.
              </CustomText>
            </div>
          ) : (
            <>
              {events.map((event) => (
                <div key={event._id}>
                  <div>
                    <div className="info">
                      <div className="sub-info">
                        <Image
                          width={80}
                          height={80}
                          src={event.event_image}
                          alt="event_banner"
                        />
                        <div className="text">
                          <Link
                            style={{ textDecoration: "none" }}
                            // href={{
                            //   pathname: `/gallery/id`,
                            //   query: { id: event._id },
                            // }}
                            href={`/gallery/${event._id}`}
                          >
                            <div className="a">{event.eventName}</div>
                            <div className="b">
                              {new Date(event.end_date) < new Date()
                                ? `Event ended on ${new Date(
                                    event.end_date
                                  ).toLocaleDateString()}`
                                : `Ending on ${new Date(
                                    event.end_date
                                  ).toLocaleDateString()}`}
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="icons">
                        <span onClick={() => openModalForEvent(event._id)}>
                          <JoinIcon />
                        </span>
                        <Modal
                          show={showModalForEvent[event._id]}
                          onClose={() => closeModalForEvent(event._id)}
                        >
                          <div
                            className="qr-code"
                            ref={qrCodeRef}
                            style={{ padding: "5%" }}
                          >
                            <CustomText
                              weight={"500"}
                              type={"Htype"}
                              variant={"h3"}
                            >
                              <div style={{ padding: "5%" }}>
                                {event.eventName}
                              </div>
                            </CustomText>
                            <div>
                              <QRCode
                                value={`https://cliqpod.co/invitee/${event._id}`}
                              />
                              <CustomText
                                weight={"500"}
                                type={"Htype"}
                                variant={"h1"}
                              >
                                SCAN ME
                              </CustomText>
                            </div>

                            {/* <div>
                           
                             <Link href={`https://cliqpod.co/invitee/${event._id}`}>CLICK HERE</Link>
                         
                            </div>
                           <br/> */}
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

                        <form onSubmit={deleteEvent}>
                          <input
                            type="hidden"
                            value={event._id}
                            name="eventId"
                          />
                          <button
                            type="submit"
                            style={{ border: "none", background: "none" }}
                          >
                            <Delete />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export { Hosting };
