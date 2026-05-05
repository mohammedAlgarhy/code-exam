"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Bootstrap?", options: ["CSS framework", "JavaScript framework", "Backend framework", "Database"], correctAnswer: 0 },
  { id: 2, question: "Which class creates a responsive container?", options: [".container", ".container-fluid", ".row", ".col"], correctAnswer: 0 },
  { id: 3, question: "What does the `col-sm-4` class mean?", options: ["Column small 4 units", "Column size 4", "Row size 4", "Margin 4"], correctAnswer: 0 },
  { id: 4, question: "Which class adds padding and margins?", options: ["spacing utilities (p-*, m-*)", "container", "row", "col"], correctAnswer: 0 },
  { id: 5, question: "How do you make a button primary?", options: ["btn btn-primary", "button-primary", "btn-primary", "primary-btn"], correctAnswer: 0 },
  { id: 6, question: "What is the default grid system?", options: ["12 columns", "16 columns", "8 columns", "10 columns"], correctAnswer: 0 },
  { id: 7, question: "Which class creates a responsive navigation bar?", options: ["navbar", "nav", "navigation", "menu"], correctAnswer: 0 },
  { id: 8, question: "How do you center text?", options: ["text-center", "align-center", "center-text", "text-middle"], correctAnswer: 0 },
  { id: 9, question: "Which class adds a border?", options: ["border", "rounded", "shadow", "outline"], correctAnswer: 0 },
  { id: 10, question: "What does `img-fluid` do?", options: ["Makes image responsive", "Adds border", "Rounds corners", "Centers image"], correctAnswer: 0 },
  { id: 11, question: "Which class creates a card component?", options: ["card", "panel", "widget", "box"], correctAnswer: 0 },
  { id: 12, question: "How do you create a modal?", options: ["modal", "dialog", "popup", "overlay"], correctAnswer: 0 },
  { id: 13, question: "Which utility sets display to flex?", options: ["d-flex", "display-flex", "flex", "flexbox"], correctAnswer: 0 },
  { id: 14, question: "What is the purpose of `justify-content-center`?", options: ["Center items horizontally in flex", "Center text", "Center image", "Center page"], correctAnswer: 0 },
  { id: 15, question: "How do you make a button outline?", options: ["btn-outline-primary", "btn-border", "outline-btn", "btn-outline"], correctAnswer: 0 },
  { id: 16, question: "Which class adds shadow?", options: ["shadow", "box-shadow", "depth", "elevation"], correctAnswer: 0 },
  { id: 17, question: "What does `mb-3` mean?", options: ["Margin bottom 3", "Margin top 3", "Margin left 3", "Margin right 3"], correctAnswer: 0 },
  { id: 18, question: "How do you make a badge?", options: ["badge", "label", "tag", "status"], correctAnswer: 0 },
  { id: 19, question: "Which class creates a progress bar?", options: ["progress", "progress-bar", "loading", "bar"], correctAnswer: 1 },
  { id: 20, question: "What is the CDN link for Bootstrap?", options: ["https://cdn.jsdelivr.net/npm/bootstrap@5/", "https://bootstrap.com", "https://getbootstrap.com/cdn", "https://bootcss.com"], correctAnswer: 0 }
];

export default function BootstrapQuiz() {
  return (
    <QuizComponent
      title="Bootstrap Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}