import { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ExploreMenu from './components/ExploreMenu'
import MenuComp from './components/menuComp'
import MobileMenuComp from './components/MobileMenuComp'
import About from './pages/About'
import GetHelp from './pages/GetHelp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Story from './pages/Story'

const App: FC = () => {
  const [mtoggle, setMtoggle] = useState(false)
  const [explore, setExplore] = useState(false)
  return (
    <div className="bg-gradient-to-r from-blue-200 via-pink-100 to-blue-400 min-h-screen font-irish relative">
      <div className="container mx-auto px-20 sm:px-0 md:px-0">
        <MenuComp setMtoggle={setMtoggle} />
        {/* add all routs that you want to display */}
        <Routes>
          <Route path="/" element={<Home setExplore={setExplore} />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<GetHelp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="story" element={<Story />} />
        </Routes>
      </div>
      <div className="p-10 sm:p-0 md:p-0"></div>
      {mtoggle && <MobileMenuComp setMtoggle={setMtoggle} />}
      {explore && <ExploreMenu setExplore={setExplore} />}
    </div>
  )
}

export default App
