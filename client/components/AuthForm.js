import React, { Component } from "react";
import PropTypes from "prop-types";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={e => this.onSubmit(e)}>
          <div className="input-field">
            <input
              placeholder="email"
              type="email"
              val={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="password"
              type="password"
              val={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

Main.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired
};

export default Main;
