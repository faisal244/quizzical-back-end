const login = require("./login");
const signup = require("./signup");
const createQuiz = require("./createQuiz");
const getMyQuiz = require("./getMyQuiz");
const getQuiz = require("./getQuiz");
const getQuizes = require("./getQuizes");
// const findQuizById = require("./findQuizById");

const resolvers = {
  Query: {
    getQuizes,
    getQuiz,
    getMyQuiz,
  },
  Mutation: {
    login,
    signup,
    createQuiz,
    // findQuizById,
  },
};

module.exports = resolvers;
