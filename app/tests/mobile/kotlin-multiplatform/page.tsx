"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Kotlin Multiplatform (KMP)?", options: ["SDK for cross-platform development", "Android-only framework", "Database", "Testing library"], correctAnswer: 0 },
  { id: 2, question: "Which language is used in KMP?", options: ["Kotlin", "Java", "Swift", "C#"], correctAnswer: 0 },
  { id: 3, question: "What does 'expected' and 'actual' declarations do?", options: ["Platform-specific implementations", "Create classes", "Define interfaces", "Handle exceptions"], correctAnswer: 0 },
  { id: 4, question: "Which platforms does KMP target?", options: ["Android, iOS, JVM, JS, Native", "Only Android", "Only iOS", "Windows only"], correctAnswer: 0 },
  { id: 5, question: "What is the common module in KMP?", options: ["Shared code across platforms", "Platform-specific code", "Test module", "Resource folder"], correctAnswer: 0 },
  { id: 6, question: "How do you share business logic between iOS and Android?", options: ["Write once in common module", "Separate code for each", "Use Java only", "Use Swift only"], correctAnswer: 0 },
  { id: 7, question: "Which tool is used to set up KMP projects?", options: ["Kotlin Multiplatform Mobile plugin", "Android Studio", "IntelliJ IDEA", "All of the above"], correctAnswer: 3 },
  { id: 8, question: "What is the purpose of `kotlinx.coroutines` in KMP?", options: ["Asynchronous programming", "UI rendering", "Database access", "Network calls"], correctAnswer: 0 },
  { id: 9, question: "Which annotation marks a function to be available in Swift?", options: ["@Hilt", "@ObjCName", "@Common", "@Platform"], correctAnswer: 1 },
  { id: 10, question: "What is the default source set directory structure?", options: ["commonMain, androidMain, iosMain", "shared, platform, native", "src/common, src/android, src/ios", "main, test, build"], correctAnswer: 0 },
  { id: 11, question: "How do you access platform-specific APIs in KMP?", options: ["Use `expected` and `actual`", "Directly call", "Through reflection", "Not possible"], correctAnswer: 0 },
  { id: 12, question: "What is the role of Gradle in KMP?", options: ["Build automation and dependency management", "Testing", "UI design", "Version control"], correctAnswer: 0 },
  { id: 13, question: "Which library is used for serialization in KMP?", options: ["kotlinx.serialization", "Gson", "Moshi", "Jackson"], correctAnswer: 0 },
  { id: 14, question: "Can KMP share UI code across platforms?", options: ["No, only business logic", "Yes, fully", "Only on Android", "Only on iOS"], correctAnswer: 0 },
  { id: 15, question: "What is `expect class` used for?", options: ["Declare class expected to have platform-specific implementations", "Create generic class", "Define interface", "Seal class"], correctAnswer: 0 },
  { id: 16, question: "Which IDE is recommended for KMP development?", options: ["Android Studio / IntelliJ IDEA", "Xcode", "VS Code", "Eclipse"], correctAnswer: 0 },
  { id: 17, question: "What is Kotlin Multiplatform Mobile (KMM)?", options: ["Subset for mobile development", "Full stack KMP", "Web framework", "Testing suite"], correctAnswer: 0 },
  { id: 18, question: "How do you add iOS target in KMP?", options: ["Configure in build.gradle.kts", "Install Xcode plugin", "Use terminal", "Not possible"], correctAnswer: 0 },
  { id: 19, question: "What is the purpose of `cinterop`?", options: ["Generate Kotlin bindings for C libraries", "Compile Swift code", "Create Objective-C headers", "Run iOS tests"], correctAnswer: 0 },
  { id: 20, question: "Which dependency manager is used for KMP?", options: ["Gradle (with Maven Central / CocoaPods for iOS)", "CocoaPods only", "Swift Package Manager", "Bazel"], correctAnswer: 0 }
];

export default function KmpQuiz() {
  return (
    <QuizComponent
      title="Kotlin Multiplatform Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}