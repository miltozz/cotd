import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    console.log("mount");

    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.order !== prevState.order) {
      // console.log("hey!");
      localStorage.setItem(
        this.props.match.params.storeId,
        JSON.stringify(this.state.order)
      );
    }
    // console.log("update");
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addFish = fish => {
    // console.log("Adding fish!");
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });
  };

  updateFish = (fish, key) => {
    // console.log("FAAA");

    // console.log(fish);
    const fishes = { ...this.state.fishes };
    fishes[key] = fish;
    // console.log(fishes);
    this.setState({
      fishes
    });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({
      fishes
    });
  };

  handleDeleteOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({
      order
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    // My code. Seems to work the same
    // order[key] ? order[key]++ : (order[key] = 1);
    order[key] = order[key] + 1 || 1;
    this.setState({
      order
    });
  };
  // ${<Fish fish={this.state.fishes[key]} />}
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh From The Ocean" fishes={this.state.fishes} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => {
              return (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order
          order={this.state.order}
          fishes={this.state.fishes}
          onDeleteOrder={this.handleDeleteOrder}
        />
        <Inventory
          onAddFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          onUpdateFish={this.updateFish}
          onDeleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;
