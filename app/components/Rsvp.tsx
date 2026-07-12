import { useState } from "react";
import { useInView } from "~/hooks/useInView";

interface RsvpFormData {
  name: string;
  email: string;
  attendance: "yes" | "no" | "";
  guests: number;
  message: string;
}

const initialFormData: RsvpFormData = {
  name: "",
  email: "",
  attendance: "",
  guests: 1,
  message: "",
};

export function Rsvp() {
  const [formData, setFormData] = useState<RsvpFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RsvpFormData, string>>>({});
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RsvpFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.attendance) {
      newErrors.attendance = "Please confirm your attendance";
    }
    if (formData.attendance === "yes" && formData.guests < 1) {
      newErrors.guests = "Please bring at least yourself";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    field: keyof RsvpFormData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <section
        id="rsvp"
        className="relative py-24 sm:py-32 bg-gradient-to-b from-amber-50/30 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <div className="rounded-2xl bg-white dark:bg-gray-800/50 p-8 sm:p-12 border border-taupe/10">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-choc dark:text-white mb-4">
              Thank You!
            </h2>
            <p className="text-taupe dark:text-gray-300 text-lg mb-6">
              We've received your RSVP, {formData.name.split(" ")[0]}. We can't
              wait to celebrate with you!
            </p>
            <p className="text-sm text-taupe dark:text-gray-400 mb-8">
              A confirmation has been sent to {formData.email}. If you need to
              make any changes, just get in touch.
            </p>
            <button
              onClick={handleReset}
              className="rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-amber-50/30 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-autumn-orange/5 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Will You Join Us?
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
            Please RSVP by October 1st, 2027 so we can finalise our arrangements.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white dark:bg-gray-800/50 p-6 sm:p-10 border border-taupe/10 card-hover">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="rsvp-name"
                className="block text-sm font-medium text-choc dark:text-gray-200 mb-1.5"
              >
                Your Name *
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="rsvp-input"
                placeholder="e.g. Jane Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="rsvp-email"
                className="block text-sm font-medium text-choc dark:text-gray-200 mb-1.5"
              >
                Email Address *
              </label>
              <input
                id="rsvp-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="rsvp-input"
                placeholder="e.g. jane@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Attendance */}
            <fieldset>
              <legend className="block text-sm font-medium text-choc dark:text-gray-200 mb-2">
                Will you be attending? *
              </legend>
              <div className="flex gap-4">
                {(["yes", "no"] as const).map((option) => (
                  <label
                    key={option}
                    className={`flex-1 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-medium transition-all ${
                      formData.attendance === option
                        ? "border-autumn-orange bg-autumn-orange/10 text-autumn-orange"
                        : "border-taupe/20 text-taupe hover:border-taupe/40 dark:text-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option}
                      checked={formData.attendance === option}
                      onChange={(e) =>
                        handleChange("attendance", e.target.value)
                      }
                      className="sr-only"
                    />
                    {option === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                  </label>
                ))}
              </div>
              {errors.attendance && (
                <p className="mt-1 text-sm text-red-500">{errors.attendance}</p>
              )}
            </fieldset>

            {/* Guests (conditional) */}
            {formData.attendance === "yes" && (
              <div>
                <label
                  htmlFor="rsvp-guests"
                  className="block text-sm font-medium text-choc dark:text-gray-200 mb-1.5"
                >
                  Number of Guests
                </label>
                <select
                  id="rsvp-guests"
                  value={formData.guests}
                  onChange={(e) =>
                    handleChange("guests", Number(e.target.value))
                  }
                  className="rsvp-input"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label
                htmlFor="rsvp-message"
                className="block text-sm font-medium text-choc dark:text-gray-200 mb-1.5"
              >
                A Message for the Couple{" "}
                <span className="text-taupe dark:text-gray-400 font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="rsvp-message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={3}
                className="rsvp-input resize-none"
                placeholder="We can't wait to celebrate with you..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-autumn-orange px-8 py-3.5 text-white font-semibold text-lg transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
            >
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}