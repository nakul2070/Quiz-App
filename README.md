***Quiz Application***


Overview
The Quiz Application is a web-based platform designed to provide an interactive quiz experience for users. It allows users to participate in a 15-question quiz, with each question presenting multiple-choice answers. The quiz is designed to be completed in 30 minutes, with a timer that automatically submits the quiz once it reaches zero.

The application fetches quiz questions from the Open Trivia Database and uses React to manage the user interface. The app also features a navigation panel to jump between questions and a detailed report page showing correct and incorrect answers at the end of the quiz.

Key Features:
User can start the quiz after providing an email address.
Timer counts down from 30 minutes.
Questions are fetched from an external API (Open Trivia Database).
Question navigation and status indicator for each question.
Final report page showing answers and correctness.
Setup & Installation
To run this application locally, follow these steps:

Prerequisites
Node.js (v14 or later)
npm (Node package manager)
If you haven't already, install Node.js, which comes with npm.

Steps to Install
Clone the Repository Open your terminal and run the following command to clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/quiz-app.git
Navigate to the project folder

bash
Copy
Edit
cd quiz-app
Install Dependencies In the project folder, run the following command to install all the required dependencies:

bash
Copy
Edit
npm install
Start the Application After installing dependencies, you can run the application locally with:

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000/.

Assumptions
Users will be required to provide a valid email address to start the quiz.
Each quiz session will be timed for 30 minutes, and auto-submitted once the time is up.
The API will return 15 questions, and the user interface will accommodate for all 15 questions.
Challenges Faced & Solutions
Timer Management:

Challenge: Implementing a 30-minute countdown timer that stops and submits the quiz automatically once the time runs out.
Solution: Used the useEffect hook in React to set an interval that updates every second, and when it reaches zero, the quiz is automatically submitted.
Question Navigation:

Challenge: Allowing the user to navigate between questions and mark questions as visited or attempted.
Solution: Implemented a question overview panel that shows each question's status (visited/attempted) and enables navigation between them.
API Integration:

Challenge: Fetching data from an external API (Open Trivia Database) and ensuring questions are displayed in a user-friendly format.
Solution: Used Axios to fetch the questions and handle the data properly, ensuring the answers are displayed as multiple-choice options.
Styling and UI:

Challenge: Making the UI attractive and ensuring a responsive design.
Solution: Utilized CSS Flexbox and media queries to create a responsive layout. Also added animations using react-spring to improve the user experience.
License
This project is licensed under the MIT License - see the LICENSE file for details.
