"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Angular?", options: ["A front-end framework", "A back-end framework", "A database", "A testing tool"], correctAnswer: 0 },
  { id: 2, question: "Which command creates a new Angular project?", options: ["ng new", "angular new", "ng create", "create angular"], correctAnswer: 0 },
  { id: 3, question: "What is a component in Angular?", options: ["A class with a template", "A service", "A pipe", "A module"], correctAnswer: 0 },
  { id: 4, question: "What does `ng serve` do?", options: ["Compiles and serves the app", "Runs tests", "Builds for production", "Installs dependencies"], correctAnswer: 0 },
  { id: 5, question: "What is dependency injection in Angular?", options: ["Providing dependencies to components", "Creating modules", "Styling components", "Handling events"], correctAnswer: 0 },
  { id: 6, question: "Which decorator defines a component?", options: ["@Component", "@Directive", "@Injectable", "@NgModule"], correctAnswer: 0 },
  { id: 7, question: "What is a module in Angular?", options: ["Container for components and services", "A single component", "A CSS file", "An HTML template"], correctAnswer: 0 },
  { id: 8, question: "What is data binding?", options: ["Synchronizing data between model and view", "Database connection", "API call", "Event handling"], correctAnswer: 0 },
  { id: 9, question: "Which syntax is used for property binding?", options: ["[property]", "(property)", "{{property}}", "*property"], correctAnswer: 0 },
  { id: 10, question: "Which syntax is used for event binding?", options: ["(event)", "[event]", "{{event}}", "*event"], correctAnswer: 0 },
  { id: 11, question: "What is a service in Angular?", options: ["Reusable logic class", "Component template", "Routing guard", "Pipe"], correctAnswer: 0 },
  { id: 12, question: "What is RxJS used for in Angular?", options: ["Reactive programming with observables", "Styling", "Testing", "Routing"], correctAnswer: 0 },
  { id: 13, question: "What does `ngOnInit` do?", options: ["Lifecycle hook called after component initialization", "Initializes module", "Starts server", "Loads CSS"], correctAnswer: 0 },
  { id: 14, question: "How do you create a new component?", options: ["ng generate component", "ng new component", "create component", "component add"], correctAnswer: 0 },
  { id: 15, question: "What is a directive in Angular?", options: ["Extends HTML with custom behavior", "A service", "A pipe", "A component"], correctAnswer: 0 },
  { id: 16, question: "Which directive conditionally includes a template?", options: ["*ngIf", "*ngFor", "*ngSwitch", "*ngClass"], correctAnswer: 0 },
  { id: 17, question: "Which directive repeats a template for each item?", options: ["*ngFor", "*ngIf", "*ngSwitch", "*ngTemplate"], correctAnswer: 0 },
  { id: 18, question: "What is the purpose of a pipe (`|`)?", options: ["Transform data in templates", "Call API", "Handle events", "Create modules"], correctAnswer: 0 },
  { id: 19, question: "How do you define routes in Angular?", options: ["RouterModule.forRoot(routes)", "Route.config()", "app.routing()", "createRoutes()"], correctAnswer: 0 },
  { id: 20, question: "What is the CLI command to build for production?", options: ["ng build --prod", "ng serve --prod", "ng compile --prod", "ng run --prod"], correctAnswer: 0 }
];

export default function AngularQuiz() {
  return (
    <QuizComponent
      title="Angular Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}