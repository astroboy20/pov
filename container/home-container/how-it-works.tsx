import {
  ChooseIcon,
  DigitalIcon,
  NextArrowIcon,
  NextIcon,
  QRIcon,
  SetupIcon,
  StartIcon,
} from "@/assets";

const HowItWorks = () => {
  return (
    <main className="px-[5%] flex flex-col gap-[50px]">
      <div className="text-center lg:text-left ">
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          How It Works
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Follow these five simple steps to <br className="block md:hidden" /> initiate your journey with cliqpod.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[50px] items-center">
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-[30px]">
            <ChooseIcon />{" "}
            <div className="hidden lg:flex">
              <NextArrowIcon />
            </div>
          </span>
          <h2 className="text-[28px] font-bold">Choose event category</h2>
          <p className="text-[24px] font-[400]">
            Select your event choice which could either be wedding, birthday or
            even corporate events.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-[30px]">
            <SetupIcon />{" "}
            <div className="hidden lg:flex">
              {" "}
              <NextArrowIcon />
            </div>
          </span>
          <h2 className="text-[28px] font-bold">Set up an event</h2>
          <p className="text-[24px] font-[400]">
            By inputing your event itineraries, you are on your way to setting
            up an event!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap--[30px]">
            <DigitalIcon />{" "}
            <div className="hidden lg:flex">
              <NextIcon />
            </div>
          </span>
          <h2 className="text-[28px] font-bold">Customize digital backdrop</h2>
          <p className="text-[24px] font-[400]">
            Design your digital backdrop to suit your event type.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap--[30px]">
            <QRIcon />{" "}
            <div className="hidden lg:flex">
              <NextArrowIcon />
            </div>
          </span>
          <h2 className="text-[28px] font-bold">Scan Qr code</h2>
          <p className="text-[24px] font-[400]">
            Selected event attendees scan QR code to access your already set up
            event.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap--[30px]">
            <StartIcon />
          </span>
          <h2 className="text-[28px] font-bold">Start Cliqing</h2>
          <p className="text-[24px] font-[400]">
            Start creating event memories and also access to event album.
          </p>
        </div>
      </div>
    </main>
  );
};

export { HowItWorks };
