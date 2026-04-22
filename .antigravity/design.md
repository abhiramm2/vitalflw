# VitalFlw Design System & Component Guidelines

## 1. Brand Identity
* **Vibe:** Modern, clinical, lightweight, and incredibly fast. It should feel like a premium SaaS, not a legacy enterprise hospital tool.
* **Primary Color:** Deep Indigo (`#3730A3`) - Used for primary buttons, active states, and brand trust elements.
* **Secondary/Success:** Teal (`#06B6D4`) - Used for positive actions (e.g., "Appointment Booked", "Bill Paid").
* **Background/Neutral:** Slate Grey (`#F8FAFC`) - Used for application backgrounds to reduce eye strain for doctors looking at screens all day.
* **Typography:** Strictly use `Inter` (Sans-serif) from Google Fonts for high readability of medical data. No other fonts like Geist should be used.

## 2. Component Library
* **Strict Requirement:** Use `shadcn/ui` and `Tailwind CSS` for all components. 
* Do not write custom CSS classes unless absolutely necessary. Rely on Tailwind utility classes.
* Icons should be sourced exclusively from `lucide-react`.

## 3. UI/UX Principles
* **Mobile-First:** The receptionist and doctor dashboards must be fully responsive, as many clinics use iPads or tablets.
* **Information Density:** Medical professionals need to see a lot of data at once. Avoid excessive whitespace in data tables; keep typography compact but readable.
* **Feedback:** Every action (saving a prescription, updating a patient) must trigger a `toast` notification to confirm success.

## 4. Visual Language Restrictions
* **No Emojis:** Strictly avoid the use of emojis in the UI (buttons, headings, badges, or alerts). 
* **Iconography:** Use exclusively `lucide-react` for visual cues. Icons should be thin-stroke (stroke-width: 1.5px or 2px) to maintain a professional, clinical aesthetic.
* **Tone:** The interface should feel like a high-end financial or medical tool (e.g., Stripe, Linear). Avoid "playful" elements that could undermine the user's perception of security and precision.
* **Waitlist / Lead Capture:** We have explicitly removed the waitlist form and email capture field from the landing experience. Do not add lead generation forms unless strictly requested.
