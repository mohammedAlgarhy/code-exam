"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"], correctAnswer: 0 },
  { id: 2, question: "Which SQL statement retrieves data from a database?", options: ["SELECT", "GET", "FETCH", "EXTRACT"], correctAnswer: 0 },
  { id: 3, question: "What is the difference between `DELETE` and `TRUNCATE`?", options: ["DELETE logs rows, TRUNCATE resets table", "Same", "TRUNCATE can have WHERE", "DELETE is faster"], correctAnswer: 0 },
  { id: 4, question: "Which clause filters rows after grouping?", options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"], correctAnswer: 0 },
  { id: 5, question: "What does `JOIN` do?", options: ["Combine rows from two tables", "Add columns", "Delete duplicates", "Create index"], correctAnswer: 0 },
  { id: 6, question: "What is a primary key?", options: ["Unique identifier for a row", "Foreign key", "Index", "Constraint for null"], correctAnswer: 0 },
  { id: 7, question: "Which aggregate function counts rows?", options: ["COUNT()", "SUM()", "AVG()", "TOTAL()"], correctAnswer: 0 },
  { id: 8, question: "What does `DISTINCT` do?", options: ["Removes duplicate rows", "Sorts results", "Filters nulls", "Groups results"], correctAnswer: 0 },
  { id: 9, question: "Which command creates a new table?", options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"], correctAnswer: 0 },
  { id: 10, question: "What is a foreign key?", options: ["References primary key of another table", "Unique key", "Composite key", "Indexed column"], correctAnswer: 0 },
  { id: 11, question: "How do you update data in a table?", options: ["UPDATE ... SET ...", "MODIFY ... SET ...", "CHANGE ... VALUES ...", "ALTER ... UPDATE ..."], correctAnswer: 0 },
  { id: 12, question: "Which operator is used for pattern matching?", options: ["LIKE", "MATCH", "REGEX", "SIMILAR"], correctAnswer: 0 },
  { id: 13, question: "What does `INNER JOIN` return?", options: ["Only matching rows from both tables", "All rows from left table", "All rows from right table", "All rows from both tables"], correctAnswer: 0 },
  { id: 14, question: "What is the purpose of an index?", options: ["Speed up queries", "Enforce constraints", "Backup data", "Normalize data"], correctAnswer: 0 },
  { id: 15, question: "Which statement removes a table?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE"], correctAnswer: 0 },
  { id: 16, question: "What does `NULL` represent?", options: ["Missing or unknown value", "Zero", "Empty string", "False"], correctAnswer: 0 },
  { id: 17, question: "Which clause sorts results?", options: ["ORDER BY", "SORT BY", "GROUP BY", "ARRANGE BY"], correctAnswer: 0 },
  { id: 18, question: "What is a view in SQL?", options: ["Virtual table based on SELECT", "Stored procedure", "Index", "Trigger"], correctAnswer: 0 },
  { id: 19, question: "Which function returns the current date and time?", options: ["NOW()", "CURRENT_DATE()", "GETDATE()", "All of the above"], correctAnswer: 3 },
  { id: 20, question: "What does `GROUP BY` do?", options: ["Groups rows with same values", "Sorts rows", "Filters rows", "Joins tables"], correctAnswer: 0 }
];

export default function SqlQuiz() {
  return (
    <QuizComponent
      title="SQL Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}