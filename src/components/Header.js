import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import image from "../assets/image.png";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlinestatus = useOnlineStatus();
  const loggedInUser = useContext(userContext);
  
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems) 
  return (
    <header className="header flex justify-around items-center text-xl">
      <div>
        <img src={LOGO_URL} alt="logo"  className="w-24"/>
      </div>
      <div className="navitems ">
        <ul className="flex  gap-8 ">
          <li>NetWork : {onlinestatus ? "✅": "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> {cartItems.length}</Link></li>
          <li>{loggedInUser}</li>
          <button className="login" onClick={() => {
            if(btnName === "Login"){
              setBtnName("Logout")
            }
            else{
              setBtnName("Login")
            }
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
