import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'
import './layouts/navbar'
import Navbar from './layouts/navbar'
import Hero from './layouts/hero'
import FindMe from './layouts/findme'
import Boxes from './layouts/boxes'
import Projects from './layouts/projects'
import AnyProject from './layouts/anyproject'
import HireMe from './layouts/hireme'
import Tools from './layouts/tools'
import  AudioSection from './layouts/music'
import Footer from './layouts/footer'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Navbar/>
 <Hero/>
 <FindMe/>
 <Boxes/>
<Projects/>
<AnyProject/>
<HireMe/>
<Tools/>
<AudioSection/>
<Footer/>
  </StrictMode>,
)
