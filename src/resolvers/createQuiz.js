const { AuthenticationError, ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz.js");
const User = require("../models/User.js");

const creatingQuiz = async (_, { createQuizInput }, { user }) => {
	try {
		if (!user) {
			return new AuthenticationError("You are not Authorised Buddy Try Again!");
		}

		// destructurer the create quiz args object

		const { category, difficulty, type, questions, title } = createQuizInput;
		// save quiz in DB using Quiz model

		const newQuiz = await Quiz.create({
			category,
			title,
			difficulty,
			type,
			questions,
		});

		await User.findByIdAndUpdate(user.id, { $push: { quizzes: newQuiz._id } });

		return newQuiz;
	} catch (error) {
		console.log(error.message);
		return new ApolloError("Failed to create quiz");
	}
};

module.exports = creatingQuiz;
