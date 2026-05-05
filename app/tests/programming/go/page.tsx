"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is Go?",
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
        "question":  "What is a goroutine?",
        "options":  [
                        "Lightweight thread",
                        "Function",
                        "Class",
                        "Variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
        "question":  "What is a channel?",
        "options":  [
                        "Communication between goroutines",
                        "Database",
                        "File",
                        "Network"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  4,
        "question":  "What is a defer?",
        "options":  [
                        "Delay execution",
                        "Execute immediately",
                        "Skip execution",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  5,
        "question":  "What is a slice?",
        "options":  [
                        "Dynamic array",
                        "Fixed array",
                        "Map",
                        "Struct"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  6,
        "question":  "What is a map?",
        "options":  [
                        "Key-value pairs",
                        "List",
                        "Array",
                        "Slice"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  7,
        "question":  "What is a struct?",
        "options":  [
                        "Collection of fields",
                        "Class",
                        "Interface",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is an interface?",
        "options":  [
                        "Set of method signatures",
                        "Concrete type",
                        "Struct",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "What is a pointer?",
        "options":  [
                        "Memory address",
                        "Value",
                        "Reference",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is the \new keyword?",
        "options":  [
                        "Allocates zeroed memory",
                        "Allocates initialized memory",
                        "Creates pointer",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is a package?",
        "options":  [
                        "Organizes code",
                        "Class",
                        "Function",
                        "Variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is the go keyword?",
        "options":  [
                        "Starts a goroutine",
                        "Starts a function",
                        "Starts a loop",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is a select?",
        "options":  [
                        "Waits on channel operations",
                        "Loop",
                        "Condition",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is error handling in Go?",
        "options":  [
                        "Multiple return values",
                        "Try/catch",
                        "Exceptions",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is a receiver?",
        "options":  [
                        "Method attached to type",
                        "Function parameter",
                        "Return value",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is a blank identifier?",
        "options":  [
                        "_",
                        "?",
                        "*",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is a context?",
        "options":  [
                        "Carries deadlines/cancellation",
                        "Database",
                        "Network",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is a mutex?",
        "options":  [
                        "Mutual exclusion lock",
                        "Channel",
                        "Goroutine",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is a waitgroup?",
        "options":  [
                        "Waits for goroutines",
                        "Channel",
                        "Mutex",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is go mod?",
        "options":  [
                        "Module management",
                        "Package manager",
                        "Build tool",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="Go Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
