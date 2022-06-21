import Card from "./Card"


const Collection = () => {

  const fief = [
    {
      'name': 'Happy Hues',
      'description': 'Curated colors in context'
    },
    {
      'name': 'Duo',
      'description': 'Curated colors in context'
    },
    {
      'name': 'Adobe Colour',
      'description': 'Curated colors in context'
    }
  ]

  return (
    <div>
      <div className="container-fluid header-wrapper">
        <div className="container">
          <h1>Design Tools</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <div className='container pt-5'>
        <div className='row'>
          {/* {fief.map((item) => {
              <div className='col-4'>
                <Card name={item.name} />
              </div>
            })
          } */}

          
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