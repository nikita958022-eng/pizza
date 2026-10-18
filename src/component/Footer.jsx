import { Link } from "react-router"
import "./Footer.css";
function Footer() {
  return (
   <footer className="footer">
    <div className="footer-content">
        <h3>🍕 Slice $ Dice</h3>
        <p>Freshly baked pizza, delivered hot to your door.</p>
    </div>

    <div className="footer-col">
        <h4>quick Link</h4>
        <Link to='/'>Menu</Link>
         <Link to='/cart'>Cart</Link>
    </div>

    <div className="footer-col">
        <h4>Contact</h4>
        <p>Lucknow, India</p>
        <p>📞 +91xxxxxxxxxx</p>
        <p>📧 slicedice@gmail.com</p>
    </div>
    <div className="footer-bottom">
        {new Date().getFullYear()}y
        Slice & Dice. All right reserve
    </div>

   </footer>
  )
}

export default Footer