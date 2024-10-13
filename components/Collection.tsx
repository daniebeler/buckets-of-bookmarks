import Card from "./Card";

const Collection = (props: any) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {props.data.map((item: any) => {
          return (
            <div key={item.name}>
              <Card
                name={item.name}
                description={item.description}
                url={item.url}
                img={item.img}
                screenshot={item.screenshot}
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
