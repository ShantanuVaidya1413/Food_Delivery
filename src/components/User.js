import { useState } from "react";

const User = (props) => {
    
    const [count,setCount] = useState(0);
    
    return(
        <div className="user">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increment Count</button>
            <h2>Name: {props.name}</h2>
            <h4>Location: Pune</h4>
            <h6>Handle: LinkedIn</h6>
        </div>
    )
};

export default User;