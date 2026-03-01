# ⏰ React Time Utility App
A React application that includes:
**Digital Clock**
**Countdown Timer**
**Alarm System**
This project demonstrates the use of **React Hooks** (useState, useEffect, useRef), **LocalStorage** for persistent data. It also uses **Tailwind CSS** and **ChadCin** for a clean and interactive user interface.
---

## 1️⃣ Digital Clock

- Displays the current time (HH:MM:SS)  
- Updates every second  
- Supports both **12-hour** and **24-hour** formats  
- Buttons to switch between formats  

---

## 2️⃣ Countdown Timer

- Input fields for **minutes** and **seconds**  
- Buttons: **Start** / **Pause** / **Reset**  
- When the timer reaches 0:  
  - Plays a sound  
  - Shows an alert message  
- Saves the current time and running state in **LocalStorage**, so the timer persists after page reload  

---

## 3️⃣ Alarm System

- Set a specific alarm time  
- Choose the duration for the alarm sound  
- Plays a sound and shows an alert when the alarm time is reached  
- Saves alarm settings in **LocalStorage**, so the alarm persists after page reload  
- Stops the alarm sound automatically when pressing OK in the alert  

---

## Technologies Used

- React (Hooks: `useState`, `useEffect`, `useRef`)  
- ChadCin
- Tailwind CSS for styling  
- LocalStorage for persisting alarm and timer settings  
 

---

## Installation

```bash
git clone https://github.com/your-username/react-time-utility.git
cd react-time-utility
npm install
npm start
```
---
 Open http://localhost:3000
 in your browser.
 ---
## Author
**walaa almshaawet**  