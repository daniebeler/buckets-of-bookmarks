import styles from '../styles/Home.module.scss';
import Image from 'next/image'
import { House } from "phosphor-react";


const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className={'col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6 ' + styles.left_col}>
            <h1>Buckets Of</h1>
            <h1>Bookmarks</h1>
            <p>An ever-growing collection of useful websites and hidden gems of the internet. Sorted by category and tagged by price.</p>
            {/* <House size='24' /> */}
          </div>
          <div className={'col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6 ' + styles.right_col}>
            <div className={styles.image_wrapper}>
              <Image
                src={'/images/others/ReadingDoodle.svg'}
                alt=""
                fill
                className={styles.img}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;