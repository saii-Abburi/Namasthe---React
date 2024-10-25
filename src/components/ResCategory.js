import Menu from "./Menu";

const ResCategory = ({ card, showItems , setShowIndex }) => {
  // console.log(showItems);
  // console.log(card)  // Check if showItems is being passed correctly
  const handleClick = ()=>{
    setShowIndex();
  };

  return (
    <div className="category">
      <div className="category-header" onClick={handleClick}>
        <h1>
          {card.card.card.title} ({card.card.card.itemCards.length})
        </h1>
        <span>⬇️</span>
      </div>

      {showItems && (
        <div key={card.card.card.title}>
          <ul>
            {card.card.card.itemCards.map((item) => {
              return <Menu key={item.card.info.id} card={item.card} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResCategory;

