"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is Java?",
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
        "question":  "What is JVM?",
        "options":  [
                        "Java Virtual Machine",
                        "Java Variable Method",
                        "Java Version Manager",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
        "question":  "What is JDK?",
        "options":  [
                        "Java Development Kit",
                        "Java Debug Kit",
                        "Java Deployment Kit",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  4,
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
        "id":  5,
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
        "id":  6,
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
        "id":  7,
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
        "id":  8,
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
        "id":  9,
        "question":  "What is abstraction?",
        "options":  [
                        "Hide complexity",
                        "Show complexity",
                        "Increase complexity",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is an interface?",
        "options":  [
                        "Abstract class",
                        "Concrete class",
                        "Object",
                        "Method"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is a package?",
        "options":  [
                        "Namespace",
                        "Class",
                        "Method",
                        "Variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is exception handling?",
        "options":  [
                        "Try/catch",
                        "If/else",
                        "Loops",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is multithreading?",
        "options":  [
                        "Multiple threads",
                        "Single thread",
                        "No threads",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is a collection?",
        "options":  [
                        "Data structures",
                        "Variables",
                        "Methods",
                        "Classes"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is ArrayList?",
        "options":  [
                        "Dynamic array",
                        "Fixed array",
                        "Linked list",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is HashMap?",
        "options":  [
                        "Key-value pairs",
                        "List",
                        "Set",
                        "Queue"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is Spring Boot?",
        "options":  [
                        "Java framework",
                        "Python framework",
                        "JavaScript framework",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is Maven?",
        "options":  [
                        "Build tool",
                        "IDE",
                        "Database",
                        "Server"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is Gradle?",
        "options":  [
                        "Build tool",
                        "IDE",
                        "Database",
                        "Server"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is JUnit?",
        "options":  [
                        "Testing framework",
                        "Build tool",
                        "IDE",
                        "Database"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="Java Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
