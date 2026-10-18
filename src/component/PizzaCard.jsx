import {addToCard} from "../slice/cartSlice"
import {useDispatch, useSelector} from "react-redux";

function PizzaCard({pizza}) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    
    <div className="pizza-card">
        <div className="pizza-image">
            <img src={pizza.image} alt={pizza.name} />
        </div>
        <div className="pizza-info">
            <h3>{pizza.name}</h3>
            <p className="pizza-description">{pizza.description}</p>
            </div>
       <div className="pizza-footer">
        <span className="pizza-price">₹{pizza.price}</span>
       
        <button className="btn btn-primary" onClick={()=>{dispatch(addToCard(pizza))
          console.log(items);
          
        }}>Add to Cart</button>


       </div>
        
    </div>
    
  )
}

export default PizzaCard
