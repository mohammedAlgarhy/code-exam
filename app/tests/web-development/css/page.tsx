"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: 0 },
  { id: 2, question: "Which property changes the text color?", options: ["color", "text-color", "font-color", "foreground"], correctAnswer: 0 },
  { id: 3, question: "How do you select an element by id?", options: ["#id", ".id", "id", "*id"], correctAnswer: 0 },
  { id: 4, question: "How do you select an element by class?", options: [".class", "#class", "class", "*class"], correctAnswer: 0 },
  { id: 5, question: "Which property sets the background image?", options: ["background-image", "image-background", "bg-image", "background-img"], correctAnswer: 0 },
  { id: 6, question: "What does `display: none` do?", options: ["Hides element completely", "Makes element invisible but takes space", "Removes element from DOM", "Hides content only"], correctAnswer: 0 },
  { id: 7, question: "What is the difference between `visibility: hidden` and `display: none`?", options: ["Hidden occupies space, none does not", "None occupies space, hidden does not", "Both behave the same", "None removes from DOM only"], correctAnswer: 0 },
  { id: 8, question: "How do you add a border?", options: ["border: 1px solid black", "border-width: 1px", "border-style: solid", "All of the above"], correctAnswer: 3 },
  { id: 9, question: "Which property changes the font size?", options: ["font-size", "text-size", "size", "font-weight"], correctAnswer: 0 },
  { id: 10, question: "What is the box model?", options: ["Margin, border, padding, content", "Width, height, padding, margin", "Content, padding, border, margin", "All of the above"], correctAnswer: 3 },
  { id: 11, question: "How do you center a block element horizontally?", options: ["margin: 0 auto", "text-align: center", "position: center", "display: center"], correctAnswer: 0 },
  { id: 12, question: "What does `position: absolute` do?", options: ["Positions relative to nearest positioned ancestor", "Relative to viewport", "Relative to normal flow", "Fixed position"], correctAnswer: 0 },
  { id: 13, question: "Which property adds round corners?", options: ["border-radius", "corner-radius", "round-corners", "border-round"], correctAnswer: 0 },
  { id: 14, question: "What is a pseudo-class?", options: ["Define special state of an element", "Class added by JavaScript", "Virtual class", "Inline style"], correctAnswer: 0 },
  { id: 15, question: "Which syntax is correct for hover effect?", options: ["a:hover", "a.hover", "a:mouseover", "a onhover"], correctAnswer: 0 },
  { id: 16, question: "What does `z-index` control?", options: ["Stack order", "Opacity", "Scrolling", "Zoom level"], correctAnswer: 0 },
  { id: 17, question: "How do you make a flex container?", options: ["display: flex", "display: flexbox", "display: grid", "display: block"], correctAnswer: 0 },
  { id: 18, question: "Which property creates a grid?", options: ["display: grid", "display: flex", "display: block", "display: inline"], correctAnswer: 0 },
  { id: 19, question: "What does `@media` do?", options: ["Responsive design queries", "Import media files", "Define animations", "Link stylesheets"], correctAnswer: 0 },
  { id: 20, question: "How do you include an external CSS file?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css href='style.css'>", "<stylesheet>style.css</stylesheet>"], correctAnswer: 0 }
];

export default function CssQuiz() {
  return (
    <QuizComponent
      title="CSS Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}