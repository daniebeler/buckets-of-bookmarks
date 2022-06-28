import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <div className="footer">
          <div className="row">
            <div className="col">
              <p className="m-0 headline">Developed by
                <Link href="https://daniebeler.com">
                  <strong className="link"> Daniel Hiebeler</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`

      .footer-wrapper {
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1140px;
      }

      .footer {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
      }

      .headline {
        text-align: center;
        padding: 10px
      }

      .link {
        cursor: pointer;
      }
      `}</style>
    </div>

  )
}

export default Footer;