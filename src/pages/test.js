import React, { Component } from "react";
import { render } from "react-dom";

import Programminglanguage from "./Blogpost/Programminglanguage";
import Scriptinglanguage from "./Blogpost/Scriptinglanguage";
import Markup from "./Blogpost/Markup";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
      // default:
      //   null;
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Programminglanguage />}
        <hr />
        {showHideDemo2 && <Scriptinglanguage />}
        <hr />
        {showHideDemo3 && <Markup />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.hideComponent("showHideDemo2")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => this.hideComponent("showHideDemo3")}>
            Click to hide Demo3 component
          </button>
        </div>
      </div>
    );
  }
}

export default Blog;