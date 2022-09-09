const { AuthenticationError, ApolloError } = require("apollo-server");

const User = require("../models/User.js");

const getMyQuiz = async (_, __, { user }) => {
  try {
    if (!user) {
      return new AuthenticationError("Unauthrized user");
    }
    const { quizzes } = await User.findById(user.id).populate("quizzes");
    return {
      success: true,
      quizzes,
    };
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to find quiz");
  }
};

module.exports = getMyQuiz;
