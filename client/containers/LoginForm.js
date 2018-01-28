import { graphql, compose } from "react-apollo";
import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthForm from "../components/AuthForm";
import LoginUser from "../queries/Login";
import CurrentUser from "../queries/Current";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillMount() {
    if (this.props.data.current) {
      this.onLoggedIn();
    }
  }

  componentWillUpdate(next) {
    if (!this.props.data.current && next.data.current) {
      this.onLoggedIn();
    }
  }

  onLoggedIn() {
    this.props.history.push("/dashboard");
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUser }]
      })

      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={e => this.onSubmit(e)} />
      </div>
    );
  }
}

Main.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired
};

export default compose(graphql(LoginUser), graphql(CurrentUser))(Main);
