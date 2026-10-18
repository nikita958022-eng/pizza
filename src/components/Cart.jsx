
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { incrementQuantity,decrementQuantity,removeFromCart,clearCart } from "../slice/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div>
        <h1 className="page-title">Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty. 🍕</p>
          <Link to={"/"} className="btn btn-primary">
            Browse Pizzas
          </Link>
        </div>
      </div>
    );
  }
  0
    return(
      <div >
        <h1 className='page-title'>YourCart</h1>
        <div className="cart-list">
        {items.map((item)=>(
          
            <div className="cart-item" key={item.id}>
             <div className="cart-item-image">
               <img src={item.image} alt={item.name} />
               </div>

               <div className="cart-item-info">
              <h3 >{item.name}</h3>
              <span className="pizza-price">Price: ₹{item.price}</span>
              </div>
              
           
            
         <div className="quantity-controls">
              <button
                className="btn btn-round"
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="btn btn-round"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
            </div>

            <div className="cart-item-total">₹{item.price * item.quantity}</div>

            <button
              className="btn btn-remove"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Details</h2>
        <div className="summary-row">
          <span>Total</span>
          <span className="summary-total">
            &#8377;
            {items.reduce(
              (total, item) => total + item.price * item.quantity,
              0,
            )}
          </span>
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            dispatch(clearCart());
            navigate("/Order-confirmation");
          }}
        >
          Proceed To Checkout
        </button>
        </div>
      </div>);
}
export default Cart;
  