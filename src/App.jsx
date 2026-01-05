import './App.css'
import Navbar from './components/navbar'
import Home from './components/home.jsx'
import Mission from './components/mission.jsx'
import Vision from './components/vision.jsx'
import Impact from './components/impact.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Home />
        <Mission />
        <Vision />
        <Impact />
        <Footer />
      </div>
    </>
  )
}

export default App