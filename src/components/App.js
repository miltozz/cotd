import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addFish = fish => {
    console.log("Adding fish!");
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
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
              return <Fish key={key} details={this.state.fishes[key]} />;
            })}
          </ul>
        </div>
        <Order />
        <Inventory
          onAddFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
