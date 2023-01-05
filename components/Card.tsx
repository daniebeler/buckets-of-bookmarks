import Image from 'next/image'
import styles from '../styles/Card.module.scss'
import { Smiley, CurrencyCircleDollar, Code, ShoppingCart } from "phosphor-react";

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
                    <div key={item.name}>
                      <Smiley size='24' color='green' />
                    </div>
                  )
                } else if (item.name === "os") {
                  return (
                    <div key={item.name} >
                      <Code size='24' color='gray' />
                    </div>
                  )
                } else if (item.name === "freemium") {
                  return (
                    <div key={item.name}>
                      <ShoppingCart size='24' color='orange' />
                    </div>
                  )
                } else if (item.name === "paid") {
                  return (
                    <div key={item.name}>
                      <CurrencyCircleDollar size='24' color='red' />
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <div className="row">
          <div className="col">
              <h2 className={styles.name}>{props.name}</h2>
            <p className='m-0 pt-1'>{props.description}</p>
          </div>
        </div>
      </a>

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