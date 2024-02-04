import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {


    return(
        <div>
             {items.map((item)=>(
                <div id={item?.card?.info?.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex">
                    <div className="py-2 w-9/12">
                    <span className="font-semibold">{item?.card?.info?.name}</span>
                    <span className="font-semibold text-lg"> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    <p className="">{item?.card?.info?.description}</p>
                    </div>
                    
                    <img className="w-3/12 mx-4 rounded-lg" src={CDN_URL + item?.card?.info?.imageId}></img>
                    
                    </div>

             ))}
        </div>
    )

}

export default ItemList;