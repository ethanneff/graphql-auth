import { graphql } from "react-apollo";
import React, { Component } from "react";
import CurrentUser from "../queries/Current";
import PropTypes from "prop-types";

export default WrappedComponent => {
  class Main extends Component {
    componentWillUpdate(next) {
      if (!next.data.loading && !next.data.current) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Main.propTypes = {
    history: PropTypes.shape().isRequired,
    data: PropTypes.shape().isRequired
  };

  return graphql(CurrentUser)(Main);
};
