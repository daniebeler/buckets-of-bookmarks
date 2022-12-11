import styles from '../styles/Home.module.scss';
import Image from 'next/image'
import { FileCode } from "phosphor-react";


const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container-fluid h-100">
        <div className={"row " + styles.main_row}>
          <div className={'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 ' + styles.left_col}>
            <h1>Buckets Of</h1>
            <h1>Bookmarks</h1>
            <p>An ever-growing collection of useful websites and hidden gems of the internet. Sorted by category and tagged by price.</p>
            <div className={styles.github_outer_wrapper}>
              <a className={styles.github_wrapper} target="_blank" href='https://github.com/daniebeler/buckets-of-bookmarks' rel="noreferrer">
                <FileCode size='24' color='#111' />
              </a>
            </div>
          </div>
          <div className={'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 ' + styles.right_col}>
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