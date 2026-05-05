"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Tailwind CSS?", options: ["Utility-first CSS framework", "Component-based framework", "JavaScript library", "Backend framework"], correctAnswer: 0 },
  { id: 2, question: "How do you set text color to blue?", options: ["text-blue-500", "color-blue", "bg-blue-500", "text-blue"], correctAnswer: 0 },
  { id: 3, question: "Which class centers text?", options: ["text-center", "center-text", "align-center", "text-middle"], correctAnswer: 0 },
  { id: 4, question: "How do you add padding of 1rem?", options: ["p-4", "p-1", "pt-4", "p-2"], correctAnswer: 0 },
  { id: 5, question: "What does `flex` class do?", options: ["Enables flexbox", "Flexible container", "Flex items", "All of the above"], correctAnswer: 3 },
  { id: 6, question: "How do you make a button rounded?", options: ["rounded", "rounded-md", "rounded-lg", "All of the above"], correctAnswer: 3 },
  { id: 7, question: "Which class adds a shadow?", options: ["shadow", "shadow-md", "shadow-lg", "All of the above"], correctAnswer: 3 },
  { id: 8, question: "How do you set width to 50%?", options: ["w-1/2", "w-50", "w-50%", "w-half"], correctAnswer: 0 },
  { id: 9, question: "What is the default spacing unit for `m-1`?", options: ["0.25rem", "0.5rem", "1rem", "0.125rem"], correctAnswer: 0 },
  { id: 10, question: "How do you make a grid?", options: ["grid", "display-grid", "d-grid", "grid-cols"], correctAnswer: 0 },
  { id: 11, question: "Which class hides an element?", options: ["hidden", "invisible", "display-none", "opacity-0"], correctAnswer: 0 },
  { id: 12, question: "How do you set background color to red?", options: ["bg-red-500", "background-red", "red-bg", "bg-red"], correctAnswer: 0 },
  { id: 13, question: "What does `hover:` prefix do?", options: ["Applies styles on hover", "Hover animation", "Responsive hover", "None"], correctAnswer: 0 },
  { id: 14, question: "How do you make a container responsive?", options: ["container", "responsive", "max-w-screen-xl", "w-full"], correctAnswer: 0 },
  { id: 15, question: "Which class sets font size to 1.125rem?", options: ["text-lg", "text-base", "text-sm", "text-xl"], correctAnswer: 0 },
  { id: 16, question: "How do you create a border?", options: ["border", "border-2", "border-black", "All of the above"], correctAnswer: 3 },
  { id: 17, question: "What does `mx-auto` do?", options: ["Horizontal margin auto (centers block)", "Margin x auto", "Auto margin both sides", "All of the above"], correctAnswer: 3 },
  { id: 18, question: "How do you add a transition?", options: ["transition", "transition-all", "duration-300", "All of the above"], correctAnswer: 3 },
  { id: 19, question: "Which class sets position to relative?", options: ["relative", "pos-relative", "position-relative", "rel"], correctAnswer: 0 },
  { id: 20, question: "How do you customize Tailwind config?", options: ["tailwind.config.js", "config.css", "tailwind.css", "theme.config"], correctAnswer: 0 }
];

export default function TailwindQuiz() {
  return (
    <QuizComponent
      title="Tailwind CSS Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}