import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
import { ScrollProvider } from "./providers/ScrollContext"

function App() {
  return (
    <ScrollProvider>
      <Header />
      <main>
        <Home />
        <Projects />
        <AboutMe />
        <Services />
        <Skills />
      </main>
      <Footer />
    </ScrollProvider>
  )
}

export default App
