import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="Login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In with Github
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In with Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Log In with Twitter
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};
export default Login;
