const login = require("./login");
const signup = require("./signup");
const createQuiz = require("./createQuiz");

const resolvers = {
  Mutation: {
    login,
    signup,
    createQuiz,
  },
};

module.exports = resolvers;
