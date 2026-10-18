import PizzaCard from "../component/PizzaCard";
import {pizzas} from '../data/Pizza'

function Home() {
  return (
    <div className="page">
      <h1 className="page-title">Our Pizzas</h1>
      <p className="page-subtitle">Freshly baked, just for you</p>
      <div className="pizza-grid">
        {pizzas.map((pizza) => {
          return <PizzaCard key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
}

export default Home; 
