import Card from "./Card";

const Collection = (props: any) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {props.data.map((item: any) => {
          return (
            <div key={item.name}>
              <Card
                name={item.name}
                description={item.description}
                url={item.url}
                img={item.img}
                tags={item.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
