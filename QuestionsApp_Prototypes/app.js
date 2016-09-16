// Set some questions to test with
var questions = [
  new Question("Are you weak, bro?", ["Yes", "No"], "Yes"),
  new Question("Who is sillier?", ["Tony", "Phil"], "Phil")
];

// Instantiate the quiz object
var quiz = new Quiz(questions);

// Begin quiz
QuizUI.displayNext();