'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

interface Test {
  id: string;
  title: string;
  questions: Question[];
}

interface TestContextType {
  currentTest: Test | null;
  answers: Record<string, string>;
  setCurrentTest: (test: Test) => void;
  saveAnswer: (questionId: string, answer: string) => void;
  submitTest: () => Promise<{ score: number; total: number }>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [currentTest, setCurrentTest] = useState<Test | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const saveAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitTest = async () => {
    if (!currentTest) throw new Error('No active test');
    let score = 0;
    for (const q of currentTest.questions) {
      if (answers[q.id] === q.correctAnswer) score++;
    }
    await fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        testId: currentTest.id,
        testTitle: currentTest.title,
        score,
        total: currentTest.questions.length,
        answers
      })
    });
    return { score, total: currentTest.questions.length };
  };

  return (
    <TestContext.Provider value={{ currentTest, answers, setCurrentTest, saveAnswer, submitTest }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTests = () => {
  const context = useContext(TestContext);
  if (!context) throw new Error('useTests must be used within a TestProvider');
  return context;
};
