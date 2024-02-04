import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        
        super(props);
    }

    componentDidMount(){
        
        
    }

    render(){

        
        

        return(
            <div>
                <h1>About us</h1>
    
                {/* <User name={"Shantanu Vaidya (func)"}/> */}
                <UserClass name={"first "}/>
                <UserClass name={"Second "}/>
                
            </div>
            
        )
    }
}

export default About;