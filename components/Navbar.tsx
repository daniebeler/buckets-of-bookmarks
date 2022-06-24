import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
      <h2 className="p-2 m-0">Collections</h2>
      </Link>
      <hr className="m-0" />
    </div>

  )
}

export default Navbar;