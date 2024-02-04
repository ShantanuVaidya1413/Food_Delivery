import LOGO_URL from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {

    const [btnName, setBtnName]= useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-green-100 items-center shadow-lg">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL}/>
            </div>
            <div className="flex justify-between">
                <ul className="flex align-middle">
                    <li className="p-4">Internet:{onlineStatus?"Online":"Offline"}</li>
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About us</Link></li>
                    <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4">Cart</li>
                    <button className="border-black border rounded-lg border-solid p-4 hover:bg-green-200 mr-8" onClick={() => {
                        btnName=="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;