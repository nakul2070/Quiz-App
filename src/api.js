export const fetchQuizQuestions = async () => {
    const url = 'https://opentdb.com/api.php?amount=15&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((question) => ({
      question: question.question,
      correctAnswer: question.correct_answer,
      answers: [...question.incorrect_answers, question.correct_answer].sort(),
    }));
  };
  