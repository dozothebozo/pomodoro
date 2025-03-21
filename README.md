# Personal Pomodoro Timer Project

This will officially be my first project. Why a Pomodoro Timer? I found it to be a very interesting method for working and staying focused. I've seen it used everywhere and knew I needed to try it for myself. The problem is that every website I visited had a horrible UI and was too slow. Some even required a login — who wants to sign in? I'm pretty sure I could have found one among a million Pomodoro timer websites, but creating one myself seems much more reasonable. And so, here we are. Hopefully, by deploying this project for the first time and using it, I will gain the confidence to tackle other interesting and increasingly challenging projects.

# Requirements
- One-page, minimalistic application that fully occupies the viewport.
- Three session buttons:
  - **Pomodoro:** 50 minutes
  - **Short Break:** 10 minutes
  - **Long Break:** 30 minutes
- A timer centered on the page that shows the current session.
- A start/pause button that alternates with a reset button.
- An indicator displaying the current session (e.g., "Session 1 of 4").
- Each work session lasts 50 minutes, followed by a short break. After the fourth session, a long break.
- Session history that tracks and displays completed sessions.
- A settings icon in the top corner opens a modal to edit timer settings.
- A GitHub icon next to the settings icon directs users to the source code.
- Notifications when a session ends.
- Mobile responsiveness and keyboard navigation for all major functions.
- Dark/Light mode options - cus why not

# Tech Stack

- React Deno Vite TypeScript Tailwind Zustand

# Tasks

- Add Tailwind CSS and Zustand  
- Create a one-page, full-viewport layout  
- Configure color themes with Tailwind, including dark/light mode support  
- Implement a dark/light mode toggle  
- Add responsive styles for both mobile and desktop views  
- Set up the Zustand store for global state management  
- Implement Pomodoro cycle logic with default session settings  
- Persist session settings and history using Zustand  
- Create a Timer component with countdown functionality  
- Add start, pause, and reset logic with corresponding control buttons  
- Create a session indicator component (e.g., “Session 1 of 4”)  
- Build a modal for updating settings (e.g., custom session durations)  
- Implement Zustand logic to handle updates to timer settings  
- Add a GitHub icon linking to the project’s repository  
- Add trigger for notifications when a session ends
- Add Audio alerts for session end 
- Enable keyboard navigation for all major actions  

# Other Tasks 

- Skip button to manually end a session early
- Productivity stats/dashboard
