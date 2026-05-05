<div align="center">
  <h1>📘 CodeExam</h1>
  <p><strong>منصة اختبارات البرمجة التفاعلية</strong></p>
  <p>اختبر مهاراتك البرمجية في بيئة عصرية وسلسة</p>
  
  <!-- يمكن إضافة شارات (badges) هنا -->
  <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-blue" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</div>

---

## 📖 عن المشروع

**CodeExam** هو تطبيق ويب تفاعلي يهدف إلى تقديم اختبارات برمجية في مجالات متعددة (ويب، باك إند، موبايل، برمجة عامة). تم تصميمه ليكون سهل الاستخدام، سريع الأداء، وجذاب بصرياً مع حركات سلسة.

---

## ✨ الميزات الرئيسية

- ✅ اختبارات مصنفة حسب المجال (Frontend, Backend, Mobile, Programming basics)
- ✅ واجهة مستخدم حديثة باستخدام **Tailwind CSS** و **GSAP** للحركات
- ✅ تجربة تطبيق سريعة بفضل **Next.js App Router**
- ✅ كتابة آمنة باستخدام **TypeScript**
- ✅ تصميم متجاوب مع جميع الأجهزة

---

## 🛠️ التقنيات المستخدمة

| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| Next.js | 14 | إطار العمل الأساسي |
| React | 18 | مكتبة الواجهات |
| TypeScript | 5 | الأمان والاستقرار |
| Tailwind CSS | 3.4 | التصميم والتنسيق |
| GSAP | 3.12 | الحركات والتأثيرات |

---

## 📁 هيكل المشروع (شرح مبسط)

```bash
my-app/
├── app/                # مسارات الصفحات (App Router)
│   ├── layout.tsx      # التخطيط العام
│   └── page.tsx        # الصفحة الرئيسية
├── components/         # مكونات قابلة لإعادة الاستخدام
├── lib/                # دوال وخدمات مساعدة
├── hooks/              # React Hooks مخصصة
├── context/            # سياقات React (مثل الثيم، اللغة)
├── types/              # تعريفات TypeScript
├── data/               # بيانات وهمية (JSON/TS)
├── public/             # ملفات ثابتة (صور، خطوط)
└── styles/             # أنماط CSS إضافية (إن وجدت)
