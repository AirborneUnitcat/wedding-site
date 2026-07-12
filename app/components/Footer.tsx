export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-choc dark:bg-gray-950 border-t border-white/10">
      {/* Top section */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-white/60 text-sm">
              <p className="text-white/80 font-medium">Amy &amp; Morgan</p>
              <p>
                For any questions about the big day,
                <br />
                please don&apos;t hesitate to reach out.
              </p>
              <a
                href="mailto:"
                className="inline-flex items-center gap-2 text-autumn-orange hover:text-orange-300 transition-colors mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                Send us an email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#story", label: "Our Story" },
                { href: "#big-day", label: "The Big Day" },
                { href: "#rsvp", label: "RSVP" },
                { href: "#gallery", label: "Gallery" },
                { href: "#guestbook", label: "Guestbook" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-autumn-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative */}
          <div className="text-center sm:text-left">
            <div className="font-serif text-3xl text-white/90 mb-2">
              A &amp; M
            </div>
            <p className="text-white/40 text-xs">
              December 5th, 2027
              <br />
              West Tower, Ormskirk
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {currentYear} Amy &amp; Morgan. Made with love.</p>
          <p>
            Built with{" "}
            <span className="text-red-300/60">♥</span> by friends and family
          </p>
        </div>
      </div>
    </footer>
  );
}