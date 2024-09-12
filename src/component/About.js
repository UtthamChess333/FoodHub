import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass
          name={"Uttham Naresh"}
          location={"Telanagana Kodad"}
          contact={8919174512}
        />
        <UserClass
          name={"Uttham Chess"}
          location={"Telanagana Kodad"}
          contact={8919174512}
        />

        <UserContext>
          {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
        </UserContext>
        
      </div>
    );
  }
}



export default About;
