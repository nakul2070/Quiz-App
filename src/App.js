import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from './api'; // Assuming api.js is in the same folder
import QuizPage from './components/QuizPage';
import ReportPage from './components/ReportPage';

const App = () => {
  const [userEmail, setUserEmail] = useState('');
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(1800); // 30 minutes in seconds
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = async () => {
    try {
      const data = await fetchQuizQuestions();
      setQuizData(data);
      setQuizStarted(true);
      setTimer(1800); // Reset timer to 30 minutes when quiz starts
    } catch (err) {
      setError('Failed to fetch quiz questions');
    }
  };

  useEffect(() => {
    let countdown;
    if (quizStarted && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      // Auto submit the quiz when timer hits 0
      setQuizFinished(true);
    }

    return () => clearInterval(countdown);
  }, [quizStarted, timer]);

  const handleEmailSubmit = (email) => {
    setUserEmail(email);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <div>
          <h2>Enter your Email to Start Quiz</h2>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button onClick={() => handleEmailSubmit(userEmail)}>Submit</button>
          <button onClick={startQuiz} disabled={!userEmail}>
            Start Quiz
          </button>
        </div>
      ) : quizFinished ? (
        <ReportPage quizData={quizData} userEmail={userEmail} />
      ) : (
        <QuizPage
          quizData={quizData}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          timer={timer}
          goToNextQuestion={goToNextQuestion}
          goToPreviousQuestion={goToPreviousQuestion}
          finishQuiz={finishQuiz}
        />
      )}
    </div>
  );
};

export default App;
