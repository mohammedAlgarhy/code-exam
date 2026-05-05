"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Flutter?", options: ["UI toolkit by Google", "JavaScript framework", "Database", "Backend server"], correctAnswer: 0 },
  { id: 2, question: "What language is primarily used for Flutter development?", options: ["Dart", "Java", "Kotlin", "Swift"], correctAnswer: 0 },
  { id: 3, question: "What is a 'widget' in Flutter?", options: ["UI building block", "Database model", "API call", "State manager"], correctAnswer: 0 },
  { id: 4, question: "Which command creates a new Flutter project?", options: ["flutter create", "flutter new", "flutter init", "flutter start"], correctAnswer: 0 },
  { id: 5, question: "What is the purpose of `pubspec.yaml`?", options: ["Manage dependencies and assets", "Run tests", "Build APK", "Configure emulator"], correctAnswer: 0 },
  { id: 6, question: "What does 'hot reload' do?", options: ["Instantly apply code changes without restart", "Restart app fully", "Rebuild native code", "Clear cache"], correctAnswer: 0 },
  { id: 7, question: "Which widget is used for scrolling content vertically or horizontally?", options: ["SingleChildScrollView", "ListView", "Column", "Both A and B"], correctAnswer: 3 },
  { id: 8, question: "What is `StatefulWidget`?", options: ["Widget with mutable state", "Widget without state", "Static widget", "Layout widget"], correctAnswer: 0 },
  { id: 9, question: "How do you navigate to a new screen?", options: ["Navigator.push()", "Router.navigate()", "context.go()", "PageRouter.to()"], correctAnswer: 0 },
  { id: 10, question: "What is `build` method in a widget?", options: ["Describes how to display the widget", "Constructor", "Lifecycle method", "Event handler"], correctAnswer: 0 },
  { id: 11, question: "Which widget displays a list of items efficiently?", options: ["ListView.builder", "Column", "GridView", "List.generate"], correctAnswer: 0 },
  { id: 12, question: "What is the default entry point of a Flutter app?", options: ["main()", "runApp()", "void main() { runApp(...) }", "start()"], correctAnswer: 2 },
  { id: 13, question: "Which package is used for state management (provided by Flutter team)?", options: ["Provider", "Bloc", "Redux", "GetX"], correctAnswer: 0 },
  { id: 14, question: "What does `setState()` do?", options: ["Triggers rebuild", "Updates widget tree", "Changes state variable", "All of the above"], correctAnswer: 3 },
  { id: 15, question: "Which widget provides material design visual structure?", options: ["Scaffold", "Container", "MaterialApp", "AppBar"], correctAnswer: 0 },
  { id: 16, question: "How to run Flutter app on an emulator?", options: ["flutter run", "flutter start", "flutter emulator", "flutter launch"], correctAnswer: 0 },
  { id: 17, question: "What is the purpose of `FutureBuilder`?", options: ["Handle async data and update UI", "Network request", "Database query", "File I/O"], correctAnswer: 0 },
  { id: 18, question: "Which widget centers its child?", options: ["Center", "Align", "SizedBox", "Positioned"], correctAnswer: 0 },
  { id: 19, question: "What is `pub` in Flutter?", options: ["Package manager", "Build tool", "Testing framework", "Asset compiler"], correctAnswer: 0 },
  { id: 20, question: "Which command builds an APK for Android?", options: ["flutter build apk", "flutter apk", "flutter build android", "flutter make apk"], correctAnswer: 0 }
];

export default function FlutterQuiz() {
  return (
    <QuizComponent
      title="Flutter Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}