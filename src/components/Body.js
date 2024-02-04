import RestCard, {UpdatedCard} from "./RestCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchFilteredList, setSearchFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const UpdatedRestCard = UpdatedCard(RestCard);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data= await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5362084&lng=73.8939748&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
      headers: {
        'x-cors-api-key': 'temp_3c11727c8da118476062453e61fb3eb9'
        }
    });
    
    const json = await data.json();
    
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setSearchFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }; 

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false) return(<h1>YOU ARE OFFLINE!!</h1>);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter align-middle">
              <input className="input border border-solid p-4 m-4 rounded-lg" type="text" placeholder="Search by restaurant name or cuisine" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
              <button className="border-black border rounded-lg border-solid p-4 bg-green-100 hover:bg-green-200" onClick={()=>{
                const searchFiltered = listOfRestaurants.filter(
                  (res)=> {
                    const restMatch = res.info.name.toLowerCase().includes(searchText.toLowerCase());

                    const cuisineMatch = res.info.cuisines.some((cuisine)=>cuisine.toLowerCase().includes(searchText.toLowerCase()));

                    return restMatch || cuisineMatch;
                  }
                );
                setSearchFilteredList(searchFiltered);
                
              }}>Search</button>

              <button
              onClick={()=>{
                
                const filteredlist = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                console.log("filteredlist");
                setSearchFilteredList(filteredlist);
            }}
            className="m-4 border-black border rounded-lg border-solid p-4 bg-green-100 hover:bg-green-200">Top Rated restaurants</button>
            </div>
            <div className="rest-container flex flex-wrap p-4 m-4 bg-green-50">
                {searchFilteredList.map((restaurant) => {
                  return (<Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                    {<RestCard resData={restaurant} />}
                    </Link>
                  )
                })}
                {console.log(searchFilteredList)};
            </div>
        </div>
    )
}

export default Body;