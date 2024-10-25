import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { clearCart } from "../utils/cartSlice";
import logo from '../assets/logo.avif';
import { Link } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }
  if(cartItems.length ===0){
    return (
        <div className="cart-empty">
            <img src={logo}></img>
            <h2>Your cart is empty</h2>
            <p>You can go to home page to view more restaurants</p>
            <Link to="/"><button>See All NearBy restauarants</button></Link>
        </div>
    )
}


  return (
    <div className="cart">
      <h1>CART</h1>
      
      <button className="clearcart" onClick={handleClearCart}>clearCart</button>
      <div className="cart-items">
        <ul>
        {cartItems.map((item, index) => {
          return <Menu key={index} card={item.card} />;
        })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
