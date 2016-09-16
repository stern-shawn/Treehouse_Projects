function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

// Compare given answer to the question's correct answer, adjust score, and go to next question index
Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().isCorrect(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
}

// Factor this out to a function for clarity
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
}