import Hero from '../components/Hero'
import Skills from '../pages/Skills'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Sidebar from '../components/Sidebar'
import Contact from './Contact'


const Landing = () => {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Landing
