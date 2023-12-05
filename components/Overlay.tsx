import Links from "./Links";

interface ChildProps {
  toggleMenu: Function
}

const Overlay = (props: ChildProps) => {

  return (
    <div className="bg-gray-700 p-4 overflow-auto">
      <div className="w-full flex h-screen">
        <div className="container">
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