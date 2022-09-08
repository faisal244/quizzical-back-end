const { AuthenticationError, ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz.js");

const getQuizzes = async (_, __) => {
  try {
    const quizzes = await Quiz.find({});
    return {
      success: true,
      quizzes,
    };
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to find quizes");
  }
};

module.exports = getQuizzes;
