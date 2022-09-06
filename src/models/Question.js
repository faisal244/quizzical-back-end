const { Schema, model } = require("mongoose");

const questionSchema = {
	// add fields for quiz here
	// MUST be in line with response from API
	category: {
		type: String,
	},
	// type
	type: {
		type: String,
		enum: ["boolean", "multiple"],
	},
	// difficulty
	difficulty: {
		type: String,
		enum: ["easy", "medium", "hard"],
	},
	question: {
		type: String,
	},

	correctAnswer: {
		type: String,
	},

	incorrectAnswers: [String],
};

const options = {
	toJSON: {
		virtuals: true,
		getters: true,
	},
};

const schema = new Schema(questionSchema, options);

const Question = model("Question", schema);

module.exports = Question;
