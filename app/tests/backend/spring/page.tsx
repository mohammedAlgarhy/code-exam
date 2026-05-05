"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Spring Boot?", options: ["Java framework for microservices", "Python framework", "JavaScript library", "Database"], correctAnswer: 0 },
  { id: 2, question: "What does the `@SpringBootApplication` annotation do?", options: ["Enables auto-configuration and component scanning", "Starts the server", "Defines a bean", "Configures security"], correctAnswer: 0 },
  { id: 3, question: "Which file is used to manage dependencies in Spring Boot?", options: ["pom.xml (Maven) or build.gradle (Gradle)", "application.properties", "web.xml", "spring.xml"], correctAnswer: 0 },
  { id: 4, question: "What is the default embedded server in Spring Boot?", options: ["Tomcat", "Jetty", "Undertow", "Netty"], correctAnswer: 0 },
  { id: 5, question: "How do you create a REST controller?", options: ["@RestController", "@Controller", "@Service", "@Component"], correctAnswer: 0 },
  { id: 6, question: "Which annotation maps HTTP GET requests?", options: ["@GetMapping", "@RequestMapping(method=GET)", "Both", "@RequestMethod.GET"], correctAnswer: 2 },
  { id: 7, question: "What is dependency injection in Spring?", options: ["IoC design pattern", "Database injection", "Security feature", "Logging mechanism"], correctAnswer: 0 },
  { id: 8, question: "What does `@Autowired` do?", options: ["Injects dependencies automatically", "Creates a bean", "Scans components", "Configures properties"], correctAnswer: 0 },
  { id: 9, question: "Which annotation makes a class a Spring Bean?", options: ["@Component", "@Bean", "@Service", "All of the above"], correctAnswer: 3 },
  { id: 10, question: "What is the purpose of `application.properties`?", options: ["Configuration file", "Log file", "Database migration", "Security policy"], correctAnswer: 0 },
  { id: 11, question: "How do you run a Spring Boot application?", options: ["java -jar app.jar", "spring run app", "mvn spring-boot:run", "Both A and C"], correctAnswer: 3 },
  { id: 12, question: "What is Spring Data JPA?", options: ["ORM abstraction", "Web framework", "Security module", "Cloud module"], correctAnswer: 0 },
  { id: 13, question: "Which annotation defines a primary key in JPA?", options: ["@Id", "@PrimaryKey", "@Key", "@GeneratedValue"], correctAnswer: 0 },
  { id: 14, question: "What does `@Transactional` do?", options: ["Manages database transactions", "Creates a transaction table", "Logs queries", "Rolls back changes"], correctAnswer: 0 },
  { id: 15, question: "What is Spring Security used for?", options: ["Authentication and authorization", "Database connection", "Caching", "Messaging"], correctAnswer: 0 },
  { id: 16, question: "Which annotation enables scheduling?", options: ["@EnableScheduling", "@Scheduled", "@Async", "@EnableAsync"], correctAnswer: 0 },
  { id: 17, question: "What is the default port for Spring Boot?", options: ["8080", "8081", "3000", "5000"], correctAnswer: 0 },
  { id: 18, question: "How do you change the server port?", options: ["server.port=8081 in application.properties", "port=8081", "http.port=8081", "app.port=8081"], correctAnswer: 0 },
  { id: 19, question: "What is Spring Boot Actuator?", options: ["Monitoring and management endpoints", "Testing tool", "Build plugin", "Database migration"], correctAnswer: 0 },
  { id: 20, question: "Which annotation is used for exception handling globally?", options: ["@ControllerAdvice", "@ExceptionHandler", "@RestControllerAdvice", "Both A and C"], correctAnswer: 3 }
];

export default function SpringQuiz() {
  return (
    <QuizComponent
      title="Spring Boot Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}