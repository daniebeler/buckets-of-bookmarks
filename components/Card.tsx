import Image from "next/image";

const Card = (props: any) => {
  return (
    <div className="h-full pb-4">
      <a
        className="bg-gray-800 flex h-full flex-col rounded-xl p-4"
        target="_blank"
        href={props.url}
        rel="noreferrer"
      >
        <div className="row">
          <div className="col-auto">
            <Image
              src={"/images/" + props.img}
              alt=""
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
          <div className="col">
            {props.tags &&
              props.tags.map((item: any) => {
                if (item.name === "free") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-green-500"
                    >
                      FREE
                    </div>
                  );
                } else if (item.name === "os") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-gray-400"
                    >
                      OPEN SOURCE
                    </div>
                  );
                } else if (item.name === "freemium") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-orange-500"
                    >
                      FREEMIUM
                    </div>
                  );
                } else if (item.name === "paid") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-red-500"
                    >
                      PAID
                    </div>
                  );
                } else if (item.name === "rss") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-yellow-500"
                    >
                      RSS
                    </div>
                  );
                } else if (item.name === "pwa") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-purple-600"
                    >
                      PWA
                    </div>
                  );
                } else if (item.name === "android") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-green-500"
                    >
                      ANDROID
                    </div>
                  );
                } else if (item.name === "ios") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-gray-500"
                    >
                      IOS
                    </div>
                  );
                } else if (item.name === "tailwind") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-blue-500"
                    >
                      TAILWIND
                    </div>
                  );
                } else if (item.name === "react") {
                  return (
                    <div
                      key={item.name}
                      className="text-xs text-blue-500"
                    >
                      REACT
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="text-white text-lg">{props.name}</h2>
            <p className="text-white text-sm">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
