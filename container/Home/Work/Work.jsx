import {
  ChooseIcon,
  DigitalIcon,
  NextArrowIcon,
  NextIcon,
  QRIcon,
  SetupIcon,
  StartIcon,
} from "@/assets";
import { WorkStyle } from "./Work.style";

const Work = () => {
  return (
    <WorkStyle>
      <div className="header">
        <h1>How It Works</h1>
        <p>
          Follow these five simple steps to initiate your journey with cliqpod.
        </p>
      </div>
      <div className="big-box">
        <div className="box">
          <span>
            <ChooseIcon />{" "}
            <div>
              <NextArrowIcon />
            </div>
          </span>
          <h2>Choose event category</h2>
          <p>
            Select your event choice which could either be wedding, birthday or
            even corporate events.
          </p>
        </div>
        <div className="box">
          <span>
            <SetupIcon />{" "}
            <div>
              {" "}
              <NextArrowIcon />
            </div>
          </span>
          <h2>Set up an event</h2>
          <p>
            By inputing your event itineraries, you are on your way to setting
            up an event!
          </p>
        </div>
        <div className="box">
          <span className="span">
            <DigitalIcon />{" "}
            <div>
              <NextIcon />
            </div>
          </span>
          <h2>Customize digital backdrop</h2>
          <p>Design your digital backdrop to suit your event type.</p>
        </div>
        <div className="box">
          <span>
            <QRIcon />{" "}
            <div>
              <NextArrowIcon />
            </div>
          </span>
          <h2>Scan Qr code</h2>
          <p>
            Selected event attendees scan QR code to access your already set up
            event.
          </p>
        </div>
        <div className="box">
          <span>
            <StartIcon />
          </span>
          <h2>Start Cliqing</h2>
          <p>Start creating event memories and also access to event album.</p>
        </div>
      </div>
    </WorkStyle>
  );
};

export { Work };
