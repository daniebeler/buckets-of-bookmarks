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
          <a target="_blank" href={props.url} rel="noreferrer">
            <h2 className='name'>{props.name}</h2>
          </a>
          <p>{props.description}</p>
        </div>
      </div>

      <style>{`
        .wrapper {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          margin-top: 24px;
          margib-bottom: 24px;
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

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  )
}

export default Card