"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High-Level Text Markup Language", "Hyper Tabular Markup Language", "None"], correctAnswer: 0 },
  { id: 2, question: "Which tag creates a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], correctAnswer: 0 },
  { id: 3, question: "What is the correct document type declaration?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML>", "<DOCTYPE html>", "<!DOCTYPE>"], correctAnswer: 0 },
  { id: 4, question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<head>"], correctAnswer: 0 },
  { id: 5, question: "Which tag creates an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: 0 },
  { id: 6, question: "How do you insert an image?", options: ["<img src='img.jpg'>", "<image src='img.jpg'>", "<img href='img.jpg'>", "<picture src='img.jpg'>"], correctAnswer: 0 },
  { id: 7, question: "What is the correct attribute for alternative text in an image?", options: ["alt", "title", "src", "href"], correctAnswer: 0 },
  { id: 8, question: "Which tag defines a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], correctAnswer: 0 },
  { id: 9, question: "Which tag creates a line break?", options: ["<br>", "<lb>", "<break>", "<br />"], correctAnswer: 0 },
  { id: 10, question: "What is the correct way to comment in HTML?", options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"], correctAnswer: 0 },
  { id: 11, question: "Which attribute opens a link in a new tab?", options: ["target='_blank'", "target='new'", "newtab='true'", "rel='external'"], correctAnswer: 0 },
  { id: 12, question: "What does the `<div>` tag do?", options: ["Defines a division or section", "Defines a header", "Defines a footer", "Defines a list"], correctAnswer: 0 },
  { id: 13, question: "Which tag is used for an inline style?", options: ["<style>", "<css>", "<inline>", "<styling>"], correctAnswer: 0 },
  { id: 14, question: "How do you create a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], correctAnswer: 0 },
  { id: 15, question: "Which tag creates a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], correctAnswer: 0 },
  { id: 16, question: "What is the purpose of `colspan`?", options: ["Merge columns", "Merge rows", "Set column width", "Set row height"], correctAnswer: 0 },
  { id: 17, question: "Which tag defines the header of a table?", options: ["<th>", "<thead>", "<tr>", "<td>"], correctAnswer: 0 },
  { id: 18, question: "What does the `<meta>` tag provide?", options: ["Metadata about HTML document", "Makes content responsive", "Links CSS", "Defines title"], correctAnswer: 0 },
  { id: 19, question: "How do you add a favicon?", options: ["<link rel='icon' href='favicon.ico'>", "<icon>", "<favicon>", "<link rel='shortcut'>"], correctAnswer: 0 },
  { id: 20, question: "Which input type is for email?", options: ["email", "text", "email address", "mail"], correctAnswer: 0 }
];

export default function HtmlQuiz() {
  return (
    <QuizComponent
      title="HTML Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}