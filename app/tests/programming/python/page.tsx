"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What type of language is Python?",
        "options":  [
                        "Interpreted",
                        "Compiled",
                        "Assembly",
                        "Machine"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  2,
        "question":  "How to print in Python?",
        "options":  [
                        "print()",
                        "console.log()",
                        "echo",
                        "printf"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
        "question":  "What is a list?",
        "options":  [
                        "Mutable sequence",
                        "Immutable sequence",
                        "Dictionary",
                        "Set"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  4,
        "question":  "What is a tuple?",
        "options":  [
                        "Immutable sequence",
                        "Mutable sequence",
                        "Dictionary",
                        "Set"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  5,
        "question":  "What is a dictionary?",
        "options":  [
                        "Key-value pairs",
                        "List",
                        "Tuple",
                        "Set"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  6,
        "question":  "What is PEP 8?",
        "options":  [
                        "Style guide",
                        "Framework",
                        "Library",
                        "Tool"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  7,
        "question":  "What is pip?",
        "options":  [
                        "Package manager",
                        "Framework",
                        "Library",
                        "Tool"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is Django?",
        "options":  [
                        "Web framework",
                        "ORM",
                        "Library",
                        "Tool"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "What is Flask?",
        "options":  [
                        "Micro-framework",
                        "Full framework",
                        "ORM",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is NumPy?",
        "options":  [
                        "Numerical library",
                        "Web framework",
                        "ORM",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is Pandas?",
        "options":  [
                        "Data analysis library",
                        "Web framework",
                        "ORM",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is a decorator?",
        "options":  [
                        "Modifies function behavior",
                        "Class",
                        "Module",
                        "Package"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is a generator?",
        "options":  [
                        "Produces sequence of values",
                        "Class",
                        "Module",
                        "Function"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is a lambda?",
        "options":  [
                        "Anonymous function",
                        "Named function",
                        "Class",
                        "Module"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is list comprehension?",
        "options":  [
                        "Create lists concisely",
                        "Loop",
                        "Function",
                        "Class"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is exception handling?",
        "options":  [
                        "Try/except blocks",
                        "If/else",
                        "Loops",
                        "Functions"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is a module?",
        "options":  [
                        "Python file",
                        "Function",
                        "Class",
                        "Variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is a package?",
        "options":  [
                        "Directory of modules",
                        "Single file",
                        "Library",
                        "Framework"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is a virtual environment?",
        "options":  [
                        "Isolated Python environment",
                        "Virtual machine",
                        "Container",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is type hinting?",
        "options":  [
                        "Specify variable types",
                        "Comments",
                        "Documentation",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="Python Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
