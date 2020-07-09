const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The more you take, the more you leave behind. What am i?',
    answers: [
      { text: 'Footsteps', correct: true },
      { text: 'Lift', correct: false }
    ]
  },
  {
    question: 'What has a head, a tail, is brown, and has no legs?',
    answers: [
      { text: 'snake', correct: false },
      { text: 'Penny', correct: true },
      { text: 'fish', correct: false },
      { text: 'bread', correct: false }
    ]
  },
  {
    question: 'Davids father has three sons: Snap, Crackle, and __',
    answers: [
      { text: 'Snap', correct: false },
      { text: 'David', correct: true },
      { text: 'Sons', correct: false },
      { text: 'Father', correct: false }
    ]
  },
  {
    question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
    answers: [
      { text: 'Time', correct: false },
      { text: 'M', correct: true }
    ]
},
    {
        question: 'What has many keys, but cant even open a single door?',
        answers: [
            { text: 'Piano', correct: true},
            { text: 'keyboard', correct: false},
            { text: 'Baby', correct: false},
            { text: 'there is no door', correct: false}
        ]
    },
    {
        question:'What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see?',
        answers: [
            {text: 'Dice', correct:true,},
            {text: 'Corona Virus', correct: false,},
            {text: 'six flags', correct:false,},
            {text: 'books', correct:false,}
        
        ]
        
    },

    {
        question:'Whats a lifeguards favorite game?',
        answers: [
            {text: 'Diving', correct: false,},
            {text: 'Pool', correct: true,},
            {text: 'Defending on Fifa', correct: false},
            {text: 'Swimming', correct: false}
        ]
    },

    {
        question:'You live in a one story house made entirely of redwood. What color would the stairs be?',
        answers: [
            {text: 'Red', correct: false},
            {text: 'There is no color', correct: false},
            {text: 'house color', correct: true},
            {text: 'Default white', correct: false}
        ]
    },

    {
        question:'Which bird does not belong in this group? Finch, gull, eagle, ostrich, or sparrow?',
        answers: [
            {text:'Finch', correct:false},
            {text: 'Gull', correct:false},
            {text: 'Ostrich', correct: true},
            {text: " sparrow", correct: false}
        ]
    },
]