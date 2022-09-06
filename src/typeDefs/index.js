const { gql } = require("apollo-server");

const typeDefs = gql`
  type Category {
    name: String!
  }

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
    numberOfQuestions: Int!
    categories: [Category]
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

  input CategoryInput {
    name: String!
  }

  input QuestionInput {
    question: String!
    options: [String!]
    correctAnswer: String!
  }

  input CreateQuizInput {
    numberOfQuestions: Int!
    categories: [CategoryInput]
    difficulty: String!
    type: String!
    questions: [QuestionInput]
  }

  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createQuiz(createQuizInput: CreateQuizInput!): QuizResponse
  }
`;

module.exports = typeDefs;
