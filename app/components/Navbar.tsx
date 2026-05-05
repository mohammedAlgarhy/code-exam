"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<(HTMLElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const openMenu = () => {
    if (isMobileMenuOpen) return;
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: "block", opacity: 0 });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
    }
    if (sidebarRef.current) {
      gsap.set(sidebarRef.current, { x: "100%" });
      gsap.to(sidebarRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "back.out(0.8)",
        onComplete: () => {
          const items = mobileLinksRef.current.filter(Boolean);
          if (items.length) {
            gsap.fromTo(items,
              { x: 30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
            );
          }
        }
      });
    }
  };

  const closeMenu = () => {
    if (!isMobileMenuOpen) return;
    const items = mobileLinksRef.current.filter(Boolean);
    if (items.length) {
      gsap.to(items, {
        x: 30,
        opacity: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.in",
        onComplete: () => {
          if (sidebarRef.current) {
            gsap.to(sidebarRef.current, {
              x: "100%",
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                if (overlayRef.current) gsap.set(overlayRef.current, { display: "none", opacity: 0 });
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "";
              }
            });
          } else {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = "";
          }
        }
      });
    } else {
      if (sidebarRef.current) {
        gsap.to(sidebarRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (overlayRef.current) gsap.set(overlayRef.current, { display: "none", opacity: 0 });
            setIsMobileMenuOpen(false);
            document.body.style.overflow = "";
          }
        });
      } else {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    }
  };

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current[index] = el;
    }
  };

  const addMobileRef = (el: HTMLAnchorElement | null, idx: number) => {
    if (el && !mobileLinksRef.current.includes(el)) {
      mobileLinksRef.current[idx] = el;
    }
  };

  useEffect(() => {
    if (navRef.current) {
      const validItems = menuItemsRef.current.filter(Boolean);
      if (validItems.length) {
        gsap.fromTo(validItems,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power2.out", delay: 0.2 }
        );
      }
    }
  }, []);

  const specialties = {
    "Programming": [
      { name: "JavaScript", href: "/tests/programming/javascript", level: "Beginner" },
      { name: "Python", href: "/tests/programming/python", level: "Beginner" },
      { name: "Java", href: "/tests/programming/java", level: "Intermediate" },
      { name: "TypeScript", href: "/tests/programming/typescript", level: "Intermediate" },
      { name: "C++", href: "/tests/programming/cpp", level: "Advanced" },
      { name: "C#", href: "/tests/programming/csharp", level: "Intermediate" },
      { name: "Go", href: "/tests/programming/go", level: "Intermediate" },
    ],
    "Web Development": [
      { name: "React.js", href: "/tests/web-development/react", level: "Intermediate" },
      { name: "Next.js", href: "/tests/web-development/nextjs", level: "Advanced" },
      { name: "Vue.js", href: "/tests/web-development/vue", level: "Intermediate" },
      { name: "Angular", href: "/tests/web-development/angular", level: "Advanced" },
      { name: "HTML5", href: "/tests/web-development/html", level: "Beginner" },
      { name: "CSS3", href: "/tests/web-development/css", level: "Beginner" },
      { name: "Tailwind CSS", href: "/tests/web-development/tailwind", level: "Beginner" },
      { name: "Bootstrap", href: "/tests/web-development/bootstrap", level: "Beginner" },
    ],
    "Mobile": [
      { name: "React Native", href: "/tests/mobile/react-native", level: "Intermediate" },
      { name: "Flutter", href: "/tests/mobile/flutter", level: "Intermediate" },
      { name: "SwiftUI", href: "/tests/mobile/swiftui", level: "Advanced" },
      { name: "Kotlin Multiplatform", href: "/tests/mobile/kotlin-multiplatform", level: "Advanced" },
    ],
    "Backend": [
      { name: "Node.js", href: "/tests/backend/nodejs", level: "Intermediate" },
      { name: "Express.js", href: "/tests/backend/express", level: "Intermediate" },
      { name: "Django", href: "/tests/backend/django", level: "Advanced" },
      { name: "Laravel", href: "/tests/backend/laravel", level: "Intermediate" },
      { name: "Spring Boot", href: "/tests/backend/spring", level: "Advanced" },
      { name: "SQL", href: "/tests/backend/sql", level: "Beginner" },
      { name: "MongoDB", href: "/tests/backend/mongodb", level: "Intermediate" },
      { name: "Docker", href: "/tests/backend/docker", level: "Advanced" },
    ],
  };

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/10" : "bg-black/40 backdrop-blur-md border-b border-white/5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Code<span className="text-white">Exam</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {Object.entries(specialties).map(([specialty, languages], idx) => (
                <div key={specialty} className="relative group" ref={(el) => addToRefs(el, idx)}>
                  <button className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10">
                    {specialty} ▼
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {languages.map((lang) => (
                        <Link key={lang.href} href={lang.href} className="flex justify-between items-center px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                          <span>{lang.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60">{lang.level}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button onClick={openMenu} className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />

      <div ref={overlayRef} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden" onClick={closeMenu} />
      <div ref={sidebarRef} className="fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl shadow-2xl z-50 flex flex-col transform translate-x-full">
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-6">
          <div className="space-y-6">
            {Object.entries(specialties).map(([specialty, languages]) => (
              <div key={specialty}>
                <div className="text-sm font-semibold text-white/60 mb-2">{specialty}</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang, idx) => (
                    <Link key={lang.href} href={lang.href} ref={(el) => addMobileRef(el, idx)} className="block py-2 px-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors" onClick={closeMenu}>
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
