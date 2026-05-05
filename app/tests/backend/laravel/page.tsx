"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Laravel?", options: ["PHP framework", "JavaScript framework", "Python framework", "Ruby framework"], correctAnswer: 0 },
  { id: 2, question: "Which command creates a new Laravel project?", options: ["composer create-project laravel/laravel", "laravel new", "php artisan new", "Both A and B"], correctAnswer: 3 },
  { id: 3, question: "What is Artisan?", options: ["Command-line tool", "Database ORM", "Template engine", "Testing suite"], correctAnswer: 0 },
  { id: 4, question: "Which file contains database configuration?", options: [".env", "config/database.php", "database.php", "Both A and B"], correctAnswer: 3 },
  { id: 5, question: "How do you run the Laravel development server?", options: ["php artisan serve", "php serve", "artisan run", "php start"], correctAnswer: 0 },
  { id: 6, question: "What is Eloquent?", options: ["ORM for Laravel", "Template engine", "Router", "Middleware"], correctAnswer: 0 },
  { id: 7, question: "Which command creates a model?", options: ["php artisan make:model", "php artisan model:create", "php artisan create:model", "php artisan new:model"], correctAnswer: 0 },
  { id: 8, question: "What is a migration in Laravel?", options: ["Version control for database", "Seeding data", "Creating controllers", "Managing routes"], correctAnswer: 0 },
  { id: 9, question: "Which command runs migrations?", options: ["php artisan migrate", "php artisan db:migrate", "php artisan migrate:run", "php artisan migrate:refresh"], correctAnswer: 0 },
  { id: 10, question: "What does Blade do?", options: ["Template engine", "CSS preprocessor", "JavaScript compiler", "Asset manager"], correctAnswer: 0 },
  { id: 11, question: "How do you output a variable in Blade?", options: ["{{ $var }}", "<?= $var ?>", "{!! $var !!}", "[ $var ]"], correctAnswer: 0 },
  { id: 12, question: "What is a service container?", options: ["Dependency injection manager", "Cache driver", "Session handler", "Event dispatcher"], correctAnswer: 0 },
  { id: 13, question: "Which HTTP method does a route with `Route::resource()` use for update?", options: ["PUT/PATCH", "POST", "GET", "DELETE"], correctAnswer: 0 },
  { id: 14, question: "How do you define a route that accepts a parameter?", options: ["Route::get('/user/{id}', ...)", "Route::get('/user/:id', ...)", "Route::get('/user/(id)', ...)", "Route::get('/user/<id>', ...)"], correctAnswer: 0 },
  { id: 15, question: "What is middleware used for?", options: ["Filtering HTTP requests", "Database queries", "Rendering views", "Creating models"], correctAnswer: 0 },
  { id: 16, question: "Which command creates a controller?", options: ["php artisan make:controller", "php artisan controller:make", "php artisan create:controller", "php artisan new:controller"], correctAnswer: 0 },
  { id: 17, question: "What is a seeder?", options: ["Populate database with test data", "Create tables", "Run migrations", "Generate factories"], correctAnswer: 0 },
  { id: 18, question: "What does `php artisan tinker` do?", options: ["Interactive REPL", "Run tests", "Clear cache", "Optimize application"], correctAnswer: 0 },
  { id: 19, question: "Which facade is used for logging?", options: ["Log", "Logger", "Debug", "Logging"], correctAnswer: 0 },
  { id: 20, question: "What is the default session driver in Laravel?", options: ["file", "cookie", "database", "redis"], correctAnswer: 0 }
];

export default function LaravelQuiz() {
  return (
    <QuizComponent
      title="Laravel Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}