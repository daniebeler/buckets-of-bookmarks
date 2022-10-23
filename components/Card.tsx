import Image from 'next/image'

const Card = (props: any) => {
  return (
    <div className='outer-wrapper'>
      <div className='wrapper'>
        <div className="row">
          <div className="col">
            <Image
              src={'/images/' + props.img}
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className='col'>
            {
              props.tags && props.tags.map((item: any) => {
                return (
                  <div key={item.name}>
                    <p className='m-0 text-blue-600'>{item.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a target="_blank" href={props.url} rel="noreferrer">
              <h2 className='name'>{props.name}</h2>
            </a>
            <p className='m-0'>{props.description}</p>


          </div>
        </div>
      </div>


      <style>{`
        .outer-wrapper {
          padding-top: 20px;
          height: 100%
        }

        .wrapper {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
          margin: 0;
          height: 100%;
          padding: 24px;
        }

        .name:hover {
          cursor: pointer;
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  )
}

export default Card