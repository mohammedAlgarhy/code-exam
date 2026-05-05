"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "explanation":  "JavaScript is a programming language for web development",
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is JavaScript?",
        "options":  [
                        "A programming language",
                        "A database",
                        "A CSS framework",
                        "A markup language"
                    ]
    },
    {
        "explanation":  "var, let, const",
        "correctAnswer":  3,
        "id":  2,
        "question":  "How do you declare a variable?",
        "options":  [
                        "var x;",
                        "let x;",
                        "const x;",
                        "All of above"
                    ]
    },
    {
        "explanation":  "Historical bug in JavaScript",
        "correctAnswer":  2,
        "id":  3,
        "question":  "What does \typeof null return?",
        "options":  [
                        "null",
                        "undefined",
                        "object",
                        "number"
                    ]
    },
    {
        "explanation":  "push() adds to end",
        "correctAnswer":  0,
        "id":  4,
        "question":  "Which method adds an element to the end of an array?",
        "options":  [
                        "push()",
                        "pop()",
                        "shift()",
                        "unshift()"
                    ]
    },
    {
        "explanation":  "Compares both value and type",
        "correctAnswer":  2,
        "id":  5,
        "question":  "What does === do?",
        "options":  [
                        "Assignment",
                        "Type conversion",
                        "Strict equality",
                        "Loose equality"
                    ]
    },
    {
        "explanation":  "Closures remember their lexical scope",
        "correctAnswer":  0,
        "id":  6,
        "question":  "What is a closure?",
        "options":  [
                        "A function with access to outer scope",
                        "A loop",
                        "An error handler",
                        "A DOM element"
                    ]
    },
    {
        "explanation":  "Both single-line and multi-line",
        "correctAnswer":  3,
        "id":  7,
        "question":  "How do you write a comment in JavaScript?",
        "options":  [
                        "// comment",
                        "/* comment */",
                        "# comment",
                        "Both A and B"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is the correct way to write an array?",
        "options":  [
                        "var colors = [\u0027red\u0027,\u0027green\u0027,\u0027blue\u0027]",
                        "var colors = \u0027red\u0027,\u0027green\u0027,\u0027blue\u0027",
                        "var colors = (1:\u0027red\u0027,2:\u0027green\u0027)",
                        "var colors = 1=\u0027red\u0027"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "How do you create a function?",
        "options":  [
                        "function myFunction() {}",
                        "create myFunction() {}",
                        "def myFunction() {}",
                        "new myFunction() {}"
                    ]
    },
    {
        "explanation":  "Floating point precision",
        "correctAnswer":  1,
        "id":  10,
        "question":  "What is the result of console.log(0.1 + 0.2 === 0.3)?",
        "options":  [
                        "true",
                        "false",
                        "undefined",
                        "NaN"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is the DOM?",
        "options":  [
                        "Document Object Model",
                        "Data Object Model",
                        "Digital Object Model",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What does map() do?",
        "options":  [
                        "Creates a new array",
                        "Filters an array",
                        "Reduces an array",
                        "Sorts an array"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is a Promise?",
        "options":  [
                        "An async operation object",
                        "A callback",
                        "A loop",
                        "A variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What does NaN stand for?",
        "options":  [
                        "Not a Number",
                        "Null and None",
                        "New Array Name",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is \this keyword?",
        "options":  [
                        "Refers to current context",
                        "Global object",
                        "New object",
                        "Parent object"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is JSON?",
        "options":  [
                        "JavaScript Object Notation",
                        "Java Object Notation",
                        "JSON Object Notation",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What does \filter() return?",
        "options":  [
                        "Filtered array",
                        "First element",
                        "Boolean",
                        "Number"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is the event loop?",
        "options":  [
                        "Handles async operations",
                        "Loop for events",
                        "DOM handler",
                        "Callback type"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What does \reduce() do?",
        "options":  [
                        "Reduces array to a value",
                        "Filters array",
                        "Maps array",
                        "Sorts array"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is hoisting?",
        "options":  [
                        "Moving declarations to top",
                        "Lifting variables",
                        "Raising errors",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="JavaScript Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
