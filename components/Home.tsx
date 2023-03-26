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

            <div className={styles.producthunt_wrapper}>
              <a href="https://www.producthunt.com/posts/buckets-of-bookmarks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-buckets&#0045;of&#0045;bookmarks" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385741&theme=light" alt="Buckets&#0032;Of&#0032;Bookmarks - An&#0032;ever&#0045;growing&#0032;collection&#0032;of&#0032;useful&#0032;websites&#0032;and&#0032;tools | Product Hunt" /></a>
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