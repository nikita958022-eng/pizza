import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
   <Link to={'/'} className='navbar-brand'>🍕 Slice $ Dice</Link>
   <Link to={'/Cart'} className='navbar-cart'>Cart</Link>
    </nav>
  );
}

export default Navbar;
