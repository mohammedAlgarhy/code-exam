"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Vue.js?", options: ["Progressive JavaScript framework", "Backend framework", "CSS framework", "Database"], correctAnswer: 0 },
  { id: 2, question: "Which command creates a new Vue project?", options: ["npm create vue@latest", "vue create", "npx vue", "Both A and B"], correctAnswer: 3 },
  { id: 3, question: "What is the Vue instance?", options: ["Root component", "Data store", "Router", "Template"], correctAnswer: 0 },
  { id: 4, question: "What is the syntax for data binding?", options: ["{{ }}", "[ ]", "( )", "{ }"], correctAnswer: 0 },
  { id: 5, question: "What is a Vue component?", options: ["Reusable UI piece", "CSS file", "Store", "Router"], correctAnswer: 0 },
  { id: 6, question: "What does `v-bind` do?", options: ["Binds attributes dynamically", "Binds events", "Conditional rendering", "Looping"], correctAnswer: 0 },
  { id: 7, question: "What is the shorthand for `v-bind`?", options: [":", "@", "#", "&"], correctAnswer: 0 },
  { id: 8, question: "What does `v-on` do?", options: ["Listens to events", "Binds data", "Loops", "Conditionals"], correctAnswer: 0 },
  { id: 9, question: "What is the shorthand for `v-on`?", options: ["@", ":", "#", "&"], correctAnswer: 0 },
  { id: 10, question: "What is `v-model` used for?", options: ["Two-way data binding", "One-way binding", "Event binding", "Class binding"], correctAnswer: 0 },
  { id: 11, question: "What is the Composition API?", options: ["New way to write logic in Vue 3", "Old options API", "State management", "Routing"], correctAnswer: 0 },
  { id: 12, question: "What is Pinia?", options: ["State management for Vue", "CSS framework", "Build tool", "Testing library"], correctAnswer: 0 },
  { id: 13, question: "What is Vue Router?", options: ["Official routing library", "State management", "HTTP client", "Animation library"], correctAnswer: 0 },
  { id: 14, question: "How do you emit an event from child to parent?", options: ["$emit", "$on", "$broadcast", "$dispatch"], correctAnswer: 0 },
  { id: 15, question: "What is a computed property?", options: ["Cached derived value", "Method", "Watcher", "Data property"], correctAnswer: 0 },
  { id: 16, question: "What is a watcher?", options: ["Reacts to data changes", "Computed property", "Event handler", "Lifecycle hook"], correctAnswer: 0 },
  { id: 17, question: "What is the lifecycle hook `mounted`?", options: ["Called after component is mounted", "Before creation", "Before update", "After destroy"], correctAnswer: 0 },
  { id: 18, question: "How do you conditionally render an element?", options: ["v-if", "v-show", "Both", "v-else"], correctAnswer: 2 },
  { id: 19, question: "What does `v-for` do?", options: ["Loop over array/object", "Condition", "Bind", "Event"], correctAnswer: 0 },
  { id: 20, question: "What is the Vue CLI used for?", options: ["Project scaffolding and tooling", "State management", "Routing", "Testing"], correctAnswer: 0 }
];

export default function VueQuiz() {
  return (
    <QuizComponent
      title="Vue.js Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}