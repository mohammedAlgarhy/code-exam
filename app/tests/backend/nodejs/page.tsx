"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Node.js?", options: ["JavaScript runtime built on Chrome's V8", "Frontend framework", "Database", "CSS preprocessor"], correctAnswer: 0 },
  { id: 2, question: "Which module is used to create a web server?", options: ["http", "fs", "path", "os"], correctAnswer: 0 },
  { id: 3, question: "What is npm?", options: ["Node package manager", "Node process manager", "Node module protocol", "Node performance monitor"], correctAnswer: 0 },
  { id: 4, question: "How do you include an external module?", options: ["require()", "import", "include()", "use()"], correctAnswer: 0 },
  { id: 5, question: "What is the event loop in Node.js?", options: ["Handles asynchronous operations", "Synchronous loop", "Error handler", "Memory manager"], correctAnswer: 0 },
  { id: 6, question: "Which global object provides information about the current process?", options: ["process", "global", "window", "console"], correctAnswer: 0 },
  { id: 7, question: "How do you read a file asynchronously?", options: ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.open()"], correctAnswer: 0 },
  { id: 8, question: "What is the purpose of `package.json`?", options: ["Manage project dependencies and scripts", "Configuration for Node", "Log file", "Documentation"], correctAnswer: 0 },
  { id: 9, question: "Which command installs all dependencies from package.json?", options: ["npm install", "npm get", "npm init", "npm build"], correctAnswer: 0 },
  { id: 10, question: "What is a callback function in Node.js?", options: ["Function called after async task completes", "Error handler", "Main function", "Event listener"], correctAnswer: 0 },
  { id: 11, question: "How do you handle errors in callbacks?", options: ["First argument of callback is error", "Try-catch", "Promise.catch", "Event emitters"], correctAnswer: 0 },
  { id: 12, question: "What does `process.argv` contain?", options: ["Command-line arguments", "Environment variables", "CPU info", "Memory usage"], correctAnswer: 0 },
  { id: 13, question: "What is the purpose of the `path` module?", options: ["Work with file and directory paths", "Create HTTP requests", "Handle streams", "Compress files"], correctAnswer: 0 },
  { id: 14, question: "Which method creates a new child process?", options: ["child_process.spawn()", "process.fork()", "child_process.exec()", "All of the above"], correctAnswer: 3 },
  { id: 15, question: "What is a Promise in Node.js?", options: ["Async operation result", "Callback replacement", "Error handler", "Both A and B"], correctAnswer: 3 },
  { id: 16, question: "How do you use async/await?", options: ["Mark function as async, use await", "Use .then()", "Use callbacks", "Use events"], correctAnswer: 0 },
  { id: 17, question: "What is the `cluster` module used for?", options: ["Load balancing across CPU cores", "Database clustering", "Cache cluster", "Network cluster"], correctAnswer: 0 },
  { id: 18, question: "Which method sends a response in an HTTP server?", options: ["res.end()", "res.send()", "res.write()", "All of the above"], correctAnswer: 3 },
  { id: 19, question: "What is the default URL for a Node.js server?", options: ["http://localhost:3000", "http://127.0.0.1:8080", "http://localhost:8000", "http://localhost:5000"], correctAnswer: 0 },
  { id: 20, question: "Which module provides environment variables?", options: ["process.env", "os.env", "global.env", "fs.env"], correctAnswer: 0 }
];

export default function NodeQuiz() {
  return (
    <QuizComponent
      title="Node.js Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}