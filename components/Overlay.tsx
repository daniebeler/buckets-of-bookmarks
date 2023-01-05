import Links from "./Links";
import styles from '../styles/Overlay.module.scss';

interface ChildProps {
  toggleMenu: Function
}

const Overlay = (props: ChildProps) => {

  return (
    <div className={styles.overlay_wrapper}>
      <div className={styles.inner_wrapper}>
        <div className="container">
          <div className={styles.header + " row d-flex align-items-center"}>
            <div className="col">
              <h4 className={styles.headline + " m-0 p-0"}>Buckets of Bookmarks</h4>
            </div>
            <div className="col-auto">
              <button onClick={() => props.toggleMenu()}>X</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Links toggleMenu={props.toggleMenu}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay;