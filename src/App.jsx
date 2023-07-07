import './index.css'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ProjectPage } from '@/pages/Projects'
import { SkillPage } from '@/pages/Skills'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'


function App() {


  return (
    <div className=" w-screen bg-black font h-screen">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <SkillPage/>
      <ProjectPage/>
      <Footer/>
    </div>
  )
}

export default App
