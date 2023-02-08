import Image from "next/image";

import { BsStars } from "react-icons/bs";

const Content = () => {
  return (
    <>
      <div className="grid px-10 mt-20 lg:mt-10 md:gap-0 lg:grid-cols-2 place-items-center md:place-content-start">
        {/* -----------flex container---------*/}

        <div className="flex flex-col items-center max-w-xl text-center md:items-start md:text-left">
          <h1 className="mb-10 text-4xl font-semibold md:text-5xl ">
            High speed transactions, everywhere and{" "}
            <span className="leading-snug underline underline-offset-4 lg:underline-offset-8 decoration-neutral-50 dark:decoration-rose-300">
              anywhere
            </span>
          </h1>
          <p className="p-4 font-medium leading-6 dark:bg-gray-900/70 bg-gray-200/80 text-md md:text-xl rounded-3xl">
            Make and receive payments anywhere on earth with our lightning
            network. Now supporting transactions on
            <span> Solana</span> and <span>Ethereum.</span>
          </p>
          <div className="flex gap-2 mt-12">
            <button className="px-6 py-2 tracking-tight transition duration-300 dark:bg-neutral-400/40 rounded-2xl text-neutral-50 bg-neutral-900 hover:bg-neutral-800/80 dark:hover:bg-neutral-800/80">
              Get started
            </button>
            <button className="px-4 py-2 font-semibold tracking-tight hover:underline underline-offset-4 text-neutral-50">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
