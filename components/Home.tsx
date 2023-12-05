import Image from "next/image";
import { FileCode } from "phosphor-react";

const Home = () => {
  return (
    <div className="bg-gray-900 h-full w-full">
      <div className="flex flex-row flex-wrap-reverse h-full w-full">
        <div className="basis-full lg:basis-7/12 xl:basis-1/2 flex flex-col items-start lg:justify-center p-6">
          <h1 className="text-white text-7xl">Buckets Of</h1>
          <h1 className="text-white text-7xl">Bookmarks</h1>
          <p className="text-white pt-3 pb-4">
            An ever-growing collection of useful websites and hidden gems of the
            internet. Sorted by category and tagged by price.
          </p>
          {/* <div className="">
            <a
              className=""
              target="_blank"
              href="https://github.com/daniebeler/buckets-of-bookmarks"
              rel="noreferrer"
            >
              <FileCode size="24" color="#111" />
            </a>
          </div> */}

          <div className="">
            <a
              href="https://www.producthunt.com/posts/buckets-of-bookmarks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-buckets&#0045;of&#0045;bookmarks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385741&theme=neutral"
                alt="Buckets&#0032;Of&#0032;Bookmarks - An&#0032;ever&#0045;growing&#0032;collection&#0032;of&#0032;useful&#0032;websites&#0032;and&#0032;tools | Product Hunt"
              />
            </a>
          </div>
        </div>
        <div className="basis-full lg:basis-5/12 xl:basis-1/2 p-6">
          <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex h-[40vh] rounded-xl relative lg:h-full w-full">
            <Image
              src={"/images/others/ReadingDoodle.svg"}
              alt=""
              fill
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
