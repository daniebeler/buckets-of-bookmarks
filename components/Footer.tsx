import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <div className="footer container">
          <div className="row">
            <div className="col">
              <p className="m-0 headline">Developed by
                <Link className="link" href="https://daniebeler.com">
                  <strong> Daniel Hiebeler</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`

      .footer-wrapper {
        padding-bottom: 40px;
      }

      .footer {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
      }

      .headline {
        text-align: center;
        padding: 10px
      }

      .link:hover {
        cursor: pointer;
      }
      `}</style>
    </div>

  )
}

export default Footer;