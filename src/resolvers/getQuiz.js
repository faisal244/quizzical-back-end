const { ApolloError, AuthenticationError } = require("apollo-server");

const Quiz = require("../models/Quiz.js");

const getQuiz = async (_, { id }, { user }) => {
  try {
    if (!user) {
      return new AuthenticationError("Unauthorized user");
    }
    return await Quiz.findById(id);
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to find quiz");
  }
};

module.exports = getQuiz;
