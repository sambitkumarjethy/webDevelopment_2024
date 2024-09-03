import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(props);
    console.log(this.props.name + "child constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component Did Mount");
    // API Call

    const data = await fetch("https://api.github.com/users/sambitkumarjethy");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timmer = setInterval(() => {
      console.log("Namste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }
  componentWillUnmount() {
    console.log("component Will UnMount");

    clearInterval(this.timmer);
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    const {
      name: git_name,
      location: git_location,
      avatar_url,
    } = this.state.userInfo;

    console.log("child render called");

    // debugger;
    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            // Never update state directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 * 2,
            });
          }}
        >
          Count Increase
        </button>
        <h2>count2 : {count2}</h2>

        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @jethy_sambit</h4>

        <h3>Git INFO</h3>
        <img src={avatar_url} alt="" height="100" />
        <h2>Name : {git_name}</h2>
        <h3>Location : {git_location}</h3>
      </div>
    );
  }
}

export default UserClass;
