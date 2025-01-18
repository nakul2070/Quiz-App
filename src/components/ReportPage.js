import React from 'react';

const ReportPage = ({ quizData, userEmail }) => {
  return (
    <div>
      <h2>Quiz Report for {userEmail}</h2>
      {quizData.map((question, index) => (
        <div key={index}>
          <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
          <div>
            <strong>Your Answer:</strong> {question.selectedAnswer || 'Not Answered'}
          </div>
          <div>
            <strong>Correct Answer:</strong> {question.correctAnswer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportPage;
