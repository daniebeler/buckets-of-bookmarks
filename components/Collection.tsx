import Card from "./Card"


const Collection = (props: any) => {

  return (
    <div>
      <div className='container pt-5'>
        <div className='row'>
          {props.data.map((item: any) => {
            return (
              <div key={item.name} className='col-4'>
                <Card name={item.name} description={item.description} url={item.url} img={item.img} />
              </div>
            )
          })
          }


        </div>
      </div>

      <style>{`
        .header-wrapper {
          background-color: #f0eefd;
          padding: 50px 0 50px 0
        }
      `}</style>
    </div>
  )

}

export default Collection