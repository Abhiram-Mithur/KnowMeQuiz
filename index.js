    var readlineSync = require("readline-sync");
    var score = 0;
    var userName = readlineSync.question("What's your name? ");
    
    console.log("Welcome "+ userName+ " to the Quiz Game");
    
    function play(question, answer){
    var userAnswer = readlineSync.question(question) 
    if(userAnswer=== answer){
      console.log("You are right!");
      score++
    }
    else{ console.log("oops! wrong answer");
         }
      console.log ("your score is: " + score);
      console.log("-----------------------")
    }
  var questions = [{
    question:"whats abhiram's full name ",
    answer:"abhiram mithur"
  },
  {question:  "whats my fav color? ",
    answer:  "blue"}
  ,{question:"Whats my lucky number? (Hint: between 0-9) " ,
    answer: "1"},
  {question:  "whats my fav marvel character? ",
    answer:  "spiderman"}
                  ]

for(var i = 0;i<questions.length;i++){
 var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Wow! you scored: "+score);

