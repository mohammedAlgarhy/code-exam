"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is React Native?", options: ["Cross-platform framework by Meta", "Web framework", "Database", "Backend server"], correctAnswer: 0 },
  { id: 2, question: "Which language is used to write React Native apps?", options: ["JavaScript/TypeScript", "Dart", "Kotlin", "Swift"], correctAnswer: 0 },
  { id: 3, question: "What is the core concept of React Native?", options: ["Native components using JavaScript", "WebView", "Hybrid", "Ionic"], correctAnswer: 0 },
  { id: 4, question: "Which command creates a new React Native project?", options: ["npx react-native init", "npm create react-native", "expo init", "Both A and C"], correctAnswer: 3 },
  { id: 5, question: "What is Expo?", options: ["Toolchain for React Native", "Alternative to React", "Database", "State management"], correctAnswer: 0 },
  { id: 6, question: "What does `View` component do?", options: ["Container for layout", "Text display", "Image", "Button"], correctAnswer: 0 },
  { id: 7, question: "What is the equivalent of CSS `flexbox` in React Native?", options: ["Style { flex: 1 }", "Flex layout", "CSS modules", "Native wind"], correctAnswer: 0 },
  { id: 8, question: "How do you add navigation in React Native?", options: ["React Navigation", "React Router", "Native Router", "Expo Router"], correctAnswer: 0 },
  { id: 9, question: "What is `useState` hook used for?", options: ["Manage component state", "Fetch data", "Navigation", "Styling"], correctAnswer: 0 },
  { id: 10, question: "What is the purpose of `FlatList`?", options: ["Efficiently render large lists", "Scroll view", "Button list", "Grid layout"], correctAnswer: 0 },
  { id: 11, question: "How do you style components in React Native?", options: ["StyleSheet.create", "CSS file", "Inline style", "Tailwind"], correctAnswer: 0 },
  { id: 12, question: "Which component displays text?", options: ["Text", "Label", "TextView", "Paragraph"], correctAnswer: 0 },
  { id: 13, question: "What is the role of 'bridge' in React Native?", options: ["Communication between JS and native", "Network request", "Database bridge", "UI rendering"], correctAnswer: 0 },
  { id: 14, question: "What is Hermes?", options: ["JavaScript engine optimized for React Native", "UI library", "Build tool", "Testing framework"], correctAnswer: 0 },
  { id: 15, question: "How do you run React Native app on Android emulator?", options: ["npx react-native run-android", "npm start android", "expo android", "react run android"], correctAnswer: 0 },
  { id: 16, question: "What is `useEffect` hook used for?", options: ["Side effects (API calls, subscriptions)", "State management", "Layout", "Event handler"], correctAnswer: 0 },
  { id: 17, question: "Which library is commonly used for state management?", options: ["Redux", "Zustand", "MobX", "All of the above"], correctAnswer: 3 },
  { id: 18, question: "What is `TouchableOpacity`?", options: ["Button wrapper with opacity feedback", "Text input", "Modal", "Alert"], correctAnswer: 0 },
  { id: 19, question: "How do you handle text input?", options: ["TextInput component", "Input component", "TextField", "EditText"], correctAnswer: 0 },
  { id: 20, question: "What is the default debugging tool for React Native?", options: ["React Native Debugger", "Chrome DevTools", "Flipper", "All of the above"], correctAnswer: 3 }
];

export default function ReactNativeQuiz() {
  return (
    <QuizComponent
      title="React Native Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}