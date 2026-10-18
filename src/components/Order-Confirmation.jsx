import { Link } from "react-router"


function OrderConfirmation() {
  
  

  return (
    <div className="page">
    <div className="confirmation">
       <h3 className="confirmation-icon">✅</h3>
       
    <h1>  Order Confirmed!</h1>
    
 
   <p>Thank you for your order. Your pizza are on the way.🍕</p>
   <Link to='/' className="btn btn-primary">Oder more
   </Link>
  
    </div>
    </div>
  )
}

export default OrderConfirmation
