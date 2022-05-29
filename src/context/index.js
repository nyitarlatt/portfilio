import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    projects: true,
    skills: false,
  };

  switchTab = (a, b) => {
    this.setState({
      projects: a,
      skills: b,
    });
    if (a) {
      document.querySelector("#projects").classList.add("active");
      document.querySelector("#skills").classList.remove("active");
    } else {
      document.querySelector("#projects").classList.remove("active");
      document.querySelector("#skills").classList.add("active");
    }
    console.log(this.state);
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            switchTab: this.switchTab,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };
