"use client";
import QuizComponent from "@/components/QuizComponent";

const questions = [
  { id: 1, question: "What is Next.js?", options: ["React framework", "Vue framework", "Angular framework", "Svelte framework"], correctAnswer: 0 },
  { id: 2, question: "Which command creates a new Next.js app?", options: ["npx create-next-app", "next init", "npm init next", "create-next-app"], correctAnswer: 0 },
  { id: 3, question: "What is the folder for pages in Next.js 13+?", options: ["app/", "pages/", "src/", "components/"], correctAnswer: 0 },
  { id: 4, question: "How do you create an API route?", options: ["app/api/route.js", "pages/api/route.js", "api/route.js", "Both A and B (depending on version)"], correctAnswer: 3 },
  { id: 5, question: "What is server-side rendering (SSR)?", options: ["Rendering pages on server at request time", "Building static HTML at build time", "Client-side rendering", "Pre-rendering to static files"], correctAnswer: 0 },
  { id: 6, question: "What is static site generation (SSG)?", options: ["Rendering at build time", "Rendering at request time", "Client-side only", "Incremental static regeneration"], correctAnswer: 0 },
  { id: 7, question: "Which function is used for SSG in Next.js 12?", options: ["getStaticProps", "getServerSideProps", "getInitialProps", "getStaticPaths"], correctAnswer: 0 },
  { id: 8, question: "Which function is used for SSR?", options: ["getServerSideProps", "getStaticProps", "getInitialProps", "getServerProps"], correctAnswer: 0 },
  { id: 9, question: "What is the purpose of `next/link`?", options: ["Client-side navigation", "Routing API", "Fetching data", "Styling links"], correctAnswer: 0 },
  { id: 10, question: "How do you add a global CSS file?", options: ["Import in layout.js or _app.js", "Import in any component", "Add to public folder", "Use style tag"], correctAnswer: 0 },
  { id: 11, question: "What is the advantage of Image component?", options: ["Optimized images with lazy loading", "Better styling", "Faster API calls", "Built-in CDN"], correctAnswer: 0 },
  { id: 12, question: "What does `next/font` do?", options: ["Automatic font optimization", "Loads custom fonts", "Google fonts integration", "All of the above"], correctAnswer: 3 },
  { id: 13, question: "What is middleware in Next.js?", options: ["Code executed before request completes", "Database connector", "State manager", "Testing utility"], correctAnswer: 0 },
  { id: 14, question: "How do you create a dynamic route?", options: ["[param]/page.js", "_param/page.js", "$param/page.js", "param/page.js"], correctAnswer: 0 },
  { id: 15, question: "What is the purpose of `layout.js`?", options: ["Shared UI across routes", "Page layout CSS", "API middleware", "Database config"], correctAnswer: 0 },
  { id: 16, question: "What is incremental static regeneration (ISR)?", options: ["Update static pages after build", "Full rebuild", "Client-side cache", "Server-side only"], correctAnswer: 0 },
  { id: 17, question: "Which command builds for production?", options: ["npm run build", "next build", "npm build", "next export"], correctAnswer: 0 },
  { id: 18, question: "What does `next export` do?", options: ["Generates static HTML", "Starts server", "Builds and serves", "Runs tests"], correctAnswer: 0 },
  { id: 19, question: "How do you redirect in Next.js?", options: ["Using redirects in next.config.js", "using Router.push", "using <Redirect />", "All of the above"], correctAnswer: 3 },
  { id: 20, question: "What is the App Router?", options: ["New routing system in Next.js 13+", "Old pages router", "API router", "Custom router"], correctAnswer: 0 }
];

export default function NextjsQuiz() {
  return (
    <QuizComponent
      title="Next.js Quiz"
      description="20 questions – 60 seconds each"
      questions={questions}
    />
  );
}