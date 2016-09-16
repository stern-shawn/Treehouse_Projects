function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Could make this just a method of the object, but we're practicing using prototypes...
Question.prototype.isCorrect = function(choice) {
  return this.answer === choice;
}