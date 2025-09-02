# Nyansapo AI - Full-Stack Developer Take-Home Assessment

This repository contains the completed take-home assessment for the Full-Stack Developer role at Nyansapo AI. The project is a React Native (Expo) mobile application designed to help teachers view student performance across different learning strands, aligning with Nyansapo AI's mission to empower educators through technology.

## 🎥 Live Demo & Screenshots

A short video demonstrating the application's features and user flow.

**[➡️ Watch the Demo Video Here](https://www.loom.com/YOUR_VIDEO_LINK_HERE)**

| Class Overview Screen | Student Detail Screen |
| :-------------------: | :-----------------------: |
| ![Class Overview](https://YOUR_SCREENSHOT_URL_HERE_1.png) | ![Student Detail](https://YOUR_SCREENSHOT_URL_HERE_2.png) |

---

## ✨ Features

-   **Class Overview Dashboard:** Displays all learning strands in a clear, card-based layout, each showing a list of students and their competence levels.
-   **Student Search:** A real-time search bar to quickly filter students by name across all strands.
-   **Individual Student Profiles:** A dedicated screen showing a detailed performance breakdown for a selected student, including progress metrics for each learning strand.
-   **Actionable Insights:** An innovative feature that provides teachers with a "Suggested Action" for students who are approaching or below expectations, turning data into actionable steps.
-   **Type-Safe Architecture:** Built entirely with TypeScript for a robust, scalable, and error-free codebase.

---

## 🛠 Technologies Used and Why

I chose a modern, efficient, and scalable tech stack that aligns with best practices for mobile development.

| Technology | Justification |
| :--- | :--- |
| **React Native (Expo)** | A requirement for the project, chosen for its ability to rapidly develop high-quality, cross-platform mobile applications from a single codebase. Expo simplifies the development process with managed workflows and easy access to native APIs. |
| **Expo Router** | Utilized for its modern, file-system-based routing. This approach is intuitive and enables powerful features like type-safe routing, ensuring that all navigation links are valid at compile time, preventing broken links in production. |
| **TypeScript** | Used for the entire frontend to ensure type safety, improve code quality, and enhance developer experience. It allows for the creation of robust data contracts (`/types`) that prevent common runtime errors and make the codebase self-documenting. |
| **Zustand** | Chosen for state management due to its simplicity and minimal boilerplate. For an application of this scale, Zustand provides a powerful and elegant way to manage shared global state (like student and class data) without the complexity of Redux. |
| **Axios** | A reliable, promise-based HTTP client for making API calls. It was used to create a clean, reusable API service layer (`/api`) that separates data fetching logic from the UI components. |
| **Figma** | A link to the Figma design is provided. A design-first approach ensures a thoughtful and consistent user experience. |

---

## 🚀 How to Set Up and Test

To run this project locally, please follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version)
-   An iOS Simulator or Android Emulator (or a physical device with the Expo Go app).

### 1. Backend Setup

The backend is a simple `json-server` that serves the provided data.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server (runs on http://localhost:3000)
npm start
