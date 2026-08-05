
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Cart() {
  const items = useSelector((state) => state.cart.items);

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


}

export default Cart;
