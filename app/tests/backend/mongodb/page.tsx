"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What type of database is MongoDB?", options: ["NoSQL document database", "SQL relational", "Graph database", "Key-value store"], correctAnswer: 0 },
  { id: 2, question: "What is a collection in MongoDB?", options: ["Group of documents", "Database", "Index", "Schema"], correctAnswer: 0 },
  { id: 3, question: "Which command shows all databases?", options: ["show dbs", "list databases", "db.show()", "show databases"], correctAnswer: 0 },
  { id: 4, question: "How do you switch to a database?", options: ["use <db>", "switch <db>", "connect <db>", "db.use()"], correctAnswer: 0 },
  { id: 5, question: "What is the method to insert a document into a collection?", options: ["db.collection.insert()", "db.collection.add()", "db.collection.push()", "db.insert()"], correctAnswer: 0 },
  { id: 6, question: "What is the default port for MongoDB?", options: ["27017", "3306", "5432", "8080"], correctAnswer: 0 },
  { id: 7, question: "Which method finds documents in a collection?", options: ["db.collection.find()", "db.collection.get()", "db.find()", "db.collection.select()"], correctAnswer: 0 },
  { id: 8, question: "What is an ObjectId in MongoDB?", options: ["Unique identifier for documents", "Data type for strings", "Index key", "Database name"], correctAnswer: 0 },
  { id: 9, question: "Which operator is used for equality in queries?", options: ["$eq", "$equal", "$is", "$match"], correctAnswer: 0 },
  { id: 10, question: "What does `db.collection.updateOne()` do?", options: ["Updates a single document", "Updates multiple documents", "Inserts a document", "Deletes a document"], correctAnswer: 0 },
  { id: 11, question: "How do you delete a database?", options: ["db.dropDatabase()", "db.deleteDatabase()", "db.remove()", "db.destroy()"], correctAnswer: 0 },
  { id: 12, question: "What is an index in MongoDB?", options: ["Performance optimization structure", "Unique key", "Foreign key", "Document reference"], correctAnswer: 0 },
  { id: 13, question: "Which command creates an index?", options: ["db.collection.createIndex()", "db.collection.addIndex()", "db.createIndex()", "db.collection.index()"], correctAnswer: 0 },
  { id: 14, question: "What is the aggregation framework?", options: ["Pipeline for data processing", "Schema validator", "Backup tool", "Replication mechanism"], correctAnswer: 0 },
  { id: 15, question: "Which operator filters documents in aggregation?", options: ["$match", "$filter", "$where", "$find"], correctAnswer: 0 },
  { id: 16, question: "What is a replica set in MongoDB?", options: ["Group of servers for redundancy", "Backup file", "Shard cluster", "Index set"], correctAnswer: 0 },
  { id: 17, question: "How do you sort query results?", options: [".sort()", ".order()", ".orderBy()", ".arrange()"], correctAnswer: 0 },
  { id: 18, question: "What does `$set` do in an update operation?", options: ["Sets value of a field", "Creates new collection", "Renames field", "Removes field"], correctAnswer: 0 },
  { id: 19, question: "Which method limits the number of results?", options: ["limit()", "take()", "skip()", "max()"], correctAnswer: 0 },
  { id: 20, question: "What is the purpose of `mongod`?", options: ["Daemon process for MongoDB", "Client shell", "Backup utility", "Import tool"], correctAnswer: 0 }
];

export default function MongoQuiz() {
  return (
    <QuizComponent
      title="MongoDB Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}