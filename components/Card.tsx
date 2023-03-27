import Image from 'next/image'
import styles from '../styles/Card.module.scss'

const Card = (props: any) => {
  return (
    <div className={styles.outerwrapper}>
      <a className={styles.wrapper} target="_blank" href={props.url} rel="noreferrer">
        <div className="row">
          <div className="col-auto">
            <Image
              src={'/images/' + props.img}
              alt=""
              width={80}
              height={80}
              className={styles.img}
            />
          </div>
          <div className='col'>
            {
              props.tags && props.tags.map((item: any) => {
                if (item.name === "free") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_free} >
                      FREE
                    </div>
                  )
                } else if (item.name === "os") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_os} >
                      OPEN SOURCE
                    </div>
                  )
                } else if (item.name === "freemium") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_freemium} >
                      FREEMIUM
                    </div>
                  )
                } else if (item.name === "paid") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_paid} >
                      PAID
                    </div>
                  )
                } else if (item.name === "rss") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_rss} >
                      RSS
                    </div>
                  )
                } else if (item.name === "pwa") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_pwa} >
                      PWA
                    </div>
                  )
                } else if (item.name === "android") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_android} >
                      ANDROID
                    </div>
                  )
                } else if (item.name === "ios") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_ios} >
                      IOS
                    </div>
                  )
                } else if (item.name === "tailwind") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_tailwind} >
                      TAILWIND
                    </div>
                  )
                } else if (item.name === "react") {
                  return (
                    <div key={item.name} className={styles.badge + ' ' + styles.badge_react} >
                      REACT
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className={styles.name}>{props.name}</h2>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card