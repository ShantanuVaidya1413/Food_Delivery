import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);
    const [showItem, setShowItem] = useState(true);

    const {resId} = useParams();

    const {resInfo} = useRestaurantMenu(resId);

    // console.log(resInfo);
    if(resInfo == null){ 
        return(<Shimmer/>);
    }

    const category = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const {name, costForTwoMessage,cuisines} = resInfo?.data?.cards[0]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {category.map((category, index)=>
                <RestaurantCategory key={category?.card?.card?.title} 
                showItem= {index===showIndex && showItem} 
                setShowIndex={()=>setShowIndex(index)}
                data={category?.card?.card}
                setShowItem={()=>setShowItem(showItem)}/> 
            )}
        </div>
    )
};

export default RestaurantMenu;

