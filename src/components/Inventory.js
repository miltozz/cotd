import React, { Component } from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
      <h2>Inventory</h2>
        <AddFishForm onAddFish = {this.props.onAddFish} />
        <button onClick={this.props.loadSampleFishes}>LOAD SAMPLE FISHES</button>
      </div>
    );
  }
}

export default Inventory;
