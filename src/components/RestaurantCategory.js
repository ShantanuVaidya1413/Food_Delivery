import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItem, setShowIndex, setShowItem}) => {
    
    // const [showItem,SetShowItem] = useState(false);

    const handleClick = () => {
        setShowIndex(); 
    }

    
    // console.log(data.itemCards);
    return(
        <div>
            {/* Accordion header */}
            <div className="bg-gray-100 shadow-lg w-6/12 mx-auto my-4 p-4">
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
                    <span>⤵️</span>
                </div>
                
                {showItem && <ItemList items={data.itemCards}/>}
            </div>

            
        </div>
    )
}

export default RestaurantCategory;