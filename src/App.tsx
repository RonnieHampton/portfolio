import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
