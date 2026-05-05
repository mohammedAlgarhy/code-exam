"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is C#?",
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
        "question":  "What is .NET?",
        "options":  [
                        "Framework",
                        "Database",
                        "Server",
                        "Tool"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
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
        "id":  4,
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
        "id":  5,
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
        "id":  6,
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
        "id":  7,
        "question":  "What is a property?",
        "options":  [
                        "Get/set accessor",
                        "Field",
                        "Method",
                        "Class"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is an event?",
        "options":  [
                        "User action",
                        "Method",
                        "Class",
                        "Property"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "What is a delegate?",
        "options":  [
                        "Function pointer",
                        "Class",
                        "Interface",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is LINQ?",
        "options":  [
                        "Language Integrated Query",
                        "Library",
                        "Framework",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is async/await?",
        "options":  [
                        "Asynchronous programming",
                        "Synchronous programming",
                        "Loop",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is a namespace?",
        "options":  [
                        "Organizes code",
                        "Class",
                        "Method",
                        "Property"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is an interface?",
        "options":  [
                        "Contract for classes",
                        "Class",
                        "Struct",
                        "Enum"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is a struct?",
        "options":  [
                        "Value type",
                        "Reference type",
                        "Class",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is an enum?",
        "options":  [
                        "Set of named constants",
                        "Class",
                        "Struct",
                        "Interface"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is exception handling?",
        "options":  [
                        "Try/catch/finally",
                        "If/else",
                        "Loops",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is a generic?",
        "options":  [
                        "Type parameter",
                        "Specific type",
                        "Any type",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is a collection?",
        "options":  [
                        "List, Dictionary",
                        "Array",
                        "Tuple",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is ASP.NET Core?",
        "options":  [
                        "Web framework",
                        "Desktop framework",
                        "Mobile framework",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is Entity Framework?",
        "options":  [
                        "ORM",
                        "Database",
                        "Server",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="C# Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
