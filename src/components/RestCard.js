import { CDN_URL } from "../utils/constants";


const RestCard = (props) => {
    const {resData} = props;
 
    
    const {cloudinaryImageId, name, sla, avgRating, cuisines, areaName, costForTwo} = resData?.info;

    const {deliveryTime} = sla;
     return(
         <div className="p-4 rounded-lg mx-2 hover:bg-green-200 w-72" >
             <img className="res-logo rounded-lg" src={
           CDN_URL +
           cloudinaryImageId
         }/>
             <h3 className="font-bold text-lg">{name}</h3>
             <h4>Located at: {areaName}</h4>
             <h4>{costForTwo}</h4>
             <h4 className="flex flex-wrap">{cuisines.join(', ')}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{deliveryTime} minutes</h4>
         </div>
     )
 }

 export const UpdatedCard = (RestCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-green-950 text-white px-2">Open</label>
                <RestCard {...props}/>
            </div>
        )
    }
 }

 export default RestCard;