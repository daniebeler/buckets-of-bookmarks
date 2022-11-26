import Card from "./Card"
import styles from '../styles/Collection.module.css'

const Collection = (props: any) => {
  return (
    <div>
      <div className={'container-fluid ' + styles.collection_wrapper}>
        <div className='row'>
          {props.data.map((item: any) => {
            return (
              <div key={item.name} className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2'>
                <Card name={item.name} description={item.description} url={item.url} img={item.img} tags={item.tags} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection