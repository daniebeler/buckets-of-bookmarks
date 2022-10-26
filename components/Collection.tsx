import Card from "./Card"


const Collection = (props: any) => {
  return (
    <div className="wrapper-wrapper">
      <div className='container-fluid collection-wrapper'>
        <div className='row padding-bottom'>
          {props.data.map((item: any) => {
            return (
              <div key={item.name} className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2'>
                <Card name={item.name} description={item.description} url={item.url} img={item.img} tags={item.tags} />
              </div>
            )
          })}

        </div>
      </div>

      <style>{`
      .padding-bottom {
        padding-bottom: 30px;
      }

        .wrapper-wrapper {
          flex-grow: 1;
        display: flex;
          overflow: scroll;
        }

        .collection-wrapper {
          padding-bottom: 24px;
        }
      `}</style>
    </div>
  )

}

export default Collection