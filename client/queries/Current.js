import gql from "graphql-tag";

export default gql`
  query current {
    current {
      id
      email
    }
  }
`;
