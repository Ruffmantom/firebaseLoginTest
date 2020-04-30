import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from "./config/fire"
import Home from "./Home";
import Login from "./Login";
require('dotenv').config()

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }

authListener(){
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user})
    } else{
      this.setState({user: null})
    }
  })
}

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home user={this.state.user}/>) : (<Login/>)}
      </div>
    );
  }
}



export default App;
