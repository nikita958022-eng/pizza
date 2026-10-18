import { useSelector } from 'react-redux'
import {Link} from 'react-router'
 
function NavBar() {
  const totalQuantity = useSelector((state)=>state.cart.items.reduce((total,item)=>total + item.quantity, 0))

  return (
    <div >
        <nav className='navbar'>
      <Link to={'/'} className='navbar-brand'>🍕 Slice & Dice
</Link>
<Link to={'/cart'} className='navbar-cart'>Cart
{totalQuantity>0 && <span className='cart-badge'>{totalQuantity}</span>} </Link>
 </nav>
    </div>
  )
}

export default NavBar