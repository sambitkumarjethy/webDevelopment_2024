import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parrent component Did Mount");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass
          name={"Sambit Jethy ( Class ) "}
          location={"Deharadun (Class)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       <UserClass
//         name={"Sambit Jethy ( Class ) "}
//         location={"Deharadun (Class)"}
//       />
//     </div>
//   );
// };
export default About;
