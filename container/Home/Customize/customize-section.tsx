import Image from "next/image";
import Link from "next/link";

const Customize = () => {
  return (
    <main className="p-4 md:p-[5%] flex flex-col lg:flex-row items-center w-full  gap-8 lg:gap-0">
      <div className="flex flex-col text-center lg:text-left gap-8 md:gap-[24px] w-full order-2 lg:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Customizable <br className="hidden md:block" /> templates <br />
          made for you!
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Elevate your capturing experience <br className="hidden md:block" />{" "}
          with personalized templates.
        </p>

        <Link
          href="/auth"
          className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-[#1d1465] px-6 md:px-[30px] py-3 md:py-[10px] text-white w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-transparent hover:border hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
        >
          Customize
        </Link>
      </div>
      <div className="w-full lg:ml-auto order-1 lg:order-2">
        <Image
          src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=620&h=640&fit=crop&crop=center"
          width={620}
          height={640}
          className="phone2 object-cover w-full h-auto max-w-md mx-auto lg:max-w-none rounded"
          alt="phone mockup showing customizable templates"
        />
      </div>
    </main>
  );
};

export { Customize };
