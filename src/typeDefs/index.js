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
  type Question {
    question: String!
    options: [String!]
    correctAnswer: String!
  }
  type LoginSuccess {
    success: Boolean!
    token: String!
    user: User!
  }
  type QuizResponse {
    question: String!
    category: String!
    difficulty: String!
    type: String!
  }
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
  input CreateQuizInput {
    category: String!
    difficulty: String!
    type: String!
  }
  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createQuiz(createQuizInput: CreateQuizInput!): QuizResponse
  }
`;
module.exports = typeDefs;
