import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { Icon } from '@shopify/polaris';
import { CodeMajor, CashDollarMajor, SmileyJoyMajor, CartMajor } from '@shopify/polaris-icons';

const Card = (props: any) => {
  return (
    <div className={styles.outerwrapper}>
      <div className={styles.wrapper}>
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
                    <div key={item.name} className='green_icon'>
                      <Icon source={SmileyJoyMajor} />
                    </div>
                  )
                } else if (item.name === "os") {
                  return (
                    <div key={item.name} className='gray_icon'>
                      <Icon source={CodeMajor} />
                    </div>
                  )
                } else if (item.name === "freemium") {
                  return (
                    <div key={item.name} className='orange_icon'>
                      <Icon source={CartMajor} />
                    </div>
                  )
                } else if (item.name === "paid") {
                  return (
                    <div key={item.name} className="red_icon">
                      <Icon source={CashDollarMajor} />
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a target="_blank" href={props.url} rel="noreferrer">
              <h2 className={styles.name}>{props.name}</h2>
            </a>
            <p className='m-0 pt-1'>{props.description}</p>
          </div>
        </div>
      </div>


      <style>{`
        .Polaris-Icon {
          display: block;
          height: 1.5rem;
          width: 1.5rem;
          max-height: 100%;
          max-width: 100%;
          margin-bottom: 5px;
        }

        .green_icon .Polaris-Icon__Svg {
          fill: green;
        }
        
        .orange_icon .Polaris-Icon__Svg {
          fill: orange;
        }
        
        .red_icon .Polaris-Icon__Svg {
          fill: red;
        }
        
        .gray_icon .Polaris-Icon__Svg {
          fill: gray;
        }
      `}</style>
    </div>
  )
}

export default Card