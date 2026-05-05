"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Express.js?", options: ["A web framework for Node.js", "A database", "A frontend library", "A testing tool"], correctAnswer: 0 },
  { id: 2, question: "How do you install Express in a Node project?", options: ["npm install express", "npm i express", "Both A and B", "node install express"], correctAnswer: 2 },
  { id: 3, question: "Which method responds to HTTP GET requests?", options: ["app.get()", "app.post()", "app.use()", "app.all()"], correctAnswer: 0 },
  { id: 4, question: "How do you start an Express server on port 3000?", options: ["app.listen(3000)", "app.run(3000)", "server.start(3000)", "express.listen(3000)"], correctAnswer: 0 },
  { id: 5, question: "What is middleware in Express?", options: ["Functions that execute during request-response cycle", "Database connector", "Template engine", "Error handler only"], correctAnswer: 0 },
  { id: 6, question: "How do you serve static files in Express?", options: ["express.static()", "app.static()", "app.use(express.static())", "app.serve()"], correctAnswer: 2 },
  { id: 7, question: "Which parameter represents the request object in a route handler?", options: ["req", "res", "next", "app"], correctAnswer: 0 },
  { id: 8, question: "How do you extract query parameters from a URL?", options: ["req.query", "req.params", "req.body", "req.headers"], correctAnswer: 0 },
  { id: 9, question: "What is the purpose of `next()` in middleware?", options: ["Pass control to next middleware", "End the request", "Send a response", "Log the request"], correctAnswer: 0 },
  { id: 10, question: "Which method captures POST data sent as JSON?", options: ["express.json()", "bodyParser.json()", "Both", "app.json()"], correctAnswer: 2 },
  { id: 11, question: "How do you set a view engine like EJS in Express?", options: ["app.set('view engine', 'ejs')", "app.engine('ejs')", "express.view('ejs')", "app.view('ejs')"], correctAnswer: 0 },
  { id: 12, question: "Which method handles HTTP PUT requests?", options: ["app.put()", "app.update()", "app.patch()", "app.send()"], correctAnswer: 0 },
  { id: 13, question: "What does `req.params` contain?", options: ["Route parameters", "Query string", "POST data", "Headers"], correctAnswer: 0 },
  { id: 14, question: "How do you send a JSON response in Express?", options: ["res.json()", "res.send()", "res.end()", "res.write()"], correctAnswer: 0 },
  { id: 15, question: "What is Express Router used for?", options: ["Modular route handling", "Database queries", "Template rendering", "Error logging"], correctAnswer: 0 },
  { id: 16, question: "Which HTTP status code means 'Not Found'?", options: ["404", "400", "500", "403"], correctAnswer: 0 },
  { id: 17, question: "How do you handle errors globally in Express?", options: ["Error-handling middleware with 4 parameters", "try-catch", "process.on('error')", "app.error()"], correctAnswer: 0 },
  { id: 18, question: "What does `res.redirect()` do?", options: ["Redirects to another URL", "Renders a view", "Sends a file", "Ends the response"], correctAnswer: 0 },
  { id: 19, question: "How do you access cookies in Express?", options: ["req.cookies", "req.cookie", "res.cookie", "app.cookie"], correctAnswer: 0 },
  { id: 20, question: "Which method binds and listens for connections on a specified host and port?", options: ["app.listen()", "app.run()", "app.start()", "app.serve()"], correctAnswer: 0 }
];

export default function ExpressQuiz() {
  return (
    <QuizComponent
      title="Express.js Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}