import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Menu = (props)=>{
  // console.log(props);
  const dispatch = useDispatch();
    const handleAddItem = ()=>{
      dispatch(addItem(props));
    };
    let {card} = props;
    return (
        <li data-testid = "foodItems">
          <div>
            <h2>{card.info.name}</h2>
            <p>₹{card.info.price / 100 ||card.info.defaultPrice/100}</p>
            <p id="rating">
              {card.info.ratings.aggregatedRating.rating}Stars (
              {card.info.ratings.aggregatedRating.ratingCountV2})
            </p>
            <h2 id="desc">{card.info.description}</h2>
          </div>
          <div className="menu-img">
            <img alt="img" src={MENU_URL+card.info.imageId}></img>
            <button onClick={handleAddItem}>Add +</button>
          </div>
        </li>
        
    );
};

export default Menu;