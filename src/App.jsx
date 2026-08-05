import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from "./components/Home"
import OrderConfirmation from "./components/Order-Confirmation";
import Cart from "./components/Cart";
import NavBar from "./component/Navbar";




function App() {
  return (
       <div>
        <NavBar/>
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/orderconfirmation" element={<OrderConfirmation />} />
    </Routes>
    </div>
  

  


    
  )
}

export default App
