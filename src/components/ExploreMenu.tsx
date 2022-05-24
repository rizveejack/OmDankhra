import { FC } from 'react'
import { Link } from 'react-router-dom'

interface MenuI {
  setExplore: (x: boolean) => void
}

const ExploreMenu: FC<MenuI> = ({ setExplore }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gradient-to-r from-blue-200 via-pink-100 to-blue-400 min-h-screen flex items-start justify-center text-center py-10">
      <nav className="flex flex-col justify-center items-center space-y-10 absolute">
        <div
          className="text-7xl top-0 right-0 pb-5"
          onClick={() => setExplore(false)}
        >
          x
        </div>
        <div className="text-6xl cursor-pointer">Explore</div>
        <div className="flex flex-col justify-center items-centertext-3xl space-y-7">
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Create your demo
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Upload your demo
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Save your demo
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Template
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Gallery
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Preview
            </Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to="/" onClick={() => setExplore(false)}>
              Manage display
            </Link>
          </span>
        </div>
        <div>
          <Link to="/" onClick={() => setExplore(false)}>
            Tutorial
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default ExploreMenu
