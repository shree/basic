import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import UserMessages from "./userMessages";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/checkLogin'
    })
    .then((data)=> {
      this.setState({
        user: data
      });
    })
    .fail((err) => {
      this.setState({
        user: {}
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user}/>
        <Home user={this.state.user}/>
      </div>
    );
  }
}
