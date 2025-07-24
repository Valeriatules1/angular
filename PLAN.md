# 📌 Worklog Summary Card – Planning Document

## 🧱 Task Breakdown

### 1. Project Setup (10–15 min)
- Create a new Angular 16+ project (standalone component supported)
- Add Tailwind CSS via PostCSS integration
- Verify Tailwind works with Angular dev server

### 2. Component Structure (20–30 min)
- Create `<worklog-summary-card>` as a standalone Angular component
- Define `@Input() worklog: WorkLogSummary`
- Use semantic HTML structure (article, header, section, footer)

### 3. Display Data (20–30 min)
- Show user name, avatar (or placeholder), role badge
- Show project name, week string, total hours
- Conditionally show "View Details" button if `canViewDetails` is true

### 4. Role-based Styling (20–30 min)
- Add visual distinction per role (`admin`, `manager`, `employee`)
- Use Tailwind classes or `ngClass` for conditional styles
- Color-coding or border/highlight for roles

### 5. Responsive Layout (30–45 min)
- Mobile-first layout, use Tailwind responsive utilities (`sm:`, `md:`)
- Stack layout on mobile, horizontal on desktop
- Ensure readable font sizes and spacing

### 6. Avatar Handling (15 min)
- Show image if `avatarUrl` exists
- Fallback to default SVG/emoji/initials if missing

### 7. View Details Button (15 min)
- Conditional display with `*ngIf`
- Add hover/focus transition states via Tailwind
- Use `button` element for accessibility

### 8. Dark Mode Support (Bonus - 15–20 min)
- Use `dark:` variants for text, bg, border colors
- Ensure readability and contrast

### 9. Apply Optimization (Bonus - 10 min)
- Use `@apply` in CSS for repeated classes (e.g., badges, layout blocks)

### 10. Dummy Preview Wrapper (Bonus - 10–15 min)
- Create a wrapper showing 2–3 dummy `<worklog-summary-card>`s
- Allow preview across role variations and with/without avatar

---

## ⏱️ Time Estimate Summary

| Task                      | Est. Time |
|---------------------------|-----------|
| Project Setup             | 15 min    |
| Component Structure       | 30 min    |
| Display Data              | 30 min    |
| Role Styling              | 30 min    |
| Responsive Design         | 45 min    |
| Avatar Fallback           | 15 min    |
| View Details Button       | 15 min    |
| Dark Mode (Bonus)         | 20 min    |
| @apply Optimization       | 10 min    |
| Preview Wrapper (Bonus)   | 15 min    |
| **Total Estimate**        | ~3 hrs    |

---

## 🎨 Styling Strategy

- **Utility-first approach** using Tailwind classes directly in templates
- Use `@apply` in component styles for common class groups (badge, card)
- Use `ngClass` for dynamic styles (e.g., role-based badge colors)
- Responsive via Tailwind’s `sm:`, `md:`, `lg:` breakpoints
- Accessibility with semantic HTML (`alt`, `button`, `aria-*`)
- **Dark mode** via Tailwind’s `dark:` class variants
- Graceful fallback with `ngIf` for missing avatar

---

## ✅ Optimization / Simplifications

- Avoid over-engineering — keep it modular but simple
- Fallback avatar will be an icon or initials instead of generating initials from names (for speed)
- Minimal inline logic in template (keep logic in TS if needed)

---

Let me know if you'd like any changes to this plan before I proceed!
