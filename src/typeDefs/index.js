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
		incorrectAnswers: [String!]
		correctAnswer: String!
	}
	type LoginSuccess {
		success: Boolean!
		token: String!
		user: User!
	}
	type QuizResponse {
		id: ID!
		title: String!
		questions: [Question]
		category: String!
		difficulty: String!
		type: String!
	}

	type QuizesResponse {
		success: Boolean!
		quizzes: [QuizResponse]
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

	input QuestionsInput {
		question: String!
		incorrectAnswers: [String!]
		correctAnswer: String!
	}

	input CreateQuizInput {
		title: String!
		category: String!
		difficulty: String!
		type: String!
		questions: [QuestionsInput]
	}

	type Query {
		getQuizes: QuizesResponse
		getQuiz(id: ID!): QuizResponse
		getMyQuiz: QuizesResponse
	}

	type Mutation {
		login(loginInput: LoginInput!): LoginSuccess
		signup(signupInput: SignupInput!): SignupSuccess
		createQuiz(createQuizInput: CreateQuizInput!): QuizResponse
		deleteQuiz(id: ID!): QuizResponse
	}
`;
module.exports = typeDefs;
