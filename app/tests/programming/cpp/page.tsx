"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is C++?",
        "options":  [
                        "Programming language",
                        "Database",
                        "Framework",
                        "Tool"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  2,
        "question":  "What is a pointer?",
        "options":  [
                        "Memory address",
                        "Variable",
                        "Function",
                        "Class"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
        "question":  "What is OOP?",
        "options":  [
                        "Object-Oriented Programming",
                        "Other Programming",
                        "Online Programming",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  4,
        "question":  "What is a class?",
        "options":  [
                        "Blueprint for objects",
                        "Function",
                        "Variable",
                        "Array"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  5,
        "question":  "What is inheritance?",
        "options":  [
                        "Class inherits from another",
                        "Variable inheritance",
                        "Method inheritance",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  6,
        "question":  "What is polymorphism?",
        "options":  [
                        "Many forms",
                        "Single form",
                        "No forms",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  7,
        "question":  "What is encapsulation?",
        "options":  [
                        "Data hiding",
                        "Data sharing",
                        "Data duplication",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is a constructor?",
        "options":  [
                        "Initializes object",
                        "Destroys object",
                        "Copies object",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "What is a destructor?",
        "options":  [
                        "Cleans up object",
                        "Creates object",
                        "Copies object",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is the \new operator?",
        "options":  [
                        "Allocates memory",
                        "Deallocates memory",
                        "Copies memory",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is the delete operator?",
        "options":  [
                        "Deallocates memory",
                        "Allocates memory",
                        "Copies memory",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is a reference?",
        "options":  [
                        "Alias for a variable",
                        "Pointer",
                        "Array",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is a template?",
        "options":  [
                        "Generic programming",
                        "Class",
                        "Function",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is STL?",
        "options":  [
                        "Standard Template Library",
                        "Standard Type Library",
                        "System Template Library",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is a vector?",
        "options":  [
                        "Dynamic array",
                        "Static array",
                        "List",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is a map?",
        "options":  [
                        "Key-value pairs",
                        "List",
                        "Set",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is an algorithm?",
        "options":  [
                        "Function that operates on containers",
                        "Class",
                        "Template",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is an exception?",
        "options":  [
                        "Runtime error",
                        "Compile error",
                        "Link error",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is RAII?",
        "options":  [
                        "Resource Acquisition Is Initialization",
                        "Runtime Allocation",
                        "Random Access",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is a lambda expression?",
        "options":  [
                        "Anonymous function",
                        "Named function",
                        "Class",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="C++ Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
