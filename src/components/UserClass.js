import React  from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        

        this.state = {
            count:0,
        };
    }

    componentDidMount(){
        
    }

    render(){

        

        return(
            <div className="user">
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increment count</button>
                <h2>Name: {this.props.name}</h2>
                <h4>Location: Pune</h4>
                <h6>Handle: LinkedIn</h6>
            </div>
        )
    }
}

export default UserClass;