import styles from '../styles/Home.module.css'

const Card = (props: any) => {
  return (
    <div className='container-fluid wrapper'>
      <div className="row">
        <div className="col">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>

      <style>{`
        .wrapper {
          background-color: #eeeeee;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default Card