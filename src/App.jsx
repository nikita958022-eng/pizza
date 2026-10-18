import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from "./components/Home"
import OrderConfirmation from "./components/Order-Confirmation";
import Cart from "./components/Cart";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";




function App() {
  return (
       
       <div className="app">
        <NavBar/>
        <main className="container">
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
    </main>
    <Footer/>
    </div>
  
  

  


    
  )
}

export default App
