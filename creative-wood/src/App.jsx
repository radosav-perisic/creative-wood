import Home from "./pages/Home"
import AnimeLamps from "./pages/AnimeLamps"
import Navbar from "./components/Navbar"
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
// import Cigar from "./pages/Cigar"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import About from "./pages/About"
import Clocks from "./pages/Clocks"
import AllLampsPage from "./pages/AllLampsPage"
// import AllLampsPage from "./pages/AllLampsPage"

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/animelamps" element={<AnimeLamps/>} />
      <Route exact path='/cart' element={<Cart />}/>
      <Route exact path='/about' element={<About />}/>
      {/* <Route exact path='/cigarboxes' element={<Cigar />}/> */}
      <Route exact path='/checkout' element={<Checkout />}/>
      <Route exact path='/clocks' element={<Clocks />}/>
      <Route exact path='/alllamps' element={<AllLampsPage />}/>
      {/* <Route exact path='/AllLampsPage' element={<AllLampsPage />}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
