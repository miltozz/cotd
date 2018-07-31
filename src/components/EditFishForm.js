import React, { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  static propTypes = {
    myKey: PropTypes.string,
    onUpdateFish: PropTypes.func,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    })
  };

  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.currentTarget);
    // console.log(this.props.myKey);
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };


    //WHY ????
    //  updatedFish.price becomes a string
    //solution
    updatedFish.price = parseFloat(updatedFish.price);
 
    this.props.onUpdateFish(updatedFish, this.props.myKey);
  };

  render() {
    // const { name, price, status, desc, image } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.onDeleteFish(this.props.myKey)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
