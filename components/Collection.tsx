import Card from "./Card"


const Collection = (props: any) => {
  return (
    <div>
      <div className='container collection-wrapper'>
        <div className='row'>
          {props.data.map((item: any) => {
            return (
              <div key={item.name} className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
                <Card name={item.name} description={item.description} url={item.url} img={item.img} />
              </div>
            )
          })}

        </div>
      </div>

      <style>{`
        .collection-wrapper {
          padding-top: 24px;
          padding-bottom: 24px;
        }
      `}</style>
    </div>
  )

}

export default Collection