import Image from 'next/image'
import { Icon } from '@shopify/polaris';
import { CodeMajor, CashDollarMajor, SmileyJoyMajor, CartMajor } from '@shopify/polaris-icons';

const Card = (props: any) => {
  return (
    <div className='outer-wrapper'>
      <div className='wrapper'>
        <div className="row">
          <div className="col-auto">
            <Image
              src={'/images/' + props.img}
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className='col'>
            {
              props.tags && props.tags.map((item: any) => {
                if (item.name === "free") {
                  return (
                    <div key={item.name} className="green-icon">
                      <Icon source={SmileyJoyMajor} />
                    </div>
                  )
                } else if (item.name === "os") {
                  return (
                    <div key={item.name} className="gray-icon">
                      <Icon source={CodeMajor} />
                    </div>
                  )
                } else if (item.name === "freemium") {
                  return (
                    <div key={item.name} className="orange-icon">
                      <Icon source={CartMajor} />
                    </div>
                  )
                } else if (item.name === "paid") {
                  return (
                    <div key={item.name} className="red-icon">
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
              <h2 className='name m-0'>{props.name}</h2>
            </a>
            <p className='m-0 pt-1'>{props.description}</p>


          </div>
        </div>
      </div>


      <style>{`
        .outer-wrapper {
          padding-bottom: 20px;
          height: 100%
        }

        .wrapper {
          background-color: #fff;
          border-radius: 10px;
          border: #111 solid 2px;
          margin: 0;
          height: 100%;
          padding: 20px;
        }

        .name {
          font-size: 1.3rem;
        }

        .name:hover {
          cursor: pointer;
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          border: #111 solid 2px;
          margin-bottom: 8px;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .Polaris-Icon {
          display: block;
          height: 1.5rem;
          width: 1.5rem;
          max-height: 100%;
          max-width: 100%;
        }

        .green-icon .Polaris-Icon__Svg {
          fill: green;
        }

        .orange-icon .Polaris-Icon__Svg {
          fill: orange;
        }

        .red-icon .Polaris-Icon__Svg {
          fill: red;
        }

        .gray-icon .Polaris-Icon__Svg {
          fill: gray;
        }
      `}</style>
    </div>
  )
}

export default Card