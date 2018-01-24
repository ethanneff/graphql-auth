const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");
const UserType = require("../types/user");
const AuthService = require("../../services/auth");
const mongoose = require("mongoose");

const User = mongoose.model("user");

const signup = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, { email, password }, req) {
    return AuthService.signup({ email, password, req });
  }
};

const login = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, { email, password }, req) {
    return AuthService.login({ email, password, req });
  }
};

const logout = {
  type: UserType,
  resolve(parentValue, args, req) {
    return AuthService.logout({ req });
  }
};

const self = {
  type: UserType,
  resolve(parentValue, args, req) {
    return req.user;
  }
};

const users = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find({});
  }
};

const user = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    id: { type: GraphQLID }
  },
  resolve(parentValue, { email, id }) {
    if (id) return User.findById(id);
    return User.findOne({ email });
  }
};

module.exports = { users, user, signup, login, logout, self };
