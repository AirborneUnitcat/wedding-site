import { useState } from "react";
import { useInView } from "~/hooks/useInView";

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: "Amy & Morgan",
      message:
        "Welcome to our guestbook! Leave us a message — we'd love to hear from you 💕",
      timestamp: new Date("2027-06-01"),
    },
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section
      id="guestbook"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Guestbook
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Leave a message for the happy couple — we&apos;d love to read your
            kind words!
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-50/50 to-white dark:from-gray-800/30 dark:to-gray-800/50 p-6 sm:p-8 border border-taupe/10 mb-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="rsvp-input"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={3}
              className="rsvp-input resize-none"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-autumn-orange px-6 py-2.5 text-white font-semibold transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
            >
              {submitted ? "Message Sent! ✓" : "Leave a Message"}
            </button>
          </form>
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl bg-white dark:bg-gray-800/30 p-5 border border-taupe/10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-choc dark:text-white">
                  {entry.name}
                </span>
                <span className="text-xs text-taupe dark:text-gray-400">
                  {formatDate(entry.timestamp)}
                </span>
              </div>
              <p className="text-taupe dark:text-gray-300 leading-relaxed">
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}