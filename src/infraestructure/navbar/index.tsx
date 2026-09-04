import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeToggleButton } from "./component/themeTogleButton";

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:z-50 lg:w-[calc(100%-2rem)] lg:max-w-5xl lg:bg-white/80 lg:dark:bg-[#1a1a2e]/80 lg:backdrop-blur-md lg:rounded-2xl lg:shadow-lg lg:px-6 lg:py-3 lg:flex lg:items-center lg:justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-xl font-bold w-200  tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          DLR
        </a>

        {/* Center links */}
        <ul className="flex items-center gap-6 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center w-20  gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 text-xs font-semibold rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
          <ThemeToggleButton />
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-md shadow-lg px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          LDLR
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-700 dark:text-gray-300"
          aria-label={t('nav.toggleMenu')}
        >
          {mobileOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-[#1a1a2e] shadow-xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-gray-700 dark:text-gray-300"
            aria-label={t('nav.closeMenu')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 pt-2 pb-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              {t(link.key)}
            </a>
          ))}

          <hr className="border-gray-200 dark:border-gray-700" />

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
            <ThemeToggleButton />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/luciano-dlr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luciano-de-la-rubia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
