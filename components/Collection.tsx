import Card from "./Card"


const Collection = (props) => {

  return (
    <div>
      <div className='container pt-5'>
        <div className='row'>
          {props.data.map((item) => {
            return (
              <div key={item.name} className='col-4'>
                <Card name={item.name} description={item.description} />
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