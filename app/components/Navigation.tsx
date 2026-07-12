import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#big-day", label: "The Big Day" },
  { href: "#menu", label: "Menu" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#gallery", label: "Gallery" },
  { href: "#gifts", label: "Gifts" },
] as const;

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-taupe/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="font-serif text-xl font-semibold text-choc dark:text-white tracking-tight"
        >
          Amy &amp; Morgan
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-taupe hover:text-choc dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger + theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-taupe hover:text-choc dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            type="button"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-taupe/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md">
          <div className="flex flex-col px-4 py-3 gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-taupe hover:text-choc dark:hover:text-white transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}