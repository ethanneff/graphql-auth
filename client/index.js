// libs
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router } from "react-router-dom";

// components
import App from "./containers/App";

// apollo
const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    credentials: "same-origin"
  }),
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  })
});

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Main />, document.querySelector("#root"));
