import { Routes , BrowserRouter , Route } from "react-router-dom"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Home from "./components/pages/Home"
import Keranjang from "./components/pages/Keranjang"
import Pesanan1 from "./components/pages/Pesanan1"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/keranjang" element={<Keranjang/>} />
      <Route path="/pesanan" element={<Pesanan1/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App