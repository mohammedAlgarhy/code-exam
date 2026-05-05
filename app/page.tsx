// app/tests/page.tsx
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

// استيراد الأيقونات من lucide-react (أيقونات حديثة)
import {
  Code,
  Braces,
  Coffee,
  FileJson,
  Cpu,
  Hash,
  Terminal,
  Globe,
  Rocket,
  Eye,
  Anchor,
  FileCode,
  Palette,
  Wind,
  Box,
  Smartphone,
  Droplet,
  Apple,
  Target,
  Database,
  Server,
  Music,
  Feather,
  Leaf,
  Container,
  Zap,
  Ship,
  Key,
} from "lucide-react";

// خريطة ربط معرف الاختبار بالأيقونة المناسبة
const iconMap: Record<string, JSX.Element> = {
  javascript: <Code className="text-yellow-400" size={24} />,
  python: <Braces className="text-blue-400" size={24} />,
  java: <Coffee className="text-red-500" size={24} />,
  typescript: <FileJson className="text-blue-600" size={24} />,
  cpp: <Cpu className="text-blue-500" size={24} />,
  csharp: <Hash className="text-purple-500" size={24} />,
  go: <Terminal className="text-cyan-400" size={24} />,
  react: <Code className="text-cyan-400" size={24} />,
  nextjs: <Rocket className="text-white" size={24} />,
  vue: <Eye className="text-green-500" size={24} />,
  angular: <Anchor className="text-red-500" size={24} />,
  html: <FileCode className="text-orange-500" size={24} />,
  css: <Palette className="text-blue-400" size={24} />,
  tailwind: <Wind className="text-sky-400" size={24} />,
  bootstrap: <Box className="text-purple-500" size={24} />,
  "react-native": <Smartphone className="text-blue-500" size={24} />,
  flutter: <Droplet className="text-sky-400" size={24} />,
  swiftui: <Apple className="text-orange-500" size={24} />,
  "kotlin-multiplatform": <Target className="text-purple-500" size={24} />,
  nodejs: <Server className="text-green-600" size={24} />,
  express: <Zap className="text-white" size={24} />,
  django: <Music className="text-green-700" size={24} />,
  laravel: <Feather className="text-red-500" size={24} />,
  spring: <Leaf className="text-green-600" size={24} />,
  sql: <Database className="text-blue-400" size={24} />,
  mongodb: <Leaf className="text-green-500" size={24} />,
  docker: <Container className="text-blue-400" size={24} />,
};

// تعريف التخصصات مع إضافة خاصية `id` لكل اختبار (لربط الأيقونة)
const specialties = [
  {
    name: "Programming",
    icon: <Code className="w-8 h-8 text-white" />,
    color: "from-blue-500 to-cyan-500",
    tests: [
      { id: "javascript", name: "JavaScript", path: "/tests/programming/javascript", level: "Beginner" },
      { id: "python", name: "Python", path: "/tests/programming/python", level: "Beginner" },
      { id: "java", name: "Java", path: "/tests/programming/java", level: "Intermediate" },
      { id: "typescript", name: "TypeScript", path: "/tests/programming/typescript", level: "Intermediate" },
      { id: "cpp", name: "C++", path: "/tests/programming/cpp", level: "Advanced" },
      { id: "csharp", name: "C#", path: "/tests/programming/csharp", level: "Intermediate" },
      { id: "go", name: "Go", path: "/tests/programming/go", level: "Intermediate" },
    ],
  },
  {
    name: "Web Development",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-purple-500 to-pink-500",
    tests: [
      { id: "react", name: "React.js", path: "/tests/web-development/react", level: "Intermediate" },
      { id: "nextjs", name: "Next.js", path: "/tests/web-development/nextjs", level: "Advanced" },
      { id: "vue", name: "Vue.js", path: "/tests/web-development/vue", level: "Intermediate" },
      { id: "angular", name: "Angular", path: "/tests/web-development/angular", level: "Advanced" },
      { id: "html", name: "HTML5", path: "/tests/web-development/html", level: "Beginner" },
      { id: "css", name: "CSS3", path: "/tests/web-development/css", level: "Beginner" },
      { id: "tailwind", name: "Tailwind CSS", path: "/tests/web-development/tailwind", level: "Beginner" },
      { id: "bootstrap", name: "Bootstrap", path: "/tests/web-development/bootstrap", level: "Beginner" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: "from-green-500 to-emerald-500",
    tests: [
      { id: "react-native", name: "React Native", path: "/tests/mobile/react-native", level: "Intermediate" },
      { id: "flutter", name: "Flutter", path: "/tests/mobile/flutter", level: "Intermediate" },
      { id: "swiftui", name: "SwiftUI", path: "/tests/mobile/swiftui", level: "Advanced" },
      { id: "kotlin-multiplatform", name: "Kotlin Multiplatform", path: "/tests/mobile/kotlin-multiplatform", level: "Advanced" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-8 h-8 text-white" />,
    color: "from-orange-500 to-red-500",
    tests: [
      { id: "nodejs", name: "Node.js", path: "/tests/backend/nodejs", level: "Intermediate" },
      { id: "express", name: "Express.js", path: "/tests/backend/express", level: "Intermediate" },
      { id: "django", name: "Django", path: "/tests/backend/django", level: "Advanced" },
      { id: "laravel", name: "Laravel", path: "/tests/backend/laravel", level: "Intermediate" },
      { id: "spring", name: "Spring Boot", path: "/tests/backend/spring", level: "Advanced" },
      { id: "sql", name: "SQL", path: "/tests/backend/sql", level: "Beginner" },
      { id: "mongodb", name: "MongoDB", path: "/tests/backend/mongodb", level: "Intermediate" },
      { id: "docker", name: "Docker", path: "/tests/backend/docker", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "text-green-400 bg-green-900/30";
    case "Intermediate":
      return "text-yellow-400 bg-yellow-900/30";
    case "Advanced":
      return "text-orange-400 bg-orange-900/30";
    default:
      return "text-gray-400 bg-gray-800/30";
  }
};

export default function TestsPage() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // أنيميشن ظهور البطاقات بشكل تدريجي مع تأثير مرن
    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1)",
      }
    );
  }, []);

  return (
    <><div className="min-h-screen bg-black text-white p-4 pt-20">
        <div className="max-w-7xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            Programming Tests
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Choose your specialty and test your knowledge
          </p>

          {specialties.map((specialty, specialtyIdx) => (
            <div key={specialty.name} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${specialty.color} rounded-xl flex items-center justify-center text-xl`}
                >
                  {specialty.icon}
                </div>
                <h2 className="text-2xl font-bold">{specialty.name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {specialty.tests.map((test, idx) => {
                  const globalIndex = cardsRef.current.length;
                  return (
                    <Link
                      key={test.path}
                      href={test.path}
                      ref={(el) => {
                        if (el) cardsRef.current[globalIndex] = el;
                      }}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-105"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {iconMap[test.id] || <Code className="text-gray-400" size={24} />}
                        </div>
                        <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">
                          20 Qs
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{test.name}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${getLevelColor(
                          test.level
                        )}`}
                      >
                        {test.level}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
