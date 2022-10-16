import React from "react";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "Gouravmittal1122@gmail.com"
    };
  }

  render() {
    // ye console se hame pta chalega ki jese hi page repfresh hota RENDER apne aap run hone lgta hai
    console.log("R-render mthods", this.state.email);

    return (
      <div>
        {/* ye let wala jo setName kiya vo run karne ke liye hai */}
        {/* <h1>Render in Life cycle {this.props.name}</h1> */}

        {/* ye email ko update krawane ke liye hai jo ki console me hoga  */}
        <button
          onClick={() => this.setState({ email: "mittal2211@gmail.com" })}
        >
          Email
        </button>
      </div>
    );
  }
}
