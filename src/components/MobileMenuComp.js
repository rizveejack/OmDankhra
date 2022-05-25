import { Link } from 'react-router-dom'


const MobileMenuComp = ({ setMtoggle }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gradient-to-r from-blue-200 via-pink-100 to-blue-400 min-h-screen flex items-start justify-center text-center py-10">
      <nav className="flex flex-col justify-center items-center space-y-10 absolute">
        <div
          className="text-7xl top-0 right-0 pb-5"
          onClick={() => setMtoggle(false)}
        >
          x
        </div>
        <div className="text-6xl cursor-pointer">
          <Link to="/" onClick={() => setMtoggle(false)}>
            Icon
          </Link>
        </div>
        <div className="flex flex-col justify-center items-centertext-3xl space-y-7">
          <span className="hover:underline cursor-pointer">
            <Link to="/about" onClick={() => setMtoggle(false)}>
              About Us
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/story" onClick={() => setMtoggle(false)}>
              Story
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/help" onClick={() => setMtoggle(false)}>
              Get Help
            </Link>
          </span>
          <span className="text-4xl hover:underline cursor-pointer">
            <Link to="/signin" onClick={() => setMtoggle(false)}>
              Sign In
            </Link>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default MobileMenuComp
