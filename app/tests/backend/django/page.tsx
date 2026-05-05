"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is the command used to create a new Django project?", options: ["django startproject", "django-admin startproject", "django initproject", "startproject django"], correctAnswer: 1 },
  { id: 2, question: "Which file contains the settings for a Django project?", options: ["urls.py", "models.py", "settings.py", "views.py"], correctAnswer: 2 },
  { id: 3, question: "Which of the following is used to create an app inside a Django project?", options: ["python manage.py startapp", "django-admin startapp", "python manage.py createapp", "django startapp"], correctAnswer: 0 },
  { id: 4, question: "What is the role of the `urls.py` file in Django?", options: ["Define databases", "Define URLs and routing", "Define models", "Define settings"], correctAnswer: 1 },
  { id: 5, question: "Which function is used to retrieve all objects from the database?", options: ["objects.get()", "objects.all()", "objects.filter()", "objects.select()"], correctAnswer: 1 },
  { id: 6, question: "How do you run the local development server in Django?", options: ["python runserver", "python manage.py runserver", "django runserver", "manage.py run"], correctAnswer: 1 },
  { id: 7, question: "What is the correct file extension for Django templates?", options: [".django", ".dtl", ".html", ".template"], correctAnswer: 2 },
  { id: 8, question: "Which command is used to apply model changes to the database?", options: ["python manage.py migrate", "python manage.py makemigrations", "python manage.py sqlmigrate", "python manage.py showmigrations"], correctAnswer: 0 },
  { id: 9, question: "What is the default database management system in Django?", options: ["PostgreSQL", "MySQL", "SQLite", "Oracle"], correctAnswer: 2 },
  { id: 10, question: "What is the default session name in Django?", options: ["sessionid", "django_session", "session_key", "user_session"], correctAnswer: 0 },
  { id: 11, question: "How do you add a long text field in a Django model?", options: ["CharField", "TextField", "LongTextField", "StringField"], correctAnswer: 1 },
  { id: 12, question: "What command is used to create a superuser?", options: ["python manage.py createsuperuser", "python manage.py createadmin", "django-admin createsuperuser", "python manage.py superuser"], correctAnswer: 0 },
  { id: 13, question: "What is the purpose of the `__str__` method in a Django model?", options: ["Represent the object as a string", "Define primary key", "Link models", "Execute queries"], correctAnswer: 0 },
  { id: 14, question: "Which decorator is used to check login in Django views?", options: ["@login_required", "@authenticated", "@user_passes_test", "@permission_required"], correctAnswer: 0 },
  { id: 15, question: "Which framework is used to display short messages to the user (e.g., success or error)?", options: ["messages framework", "session framework", "flash messages", "alerts"], correctAnswer: 0 },
  { id: 16, question: "What is the purpose of `ForeignKey` in Django?", options: ["One-to-one relationship", "One-to-many relationship", "Many-to-many relationship", "Primary key"], correctAnswer: 1 },
  { id: 17, question: "Which function allows filtering results in database queries?", options: ["filter()", "exclude()", "get()", "all()"], correctAnswer: 0 },
  { id: 18, question: "What is the `admin.py` file used for?", options: ["Register models in the admin interface", "Configure settings", "Define URLs", "Manage databases"], correctAnswer: 0 },
  { id: 19, question: "What is the correct syntax to output a variable in a Django template?", options: ["{{ variable }}", "{% variable %}", "{ variable }", "{{{ variable }}}"], correctAnswer: 0 },
  { id: 20, question: "Which of the following is Django's built-in ORM?", options: ["SQLAlchemy", "Django ORM", "Peewee", "Storm"], correctAnswer: 1 }
];

export default function DjangoTest() {
  return (
    <QuizComponent
      title="Django Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}