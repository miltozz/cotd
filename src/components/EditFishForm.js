import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.currentTarget);
    // console.log(this.props.myKey);
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    // console.log(updatedFish);
    this.props.onUpdateFish(updatedFish, this.props.myKey);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => this.props.onDeleteFish(this.props.myKey)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
