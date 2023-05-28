import Home from "./pages/Home"
import AnimeLamps from "./pages/AnimeLamps"
import Navbar from "./components/Navbar"
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Cigar from "./pages/Cigar"

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/animelamps" element={<AnimeLamps/>} />
      <Route exact path='/cigarboxes' element={<Cigar />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
