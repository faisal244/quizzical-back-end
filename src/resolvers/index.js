const login = require("./login");
const signup = require("./signup");
const createQuiz = require("./createQuiz");
// const findQuizById = require("./findQuizById");

const resolvers = {
  Mutation: {
    login,
    signup,
    createQuiz,
    // findQuizById,
  },
};

module.exports = resolvers;
