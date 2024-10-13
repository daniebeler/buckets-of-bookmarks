import Image from "next/image";

const Card = (props: any) => {
  return (
    <div className="h-full">
      <a
        className="bg-gray-800 flex h-full flex-col rounded-xl p-4"
        target="_blank"
        href={props.url}
        rel="noreferrer"
      >
        <div className="flex flex-col w-full items-center h-full">
          <div className="pb-2">
            <Image
              src={"/images/" + props.img}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          

          <h2 className="text-white text-lg text-center">{props.name}</h2>
          <p className="text-gray-300 text-sm pt-1 text-center">
            {props.description}
          </p>

          <div className="flex pt-1">
            {props.tags &&
              props.tags.map((item: any) => {
                if (item.name === "free") {
                  return (
                    <div key={item.name} className="text-xs text-green-500 p-1">
                      FREE
                    </div>
                  );
                } else if (item.name === "os") {
                  return (
                    <div key={item.name} className="text-xs text-gray-400 p-1">
                      OPEN SOURCE
                    </div>
                  );
                } else if (item.name === "freemium") {
                  return (
                    <div key={item.name} className="text-xs text-orange-500 p-1">
                      FREEMIUM
                    </div>
                  );
                } else if (item.name === "paid") {
                  return (
                    <div key={item.name} className="text-xs text-red-500 p-1">
                      PAID
                    </div>
                  );
                } else if (item.name === "rss") {
                  return (
                    <div key={item.name} className="text-xs text-yellow-500 p-1">
                      RSS
                    </div>
                  );
                } else if (item.name === "pwa") {
                  return (
                    <div key={item.name} className="text-xs text-purple-600 p-1">
                      PWA
                    </div>
                  );
                } else if (item.name === "android") {
                  return (
                    <div key={item.name} className="text-xs text-green-500 p-1">
                      ANDROID
                    </div>
                  );
                } else if (item.name === "ios") {
                  return (
                    <div key={item.name} className="text-xs text-gray-500 p-1">
                      IOS
                    </div>
                  );
                } else if (item.name === "tailwind") {
                  return (
                    <div key={item.name} className="text-xs text-blue-500 p-1">
                      TAILWIND
                    </div>
                  );
                } else if (item.name === "react") {
                  return (
                    <div key={item.name} className="text-xs text-blue-500 p-1">
                      REACT
                    </div>
                  );
                }
              })}
          </div>

          <div className="flex-1">

          </div>

          {props.screenshot && (
            <div className="relative w-full aspect-video mt-4">
            <Image
              src={"/images/" + props.screenshot}
              alt=""
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
          )}
        </div>
        {/*  <div>
          <h2 className="text-white text-lg">{props.name}</h2>
          <p className="text-gray-300 text-sm pt-1">{props.description}</p>
        </div> */}
      </a>
    </div>
  );
};

export default Card;
