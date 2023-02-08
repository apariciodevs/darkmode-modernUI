import Image from "next/image";

import { BsStars } from "react-icons/bs";

const Content = () => {
  return (
    <>
      <div className="grid px-10 mt-20 md:gap-0 lg:grid-cols-2 place-items-center md:place-content-start">
        {/* -----------flex container---------*/}

        <div className="flex flex-col items-center max-w-lg px-4 text-center md:items-start md:text-left">
          <h1 className="mb-10 text-4xl font-semibold md:text-5xl ">
            Lightning payments for{" "}
            <span className="leading-snug underline underline-offset-4 lg:underline-offset-8 decoration-teal-300">
              {" "}
              any{" "}
            </span>
            business
          </h1>
          <p className="font-medium leading-6 text-md ">
            Make and receive payments with our lightning network. Now supporting
            transactions on
            <span> Solana</span> and <span>Ethereum.</span>
          </p>
          <div className="flex gap-2 mt-12">
            <button className="px-6 py-2 tracking-tight dark:bg-neutral-100/40 rounded-2xl text-neutral-50 bg-neutral-800">
              Get started
            </button>
            <button className="px-8 py-2 tracking-tight ">two</button>
          </div>

        </div>

       
      </div>
    </>
  );
};

export default Content;
