const Questions = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 1,
  questions: [
    {
      question: 'What is the correct command to create a new React project?',
      choices: ['npx create-react-app', 'npm create-react-app', 'npx create-react-app myReactApp', 'npm create-react-app myReactApp'],
      correctAnswer: 'npx create-react-app myReactApp',
    },
    {
      question: 'What command is used to start the React local development server?',
      choices: ['npm start', 'npm build', 'npm serve', 'npm run dev'],
      correctAnswer: 'npm start',
    },
    {
      question:'What is the default local host port that a React development server uses?',
      choices: ['3500', '3000', '8080', '5000'],
      correctAnswer: '3000',
    },
    // {
    //   question: 'To develop and run React code, Node.js is required.',
    //   choices: ['True', 'False'],
    //   correctAnswer: 'True',
    // },
    // {
    //     question: 'Which keyword creates a constant in JavaScript?',
    //     choices: ['let', 'constant','const','var'],
    //     correctAnswer: 'const',
    //   },
    //   {
    //     question: 'A copy of the real DOM that is kept in memory is called what?',
    //     choices: ['Shadow DOM', 'React DOM','Virtual DOM','DOM'],
    //     correctAnswer: 'Virtual DOM',
    //   },
    //   {
    //     question: 'Which operator can be used to conditionally render a React component?',
    //     choices: ['&&', '||','??','::'],
    //     correctAnswer: '&&',
    //   },
    //   {
    //     question: 'What tool does React use to compile JSX?',
    //     choices: ['React Router', 'JSX Compiler','Babel','ReactDOM'],
    //     correctAnswer: 'Babel',
    //   },
    //   {
    //     question: 'What is the correct syntax to import a Component from React?',
    //     choices: ['import { Component } from \'react\'', 'import [ Component ] from \'react\'','import Component from \'react\'','import React.Component from \'react\''],
    //     correctAnswer: 'import { Component } from \'react\'',
    //   },
    //   {
    //     question: 'Which of the following is NOT a rule for React Hooks?',
    //     choices: ['Hooks can be called in Class or Function components', 'Hooks can only be called at the top level of a component','Hooks cannot be conditional','Hooks can only be called inside React Function components'],
    //     correctAnswer: 'Hooks can be called in Class or Function components',
    //   },
  ],
}
export default Questions;