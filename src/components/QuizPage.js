import React, { useState } from 'react';

const QuizPage = ({
  quizData,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  timer,
  goToNextQuestion,
  goToPreviousQuestion,
  finishQuiz,
}) => {
  const currentQuestion = quizData[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer('');
    }
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1} / 15</h2>
      <div>Time Remaining: {Math.floor(timer / 60)}:{timer % 60}</div>
      <h3 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      {currentQuestion.answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerSelection(answer)}
          disabled={selectedAnswer !== ''}
          style={{
            backgroundColor: selectedAnswer === answer ? 'lightblue' : '',
          }}
        >
          {answer}
        </button>
      ))}
      <div>
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleSubmitAnswer}>Next</button>
      </div>
      {currentQuestionIndex === quizData.length - 1 && (
        <button onClick={finishQuiz}>Finish Quiz</button>
      )}
    </div>
  );
};

export default QuizPage;
