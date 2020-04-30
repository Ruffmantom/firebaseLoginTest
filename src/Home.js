import React, {Component} from "react";
import fire from "./config/fire";

class Home extends Component{
    
constructor(props){
    super(props)
    this.state={
       user: props.user
    }
}
logout(){
    fire.auth().signOut();
}
    render(){
        return(
            <div>
          <h2>Welcome back {this.state.user.email}! you are now logged in!</h2>
          <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;