import useRestarauntMenu from "../utils/useRestarauntMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestarauntMenu = () => {
  const { resid } = useParams();
  const restaurantMenu = useRestarauntMenu(resid);

  // let itemCards =restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

  // console.log(restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const [showIndex , setShowIndex] = useState(0 );
  let categoryCards =
    restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categoryCards);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="restaurantmenu">
      <h4 id="topaddress">
        Home/{restaurantMenu.cards[2].card.card.info.city}/
        {restaurantMenu?.cards[0]?.card?.card?.text}
      </h4>
      <h1>{restaurantMenu?.cards[0]?.card?.card?.text}</h1>
      <h3 id="order">Order Online</h3>
      <hr></hr>
      <br></br>
      <div className="review">
        <h2>
          {restaurantMenu.cards[2].card.card.info.avgRating}stars(
          {restaurantMenu.cards[2].card.card.info.totalRatingsString}){" "}
          <span>
            {restaurantMenu.cards[2].card.card.info.costForTwoMessage}
          </span>
        </h2>
        <h3>{restaurantMenu.cards[2].card.card.info.cuisines.join(" ")}</h3>
        <p>
          Outlet <span>{restaurantMenu.cards[2].card.card.info.areaName}</span>
        </p>
        <p>
          {restaurantMenu.cards[2].card.card.info.sla.minDeliveryTime}-
          {restaurantMenu.cards[2].card.card.info.sla.maxDeliveryTime} mins
        </p>
      </div>
      <h4> Get the best deals to you</h4>
      <h2 id="menu">Menu</h2>
      {categoryCards.map((card, index) => (
        <ResCategory key={card.card.card.title} 
        card={card} showItems={index === showIndex ? true : false}  setShowIndex = {()=> setShowIndex(index)}/>
      ))}
    </div>
  );
};

export default RestarauntMenu;
