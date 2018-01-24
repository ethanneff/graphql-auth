import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import Current from "../queries/Current";
import Logout from "../queries/Logout";

const Main = props => {
  const logout = () => {
    props.mutate({
      refetchQueries: [{ query: Current }]
    });
  };

  const renderButtons = () => {
    const { current, loading } = props.data;

    if (loading) {
      return <div />;
    } else if (current) {
      return (
        <div>
          <li>
            <a onClick={() => logout()}>Logout</a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav className="nav-wrapper">
      <Link className="brand-logo" to="/">
        Home
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderButtons()}
      </ul>
    </nav>
  );
};

export default compose(graphql(Current), graphql(Logout))(Main);
