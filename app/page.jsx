import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack" // Import the new component
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack /> {/* Add the TechStack component here */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
