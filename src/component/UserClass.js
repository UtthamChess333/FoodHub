import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Uttham",
        location: "kodada",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/UtthamChess333");
    if (data.status === 403) {
      console.log("API rate limit exceeded.");
      return;
    }
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { login, id, avatar_url   } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>id: {id}</h3>
        <h3> {avatar_url}</h3>
      </div>
    );
  }
}

export default UserClass;
