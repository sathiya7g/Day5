import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    questionText: 'What is the capital city of Australia?',
    options: ['A. Sydney', 'B. Melbourne','C. Canberra', 'D. Brisbane'],
    correctAnswer: ' C. Canberra',
  },
  {
    questionText: 'Who discovered penicillin?',
    options: ['A. Louis Pasteur', 'B. Alexander Fleming', 'C. Marie Curie','D. Albert Einstein'],
    correctAnswer: 'B. Alexander Fleming',

  },
  {
    questionText: 'Which country hosted the first modern Olympic Games in 1896?',
    options: ['A. France', 'B. Greece', 'C. Italy','D. United Kingdom'],
    correctAnswer: 'B. Greece',

  },

  {
    questionText: 'Which gas is most abundant in the Earth atmosphere?',
    options: ['A. Oxygen', 'B. Nitrogen', 'C. Carbon Dioxide', 'D. Hydrogen'],
    correctAnswer: 'B. Nitrogen',
  },
  {
    questionText: 'Who was the first woman to fly solo across the Atlantic Ocean?',
    options: ['A. Amelia Earhart', 'B. Bessie Coleman', 'C. Harriet Quimby', 'D. Jacqueline Cochran'],
    correctAnswer: 'A. Amelia Earhart',
  },
  {
    questionText: 'What is the official currency of Japan?',
    options: ['A. Won', 'B. Yen', 'C. Dollars', 'D. Yuan'],
    correctAnswer: 'B. Yen',
  },
  {
    questionText: 'Which element is known as the King of the Chemicals ?',
    options: ['A. Sulfur', 'B. Nitrogen', 'C. Chlorine', 'D. Sulfuric Acid'],
    correctAnswer: 'D. Sulfuric Acid',
  },
  {
    questionText: 'What is the main language spoken in Brazil?',
    options: ['A. Spanish', 'B. Portuguese', 'C. French', 'D. English'],
    correctAnswer: 'B. Portuguese',
  },
  {
    questionText: 'Which country is home to the Great Barrier Reef?',
    options: ['A. Indonesia', 'B. Australia', 'C. Philippines', 'D. Fiji'],
    correctAnswer: 'B. Australia',
  },
  {
    questionText: 'Who is the author of the "Harry Potter" series?',
    options: ['A. J.R.R. Tolkien', 'B. J.K. Rowling', 'C. Suzanne Collins', 'D. George R.R. Martin'],
    correctAnswer: 'Yen',
  },

];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === quizData[index].correctAnswer).length;
  };

  if (showResult) {
    return <Result score={calculateScore()} total={quizData.length} />;
  }

  return (
    <div>
      <Question
        question={quizData[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;