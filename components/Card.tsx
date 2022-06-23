import Link from 'next/link'

const Card = (props: any) => {
  return (
    <div className='container-fluid wrapper'>
      <div className="row">
        <div className="col">
          <img src={'/images/' + props.img} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link href={props.url}>
          <h2 className='name'>{props.name}</h2>
          </Link>
          <p>{props.description}</p>
        </div>
      </div>

      <style>{`
        .wrapper {
          background-color: #eeeeee;
          border-radius: 10px;
        }

        .name:hover {
          cursor: pointer;
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          margin-top: 24px;
        }
      `}</style>
    </div>
  )
}

export default Card