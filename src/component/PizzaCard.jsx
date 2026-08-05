

function PizzaCard({pizza}) {
  return (
    <div className='container'>
    <div className="pizza-card">
        <div className="pizza-image">
            <img src={pizza.image} alt={pizza.name} />
        </div>
        <div className="pizza-info">
            <h3>{pizza.name}</h3>
            <p className="pizza-description">{pizza.description}</p>
       <div className="pizza-footer">
        <span className="pizza-price">${pizza.price}</span>
       
        <button className="btn btn-primary">Add to Cart</button>
       </div>
        </div>
    </div>
    </div>
  )
}

export default PizzaCard
