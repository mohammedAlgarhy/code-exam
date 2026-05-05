"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "Sample question 1", options: ["A","B","C","D"], correctAnswer: 0 },
  { id: 2, question: "Sample question 2", options: ["A","B","C","D"], correctAnswer: 1 }
];

export default function GenericTest() {
  return (
    <QuizComponent
      title="Sample Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}
