import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo:{
        name : "Dummy",
        location:"default"
      },
    };
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/saii-Abburi");
    const json = await data.json();
    this.setState({
      userinfo : json,
    });
  }
  render() {
    const { name, location  , avatar_url,twitter_username} = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact</h4>
        <p>Twitter: {twitter_username}</p>
      </div>
    );
  }
}

export default UserClass;
