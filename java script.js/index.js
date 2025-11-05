const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the square root of 81?",
    choices: ["9", "8", "7"],
    answer: "9"
  },
  {
    category: "Sports",
    question: "How many players are there in a soccer team on the field?",
    choices: ["10", "11", "12"],
    answer: "11"
  }
];

function getRandomQuestion(questionArray) {
  const randomIndex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Question:", selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));