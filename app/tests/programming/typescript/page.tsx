"use client";
import QuizComponent from "../../../components/QuizComponent";

const questions = [
    {
        "correctAnswer":  0,
        "id":  1,
        "question":  "What is TypeScript?",
        "options":  [
                        "JavaScript superset",
                        "New language",
                        "Framework",
                        "Library"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  2,
        "question":  "What are basic types?",
        "options":  [
                        "string, number, boolean",
                        "var, let, const",
                        "function, class",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  3,
        "question":  "What is an interface?",
        "options":  [
                        "Define object structure",
                        "Function",
                        "Class",
                        "Variable"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  4,
        "question":  "What is a type alias?",
        "options":  [
                        "Custom type name",
                        "Variable",
                        "Function",
                        "Class"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  5,
        "question":  "What is union type?",
        "options":  [
                        "Multiple possible types",
                        "Single type",
                        "No type",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  6,
        "question":  "What is intersection type?",
        "options":  [
                        "Combine types",
                        "Separate types",
                        "Single type",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  7,
        "question":  "What is a generic?",
        "options":  [
                        "Reusable type",
                        "Specific type",
                        "Any type",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  8,
        "question":  "What is enum?",
        "options":  [
                        "Named constants",
                        "Variable",
                        "Function",
                        "Class"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  9,
        "question":  "What is tuple?",
        "options":  [
                        "Fixed-length array",
                        "Variable array",
                        "Object",
                        "String"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  10,
        "question":  "What is any type?",
        "options":  [
                        "Any value",
                        "Specific value",
                        "No value",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  11,
        "question":  "What is unknown type?",
        "options":  [
                        "Type-safe any",
                        "Any value",
                        "No value",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  12,
        "question":  "What is void type?",
        "options":  [
                        "No return value",
                        "Returns value",
                        "Any value",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  13,
        "question":  "What is null type?",
        "options":  [
                        "Absence of value",
                        "Value exists",
                        "Undefined",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  14,
        "question":  "What is undefined type?",
        "options":  [
                        "Not assigned value",
                        "Has value",
                        "Null",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  15,
        "question":  "What is type assertion?",
        "options":  [
                        "Override type inference",
                        "Create type",
                        "Delete type",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  16,
        "question":  "What is non-null assertion?",
        "options":  [
                        "Assume value not null",
                        "Force null",
                        "Check null",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  17,
        "question":  "What is optional chaining?",
        "options":  [
                        "Safe property access",
                        "Chain methods",
                        "Optional values",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  18,
        "question":  "What is nullish coalescing?",
        "options":  [
                        "Default value for null/undefined",
                        "Default for falsy",
                        "Both",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  19,
        "question":  "What is a decorator?",
        "options":  [
                        "Class/function annotation",
                        "Type",
                        "Interface",
                        "None"
                    ]
    },
    {
        "correctAnswer":  0,
        "id":  20,
        "question":  "What is tsconfig.json?",
        "options":  [
                        "TypeScript configuration",
                        "Package.json",
                        "Config.js",
                        "None"
                    ]
    }
];

export default function Test() {
  return (
    <QuizComponent
      title="TypeScript Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
