import React, { Component } from "react";
import { getFunName } from "../helpers.js";

class StorePicker extends Component {
  myInput = React.createRef();

  //method attached as property to the instance. 'this' --> instance
  goToStore = e => {
    e.preventDefault();

    const storeName = this.myInput.value.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
