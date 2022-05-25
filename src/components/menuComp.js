import { Link } from 'react-router-dom'
import { MenuIcon } from '../lib/icons'


const MenuComp = ({ setMtoggle }) => {
  return (
    <nav className="flex justify-between items-center py-12 px-10 sm:py-4 md:py-4">
      <div className="text-6xl cursor-pointer sm:pl-0 md:pl-0 pl-20">
        <Link to="/">Icon</Link>
      </div>
      <div className="flex justify-end items-center space-x-16 text-3xl sm:hidden">
        <span className="hover:underline cursor-pointer">
          <Link to="/about">About Us</Link>
        </span>
        <span className="hover:underline cursor-pointer">
          <Link to="/story">Story</Link>
        </span>
        <span className="hover:underline cursor-pointer">
          <Link to="/help">Get Help</Link>
        </span>
        <span className="text-4xl hover:underline cursor-pointer">
          <Link to="/signin">Sign In</Link>
        </span>
      </div>
      <div
        className="hidden sm:block text-4xl"
        onClick={() => setMtoggle(true)}
      >
        <MenuIcon />
      </div>
    </nav>
  )
}

export default MenuComp
