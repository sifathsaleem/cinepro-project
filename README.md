# Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- Browse movies across categories — Now Playing, Popular, Top Rated, and Upcoming
- Search for any movie by title and see results instantly
- Click on a movie to view detailed info including synopsis, rating, and release date
- Toggle between light and dark themes
- Enjoy smooth skeleton loading screens while data is being fetched
- Use the app comfortably on any screen size — desktop, tablet, or mobile

### Screenshot

![CinePro Screenshot](./screenshot.png)

### Links

- Live Site URL: **https://cineproz.netlify.app/**
- GitHub Repository: **https://github.com/sifathsaleem/cinepro-project**

---

## My process

### Built with

- React (with Vite)
- React Router for page navigation
- Custom hooks for data fetching
- TMDB API for live movie data
- Tailwind for styling and theming
- Skeleton loading for smooth UX
- Netlify for deployment

### What I learned

This project was a big step forward for me in React. Here are the things I'm most proud of and what I genuinely learned:

**Building the search functionality**
The search feature was the part I worked hardest on. Connecting the user's input to a live TMDB API call, handling the response correctly, and making sure empty or failed searches showed a clean message — all of that taught me how to manage data flow in React properly. Getting the results to update every time the user types, without breaking anything else on the page, was really satisfying once it clicked.

**Creating a custom hook for data fetching**
Instead of writing `fetch` logic inside every component, I learned how to extract it into a reusable custom hook. This made my components much cleaner and helped me understand one of the most important patterns in React — separating data logic from UI logic.

**Setting up React Router**
This was my first time properly configuring routes in a React app. Setting up separate pages for the home screen and the movie detail view, and navigating between them without a full page reload, felt like a real step up from basic React.

**Skeleton loading animation**
Rather than showing a plain spinner, I implemented skeleton screens that match the shape of the actual content. This made the loading experience feel much smoother and more professional, and it taught me how to think about UX, not just functionality.

---

## Author

- GitHub — [@sifathsaleem](https://github.com/sifathsaleem)
- Live Project — [cineproz.netlify.app](https://cineproz.netlify.app/)