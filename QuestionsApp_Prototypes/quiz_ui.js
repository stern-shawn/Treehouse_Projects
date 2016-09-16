var QuizUI = {
  // If quiz if over, display score, otherwise build up the UI
  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  // Populate the question field
  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  // Populate each question and assign handlers to the respective buttons
  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;
    
    for (var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }  
  },
  // Update the display at the bottom of the page to track progress
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  },  
  // Self-explanatory, nothing fancy
  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>Your score is: " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },
  // Factored out helper code to getElementById and set innerHTML
  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  // On click, submit user's guess and go to next question
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  }  
}