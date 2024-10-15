import { useState } from 'react'
import About from './components/About.jsx'
import Categories from './components/Categories.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Nav from './components/Nav.jsx'
import Testimonials from './components/Testimonials.jsx'

import Cred from './components/Cred.jsx'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-background'>
      <Nav />
      <Hero />
      <Categories />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
      <Cred />
    </div>
  )
}

export default App
