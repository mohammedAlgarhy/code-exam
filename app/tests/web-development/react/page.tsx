"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is React?", options: ["JavaScript UI library", "Framework", "Backend library", "Database"], correctAnswer: 0 },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML syntax extension", "Java XML", "JSON", "TypeScript"], correctAnswer: 0 },
  { id: 3, question: "Which hook is used for state?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: 0 },
  { id: 4, question: "What is the purpose of `useEffect`?", options: ["Side effects", "State management", "Context", "Refs"], correctAnswer: 0 },
  { id: 5, question: "How do you pass data from parent to child?", options: ["props", "state", "context", "refs"], correctAnswer: 0 },
  { id: 6, question: "What is the virtual DOM?", options: ["Lightweight copy of real DOM", "Real DOM", "Shadow DOM", "Browser API"], correctAnswer: 0 },
  { id: 7, question: "What is the correct way to update state based on previous state?", options: ["setState(prev => prev+1)", "setState(state+1)", "this.state++", "state = state+1"], correctAnswer: 0 },
  { id: 8, question: "What is a controlled component?", options: ["Form input controlled by React state", "Component with no state", "Pure component", "Higher-order component"], correctAnswer: 0 },
  { id: 9, question: "What is the purpose of keys in lists?", options: ["Uniquely identify items", "Style", "Bind events", "Optimize performance"], correctAnswer: 0 },
  { id: 10, question: "Which hook provides context value?", options: ["useContext", "useReducer", "useMemo", "useCallback"], correctAnswer: 0 },
  { id: 11, question: "What does `useMemo` do?", options: ["Memoizes expensive calculations", "Side effects", "Context", "Refs"], correctAnswer: 0 },
  { id: 12, question: "What is the difference between props and state?", options: ["Props immutable, state mutable", "Props mutable, state immutable", "Both immutable", "Both mutable"], correctAnswer: 0 },
  { id: 13, question: "What is a React fragment?", options: ["Group children without extra DOM node", "Portal", "Lazy loading", "Error boundary"], correctAnswer: 0 },
  { id: 14, question: "Which tool is commonly used to bundle React apps?", options: ["Webpack", "Babel", "ESLint", "Prettier"], correctAnswer: 0 },
  { id: 15, question: "What is the purpose of `prop-types`?", options: ["Type checking", "Performance", "Styling", "Routing"], correctAnswer: 0 },
  { id: 16, question: "How do you handle events in React?", options: ["CamelCase with function reference", "LowerCase with string", "Inline onclick", "addEventListener"], correctAnswer: 0 },
  { id: 17, question: "What is the use of `useReducer`?", options: ["Complex state logic", "Simple state", "Context", "Refs"], correctAnswer: 0 },
  { id: 18, question: "What does `React.StrictMode` do?", options: ["Highlights potential problems", "Enables production mode", "Optimizes performance", "None"], correctAnswer: 0 },
  { id: 19, question: "Which command creates a new React app?", options: ["npx create-react-app", "npm init react", "react new", "create-react"], correctAnswer: 0 },
  { id: 20, question: "What is the default export in a typical React app?", options: ["App component", "index.js", "package.json", "webpack.config"], correctAnswer: 0 }
];

export default function ReactQuiz() {
  return (
    <QuizComponent
      title="React Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}