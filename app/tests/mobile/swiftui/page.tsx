"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is SwiftUI?", options: ["UI framework by Apple", "Database", "Backend service", "Testing tool"], correctAnswer: 0 },
  { id: 2, question: "Which language is used with SwiftUI?", options: ["Swift", "Objective-C", "JavaScript", "Kotlin"], correctAnswer: 0 },
  { id: 3, question: "What is the main building block of SwiftUI?", options: ["View", "Controller", "Storyboard", "XIB"], correctAnswer: 0 },
  { id: 4, question: "What does the `@State` property wrapper do?", options: ["Manage mutable state within a view", "Fetch data", "Inject dependency", "Style component"], correctAnswer: 0 },
  { id: 5, question: "What is a `VStack`?", options: ["Vertical stack of views", "Virtual stack", "Vertical scroll", "View container"], correctAnswer: 0 },
  { id: 6, question: "How do you create a button in SwiftUI?", options: ["Button(action:label:)", "UIButton", "TouchableOpacity", "Pressable"], correctAnswer: 0 },
  { id: 7, question: "What is `some View` in SwiftUI?", options: ["Opaque return type", "Any view", "Concrete view", "Protocol"], correctAnswer: 0 },
  { id: 8, question: "Which keyword is used for preview in SwiftUI?", options: ["#Preview", "@Preview", "@ViewBuilder", "PreviewProvider"], correctAnswer: 0 },
  { id: 9, question: "What is the purpose of `@Binding`?", options: ["Create two-way connection to state owned by another view", "Local state", "Environment state", "Observable object"], correctAnswer: 0 },
  { id: 10, question: "How do you navigate to a new screen?", options: ["NavigationStack and NavigationLink", "pushViewController", "Navigator.push", "Router.navigate"], correctAnswer: 0 },
  { id: 11, question: "What is `List` in SwiftUI?", options: ["Display scrollable rows", "Array of data", "Collection view", "Picker"], correctAnswer: 0 },
  { id: 12, question: "What does `@ObservedObject` do?", options: ["Subscribe to an observable object", "Store value", "Environment object", "State binding"], correctAnswer: 0 },
  { id: 13, question: "Which modifier adds padding?", options: [".padding()", ".margin()", ".spacing()", ".inset()"], correctAnswer: 0 },
  { id: 14, question: "What is `GeometryReader` used for?", options: ["Access size/position of parent", "Read geometry of views", "Layout calculations", "All of the above"], correctAnswer: 3 },
  { id: 15, question: "How do you create an alert in SwiftUI?", options: [".alert(isPresented:content:)", "UIAlertController", "AlertView", "showAlert()"], correctAnswer: 0 },
  { id: 16, question: "What is `@Environment`?", options: ["Read values from environment", "Local storage", "Key-value observing", "Notification center"], correctAnswer: 0 },
  { id: 17, question: "Which modifier changes background color?", options: [".background()", ".backgroundColor()", ".bg()", ".color()"], correctAnswer: 0 },
  { id: 18, question: "What is `ZStack`?", options: ["Overlay views on top of each other", "Zoom stack", "Z-axis layout", "Shadow view"], correctAnswer: 0 },
  { id: 19, question: "What is the purpose of `@Published`?", options: ["Mark property as observable", "Publish changes", "Combine publisher", "All of the above"], correctAnswer: 3 },
  { id: 20, question: "Which platform requires SwiftUI?", options: ["iOS 13+, macOS 10.15+, watchOS 6+, tvOS 13+", "Only iOS", "iOS 11+", "macOS only"], correctAnswer: 0 }
];

export default function SwiftUIQuiz() {
  return (
    <QuizComponent
      title="SwiftUI Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}