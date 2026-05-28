# Next.js QA Automation Assignment

## Overview

This project demonstrates enterprise-level QA automation for a Next.js (App Router) application using **Jest** and **React Testing Library** (RTL). It covers:

- Component unit and interaction tests
- Async API mocking
- jsdom environment
- Coverage reporting (≥80%)
- Clean, reusable, accessible UI with Tailwind CSS

## Folder Structure

```
/components
  Button.js
  Card.js
  Counter.js
  Input.js
  UserList.js
/__tests__
  Button.test.js
  Card.test.js
  Counter.test.js
  Input.test.js
  UserList.test.js
jest.config.js
jest.setup.js
README.md
```

## Setup & Installation

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd week-12
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the App

Start the Next.js dev server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the UI playground.

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## Coverage Report

- Coverage is enforced at ≥80% for branches, statements, functions, and lines.
- After running coverage, open `coverage/lcov-report/index.html` for a detailed report.

## Project Process & Explanation

### 1. **Jest + RTL Setup**

- Configured Jest with `jest.config.js` for jsdom, RTL setup, and coverage thresholds.
- `jest.setup.js` imports RTL matchers for better assertions.

### 2. **Component Development**

- Built 5 reusable components: Button, Card, Input, Counter, UserList.
- All components are functional, use React hooks, and are styled with Tailwind CSS.

### 3. **Testing Strategy**

- **Unit tests**: Each component is tested for rendering, props, and accessibility.
- **Interaction tests**: Used `userEvent` and `fireEvent` to simulate real user actions (click, type).
- **Async tests**: UserList fetches data; tests mock `fetch` for loading, success, and error states.
- **Branch coverage**: All code paths (including error/fallback) are tested.

### 4. **Mocking & Isolation**n- All network requests are mocked using `jest.fn()` and `global.fetch`.

- No real HTTP calls are made; tests are deterministic and CI-friendly.

### 5. **CI/CD & Enterprise Practices**

- Scripts (`test`, `test:watch`, `test:coverage`) match enterprise CI/CD expectations.
- Coverage thresholds prevent regressions.
- All tests run in jsdom for fast, browser-like simulation.

## Key Commands

- `npm run dev` — Start Next.js app
- `npm test` — Run all tests
- `npm run test:watch` — Watch mode
- `npm test -- --coverage` — Coverage report

## Viva/Interview Prep

- **Jest**: How does Jest isolate tests? Why use `jest.fn()`?
- **RTL**: Why test from the user's perspective? What does `screen` do?
- **Mocking**: Why mock fetch? How do you reset mocks?
- **Coverage**: What is branch coverage? Why is it important?
- **jsdom**: What are jsdom's limitations vs. a real browser?
- **userEvent vs fireEvent**: Which is more realistic and why?

## Author

- QA Automation Assignment — Next.js, Jest, RTL, Tailwind CSS

---

**For any issues, please open an issue or contact the maintainer.**
