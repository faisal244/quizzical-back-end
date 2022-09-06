const { Schema, model } = require("mongoose");
// const { Questions } = require("./Question");

const quizSchema = {
	Questions: [
		{
			type: Schema.Types.ObjectId,
			ref: "Question",
		},
	],

	// add fields for quiz here
	// MUST be in line with response from AP
};

const schema = new Schema(quizSchema);

const Quiz = model("Quiz", schema);

module.exports = Quiz;
