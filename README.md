# angular-youtube

A simple YouTube-style Angular application with three main pages: **Home**, **Search**, and **Video**.

---

## Live Demo
- [Click Here](https://ahmedmahmoud6.github.io/angular-youtube/)

---

## 📌 Pages Overview

### 🏠 Home Page
- Displays a list of videos.
- Supports **infinite scroll** to load more videos as you scroll.
- **Hovering** on a video card automatically **plays a preview**.
- Clicking a video routes the user to the Video Page.

### 🔍 Search Page
- Allows users to search for videos by **keyword or topic**.
- Shows a list of videos matching the searched term.
- Clicking a video navigates to the Video Page.

### 🎬 Video Page
- Shows the **embedded video player** for the selected video.
- Includes a **comments section**:
  - Displays comments.
  - Each comment includes its **replies**.
- Includes a **suggested videos** section.
- Each suggested video is clickable and routes to a new Video Page for that video.

## 📱 Responsiveness

- The entire application is **fully responsive**.
- Layout adapts smoothly to **mobile**, **tablet**, and **desktop** screen sizes.
- Video cards resize based on screen width.
- The Video Page rearranges:
  - Suggested videos move below the player on smaller screens.
  - Comments remain readable and well-structured on all devices.
- Hover previews are disabled or adjusted on touch devices for better usability.

