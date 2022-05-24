import { FC } from 'react'
import DownIcon from '../lib/icons'

interface MenuI {
  setExplore: (x: boolean) => void
}

const Home: FC<MenuI> = ({ setExplore }) => {
  return (
    <div className="flex justify-start space-x-20 sm:space-x-0 sm:flex-col md:flex-col">
      <div className="hidden justify-center items-center text-2xl py-4 sm:flex md:flex">
        <span onClick={() => setExplore(true)}>Explore</span>
        <span>
          <DownIcon />
        </span>
      </div>
      <div className="flex flex-col space-y-20 text-2xl text-center min-w-fit sm:hidden">
        <div className="text-4xl">Explore</div>
        <div className="flex flex-col space-y-10">
          <div>Create your demo</div>
          <div>Upload your demo</div>
          <div>Save your demo</div>
          <div>Template</div>
          <div>Gallery</div>
          <div>Preview</div>
          <div>Manage display</div>
        </div>
        <div>Tutorial</div>
      </div>
      <div className="flex-grow">
        <div className="masonry sm:masonry-sm md:masonry-md">
          <div className="rounded-lg p-2 break-inside">
            <img
              src="/images/p3.jpg"
              alt="p3"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
          <div className="rounded-lg p-2 break-inside">
            <img
              src="/images/p2.jpg"
              alt="p2"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
          <div className="rounded-lg p-2 break-inside">
            <img
              src="/images/p1.jpg"
              alt="p1"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
          <div className="rounded-lg p-2 break- inside">
            <img
              src="/images/p6.jpg"
              alt="p6"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
          <div className="rounded-lg p-2 break-inside">
            <img
              src="/images/p5.jpg"
              alt="p5"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
          <div className="rounded-lg p-2 break-inside">
            <img
              src="/images/p4.jpg"
              alt="p4"
              className="rounded-md hover:scale-95 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
