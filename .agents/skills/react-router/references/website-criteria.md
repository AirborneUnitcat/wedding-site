# Wedding Website – AI Agent Requirements

## Overview

This is a **React** single-page application (SPA) using **React Router** for navigation. The website is for our wedding. It is already partially built – you will add features one at a time. Use **Tailwind CSS** for all styling, with our custom color palette configured in the Tailwind config.

**Color Palette** (add to `tailwind.config.js`):
- `#4D1E16` – Chocolate Brown (primary)
- `#9A3E1D` – Burnt Terracotta
- `#D45323` – Autumn Orange (accent)
- `#7A6658` – Warm Taupe (secondary)
- `#5A5B4D` – Muted Olive Sage (primary)

**Key Features** (to be added incrementally):
- Gift / Honeymoon Money Pot link (placeholder URL)
- Venue link (placeholder URL)
- Downloadable PDF of the food menu
- Contact details (only our first names, no email/phone)
- Wedding date with a live countdown timer
- Color scheme applied throughout

**Constraints**: No images, no forms, no external APIs. Use React Router for any page routing (if needed). The site is already partially built – you will add these features one at a time.

---

## Task List (complete one at a time)

### Task 1: Configure Tailwind with custom colors
- [x] Add the five brand colors to `tailwind.config.js` (or equivalent).
- [x] Verify that utility classes like `bg-choc`, `text-autumn-orange` work.

### Task 2: Add the wedding date and countdown
- [x] Create a component that displays the wedding date prominently.
- [x] Implement a live countdown timer (days, hours, minutes, seconds) using JavaScript.
- [x] Style with Tailwind.

### Task 3: Add Gift / Honeymoon Fund link
- [ ] Create a section with a heading and a link (placeholder URL) styled as a button.

### Task 4: Add Venue link
- [ ] Create a section with a heading and a link (placeholder URL) styled as a button.

### Task 5: Add downloadable food menu PDF
- [ ] Provide a download link for a PDF file (placeholder `menu.pdf`). Style as a button.

### Task 6: Add contact details (names only)
- [ ] Display our first names (e.g., "Emily & James") without any other contact information.

### Task 7: Final review and responsiveness
- [ ] Ensure all components are responsive (mobile-first).
- [ ] Verify that the color scheme is used consistently.
- [ ] Check that all links are placeholders (no real URLs).

---

**Important**: Work through these tasks one at a time. Do not move to the next until the current task is complete. The site already has React Router set up – you may add new routes if needed, but keep it simple.
