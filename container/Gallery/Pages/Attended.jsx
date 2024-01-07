import { useState, useEffect, useRef } from "react";
import { useOptionContext } from "@/context/option-context";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Delete } from "../Gallery.style";
import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { QRCode } from "react-qr-code";
import Link from "next/link";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { JoinIcon } from "@/assets";
import { toast } from "react-toastify";

const Attended = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvent] = useState([]);
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

  const handleOption = (option) => {
    switchOption(option);
  };

  const router = useRouter();
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api-cliqpod.koyeb.app/events",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data.events;
        setEvent(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error);
      }
    };

    fetchEvents();
  }, [accessToken]);

  const deleteEvent = async (event) => {
    event.preventDefault();
    const eventId = event.target.elements.eventId.value;

    try {
      setIsLoading(true);

      await axios.post(
        "https://api-cliqpod.koyeb.app/deleteEvent",
        {
          eventId: eventId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const response = await axios.get("https://api-cliqpod.koyeb.app/attended-events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = response.data;
      console.log(data)
      setIsLoading(false);
      toast.success("Event deleted successfully!");
      setEvent(data);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "Error deleting event. Please try again.");
    }
  };
  return (
    <div>
      {option === "Attended" && (
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

export { Attended };
