import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { info } = props.info;
  console.log(props);

  return (
    <div className="restrocard">
      <img
        src={CDN_URL+info.cloudinaryImageId}
        alt="foodimage"
      />
      <h3>{info.name}</h3>
      <h3>{info.cuisines.join(", ")}</h3>
      <p id="rating">{info.avgRating} Stars</p>
      <p id="addToCart">Add To Cart</p>
      <p>Delivery Time: {info.sla.deliveryTime} Mins</p>
      <p>{info.costForTwo}</p>
    </div>
  );
};  

export const withPromotedLabel = (RestrauntCard)=>{
  return(props)=>  {
    return(
      <div>
        <label>Promoted</label>
        <RestrauntCard {...props}/>
      </div>
    );
  };
};

export default RestrauntCard;