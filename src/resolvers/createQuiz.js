const { AuthenticationError, ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz.js");

const creatingQuiz = async (_, { createQuizInput }, { user }) => {
  try {
    if (!user) {
      return new AuthenticationError("You are not Authorised Buddy Try Again!");
    }

    // destructurer the create quiz args object

    const { category, difficulty, type, questions } = createQuizInput;
    // save quiz in DB using Quiz model

    const newQuiz = await Quiz.create({
      category,
      difficulty,
      type,
      questions,
    });

    console.log(newQuiz);

    return newQuiz;
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to create quiz");
  }
};

module.exports = creatingQuiz;
