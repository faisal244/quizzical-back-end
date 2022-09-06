const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type SignupSuccess {
    success: Boolean!
  }

  type LoginSuccess {
    success: Boolean!
    token: String!
    user: User!
  }

  # type Quiz {}

  type Query {
    foo: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  # input CreateQuizInput {}

  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    # createQuiz(createQuizInput: CreateQuizInput!): Quiz
  }
`;

module.exports = typeDefs;
