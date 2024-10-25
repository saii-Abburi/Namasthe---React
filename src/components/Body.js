import RestrauntCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [filteredListRestraunts, setFilteredListRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const apiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(apiData);
    setFilteredRestraunts(apiData);
    setFilteredListRestraunts(apiData);
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <h1>
        Looks Like You are ofline! check Your internet before accessing the Page
      </h1>
    );
  }

  const promotedRestarauntCard = withPromotedLabel(RestrauntCard);

  if (filteredListRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}value={searchText}></input>
        <button
          onClick={() => {
            let searchResult = filteredRestraunts.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredListRestraunts(searchResult);
          }}
        >
          Search
        </button>
        <button
          className="toprated"
          onClick={() => {
            let filtered = filteredRestraunts.filter(
              (info) => info.info.avgRating >= 4.2
            );
            setFilteredListRestraunts(filtered);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {filteredListRestraunts.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restauarants/" + restaurant.info.id}>
              {(restaurant.info.promoted)? <promotedRestarauntCard info={restaurant}/> : <RestrauntCard  info={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
