import React, { Component } from "react";
import { getFunName } from "../helpers.js";
import PropTypes from "prop-types";

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object
  };

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
