import Image from "next/image";
import Link from "next/link";

const Memories = () => {
  return (
    <main className="p-4 md:p-[5%] flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-20">
      <div className="w-full ">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=620&h=640&fit=crop&crop=center"
          width={620}
          height={640}
          className="phone2 object-cover w-full h-auto max-w-md mx-auto lg:max-w-none rounded"
          alt="phone mockup showing app interface"
        />
      </div>
      <div className="flex flex-col text-center lg:text-left gap-8 md:gap-[24px] w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Your Event
          <br className="hidden md:block" /> Memories;{" "}
          <br className="hidden md:block" /> Anywhere,{" "}
          <br className="hidden md:block" /> Anytime!
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Experience the power of nostalgia <br />
          reimagined with cliqpod&apos;s digital albums.
        </p>
        <div className="flex w-fit mx-auto lg:mx-0 gap-4 justify-center lg:justify-start">
          <Link
            href="/auth"
            className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-[#1d1465] px-6 md:px-[30px] py-3 md:py-[10px] text-white w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-transparent hover:border hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
          >
            Get Cliqpod
          </Link>
          <Link
            href="/auth"
            className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-transparent px-6 md:px-[30px] py-3 md:py-[10px] text-[#1d1465] border-l border-r border-[#1d1465] w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-[#1d1465] hover:text-white transition ease-in-out duration-500"
          >
            View Cliqs
          </Link>
        </div>
      </div>
    </main>
  );
};

export { Memories };
