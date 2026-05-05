"use client";
import { useState, useEffect, useCallback } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizComponentProps {
  title: string;
  description: string;
  questions: Question[];
}

export default function QuizComponent({ title, description, questions }: QuizComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const handleAnswer = useCallback((optionIdx: number) => {
    if (selected !== null) return;
    setSelected(optionIdx);
    const isCorrect = optionIdx === questions[currentIndex].correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelected(null);
        setTimeLeft(60);
      } else {
        setFinished(true);
      }
    }, 800);
  }, [currentIndex, questions, selected]);

  // Timer effect
  useEffect(() => {
    if (!started || finished || selected !== null) return;
    if (timeLeft <= 0) {
      handleAnswer(-1); // time's up, treat as wrong
      return;
    }
    const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, started, finished, selected, handleAnswer]);

  // Reset timer when question changes
  useEffect(() => {
    if (started && !finished) {
      setTimeLeft(60);
      setSelected(null);
    }
  }, [currentIndex, started, finished]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-white/70 mb-6">{description}</p>
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-white/20 rounded-full px-4 py-1 text-sm text-white">{questions.length} أسئلة</div>
                <div className="bg-white/20 rounded-full px-4 py-1 text-sm text-white">60 ث/سؤال</div>
                <div className="bg-white/20 rounded-full px-4 py-1 text-sm text-white">70% نجاح</div>
              </div>
              <button
                onClick={() => setStarted(true)}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
              >
                ابدأ الاختبار الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="relative max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center">
            <div className="text-7xl mb-4">{passed ? "🏆" : "📖"}</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {passed ? "تهانينا! لقد نجحت" : "لقد أكملت الاختبار"}
            </h2>
            <p className="text-white/70 mb-4">النتيجة النهائية</p>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">{score}/{questions.length}</div>
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="white" strokeWidth="8" fill="none" strokeOpacity="0.2" />
                <circle
                  cx="64" cy="64" r="56"
                  stroke="url(#grad)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 56}
                  strokeDashoffset={2 * Math.PI * 56 * (1 - percentage / 100)}
                  className="transition-all duration-1000"
                />
              </svg>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </div>
            <p className="text-white/70">نسبة النجاح: {percentage}%</p>
            <div className="mt-8 flex gap-3 justify-center">
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition">إعادة الاختبار</button>
              <button onClick={() => window.location.href = "/tests"} className="px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition">اختبارات أخرى</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const current = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const timeProgress = (timeLeft / 60) * 100;
  const isLowTime = timeLeft <= 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white p-4 pt-20">
      <div className="max-w-3xl mx-auto">
        {/* رأس مع المؤشرات */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            السؤال {currentIndex + 1} / {questions.length}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            النقاط: {score}
          </div>
          <div className={`font-mono text-xl font-bold ${isLowTime ? "text-red-400 animate-pulse" : "text-white"}`}>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* شريط التقدم المزدوج */}
        <div className="space-y-2 mb-8">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-300 ${isLowTime ? "bg-red-500" : "bg-gradient-to-r from-pink-500 to-orange-500"}`} style={{ width: `${timeProgress}%` }}></div>
          </div>
        </div>

        {/* سؤال */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 leading-relaxed">{current.question}</h2>
          <div className="space-y-4">
            {current.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === current.correctAnswer;
              let buttonClass = "w-full text-left p-4 rounded-2xl border transition-all duration-200 bg-white/5 border-white/20 hover:bg-white/20";
              if (selected !== null) {
                if (isSelected && isCorrect) buttonClass = "bg-green-500/30 border-green-500 ring-2 ring-green-500";
                else if (isSelected && !isCorrect) buttonClass = "bg-red-500/30 border-red-500 ring-2 ring-red-500";
                else if (!isSelected && isCorrect) buttonClass = "bg-green-500/20 border-green-500/50";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`${buttonClass} disabled:cursor-not-allowed flex items-center gap-4`}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {selected !== null && idx === current.correctAnswer && (
                    <span className="text-green-400 text-xl">✓</span>
                  )}
                  {selected !== null && isSelected && !isCorrect && (
                    <span className="text-red-400 text-xl">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* تحذير وقت منخفض */}
        {!selected && isLowTime && (
          <div className="mt-4 text-center text-red-400 animate-pulse text-sm">
            ⚠️ الوقت ينفد! أجب بسرعة
          </div>
        )}
      </div>
    </div>
  );
}