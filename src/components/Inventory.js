import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            myKey={key}
            onUpdateFish={this.props.onUpdateFish}
            onDeleteFish = {this.props.onDeleteFish}
            fish={this.props.fishes[key]}
          />
        ))}
        <AddFishForm onAddFish={this.props.onAddFish} />
        <button onClick={this.props.loadSampleFishes}>
          LOAD SAMPLE FISHES
        </button>
      </div>
    );
  }
}

export default Inventory;
