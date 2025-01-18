# 🎉 **Quiz App** 🧠

Welcome to the **Quiz App**! This is a fully functional, interactive quiz application that challenges your knowledge while keeping track of time. It includes a countdown timer, navigation between questions, and an insightful report page to review your performance. Let's dive in! 🚀

---

## 🛠️ **Features**
- **Start Page**: Submit your email address and start the quiz right away.
- **15 Questions**: Answer a set of 15 hand-picked questions sourced from the Open Trivia DB API.
- **Timer**: A 30-minute countdown timer — **auto-submit** when time runs out. ⏳
- **Navigation**: Navigate to any specific question you've visited or attempted.
- **End of Quiz**: After the quiz ends, you're directed to a report page with answers compared to the correct ones. 📊

---

## 🔥 **Live Demo**
Check out the live version of the Quiz App hosted [here](https://your-live-demo-link.com) (if applicable).

---

## 🚀 **Installation**

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/nakul2070/Quiz-App)
Navigate to the project directory:

bash
Copy
Edit
cd quiz-app
Install dependencies:

bash
Copy
Edit
npm install
Run the application:

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser to view the app.

📸 Screenshots
Start Page

Enter your email to get started!

Quiz Page

Navigate through questions and answer them while watching the timer!

Report Page

View your quiz performance with side-by-side comparisons of your answers and the correct ones!

⚙️ How It Works
Start the Quiz: Enter your email and hit the "Start Quiz" button. The quiz will fetch 15 random trivia questions.
Answer Questions: Navigate through the questions and select your answers. You can jump to any question you've already answered.
Timer Countdown: A timer on the top of the page will count down from 30 minutes. Once it reaches zero, the quiz will auto-submit.
End of Quiz: Once the quiz is completed or the timer ends, you're redirected to the Report Page.
Review Performance: On the report page, you’ll see your answers, alongside the correct answers for each question.
💡 Key Concepts
Timer: A countdown timer that ensures the quiz is taken within a limited time frame (30 minutes).
Question Navigation: Users can navigate between questions and view which ones they have attempted.
API Integration: We use Open Trivia DB API to fetch questions dynamically.
Auto Submit: The quiz automatically submits when the timer hits zero.
🖥️ Tech Stack
Frontend: React, CSS for styling
API: Open Trivia DB API (https://opentdb.com/api.php?amount=15&type=multiple)
State Management: React Hooks (useState, useEffect)
Timer: JavaScript's setInterval() to handle countdown logic
✨ Contributing
Feel free to fork this project, submit issues, or open pull requests. Here's how you can contribute:

Fork the repository.
Clone your fork:
bash
Copy
Edit
git clone https://github.com/your-username/quiz-app.git
Make your changes.
Create a pull request with a clear description of what you’ve done.
📄 License
This project is open-source and available under the MIT License.

📬 Contact
For any questions, feedback, or issues, feel free to reach out to me via:

Email: your-nakulbisen01@gmail.com
GitHub: nakul2070
🌱 Future Enhancements
Add more question categories (Science, History, Sports, etc.)
Implement a scoring system to give users feedback after each quiz.
Add accessibility features for better usability.
Improve UI with more animations and transitions.
🎨 Animations and Styling
The UI is designed to be interactive and responsive, with smooth transitions between quiz pages.
CSS animations are used to highlight buttons and selections, making the app feel lively and engaging.
