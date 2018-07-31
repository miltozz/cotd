import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";
import Login from "./Login";
import base, { firebaseApp } from "../base";
import firebase from "firebase";

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    onUpdateFish: PropTypes.func,
    onDeleteFish: PropTypes.func,
    onAddFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  state = {
    owner: null,
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    //1.lookup current store in firebase
    const store = await base.fetch(this.props.storeId, {
      context: this
    });
    // console.log(store);

    //2. claim if no owner
    if (!store.owner) {
      //take it
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3.set state of inventory to reflect current user

    this.setState({
      owner: authData.user.uid,
      uid: authData.user.uid
    });
    // console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null
    });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out</button>;
    if (!this.state.uid) return <Login authenticate={this.authenticate} />;

    if (this.state.owner !== this.state.uid) {
      return (
        <div>
          <p> SORRY FRIEND BUT YOU NOT OWNER, MAN!</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            myKey={key}
            onUpdateFish={this.props.onUpdateFish}
            onDeleteFish={this.props.onDeleteFish}
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
