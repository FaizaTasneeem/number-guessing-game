# Number Guessing Game

A simple React game where you try to guess a secret number between 1 and 100.

## Overview

This project is built with React and Vite. The app generates a random number from 1-100 and gives the player up to 5 attempts to guess it.

After each guess, the app shows feedback:

- Too high
- Too low
- Correct

If you guess correctly, a win modal appears with a confetti animation. If you use all attempts without guessing the number, a reset modal appears so you can restart.

## Features

- Random secret number generation (1-100)
- Input validation for empty submission
- Status feedback after every guess
- Previous guesses history display
- Maximum of 5 guesses per game
- Win modal with confetti effect
- Reset modal when attempts are exhausted
- Restart support to begin a new game

## Tech Stack

- React 19
- Vite 8
- react-confetti
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
.
|- public/
|- src/
|  |- assets/
|  |- components/
|  |  |- ResetModal.jsx
|  |  |- WinModal.jsx
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- vite.config.js
|- eslint.config.js
|- package.json
```

## Game Rules

1. Enter a number between 1 and 100.
2. Click Guess.
3. Read the feedback and try again.
4. You have 5 attempts total.
5. Restart the game from the modal when you win or lose.

## Future Improvements

- Add stricter input validation for out-of-range values
- Add difficulty levels (different ranges and attempt limits)
- Track score and best performance
- Persist game stats in local storage
