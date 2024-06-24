import { useOptionContext } from "@/context/option-context";
import { CustomText } from "@/components/CustomText";
import Link from "next/link";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import Image from "next/image";

const Attended = ({ attendedEvent, isLoading }) => {
  const { option } = useOptionContext();
 

  return (
    <div>
      {option === "Attended" && (
        <>
          {isLoading ? (
            <div className="centered-style">
              <PurpleSpinner />
            </div>
          ) : attendedEvent && attendedEvent?.length === 0 ? (
            <div className="centered-style">
              <CustomText weight={"500"} type={"Htype"} variant={"p"}>
                No events available.
              </CustomText>
            </div>
          ) : (
            <>
              {attendedEvent?.map((event) => (
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
