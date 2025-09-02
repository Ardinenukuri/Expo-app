
# Nyansapo AI - Full-Stack Developer Take-Home Assessment

This repository contains the completed take-home assessment for the Full-Stack Developer role at Nyansapo AI. The project is a React Native (Expo) mobile application designed to help teachers view student performance across different learning strands, aligning with Nyansapo AI's mission to empower educators through technology.

## 🎥 Live Demo & Screenshots

A short video demonstrating the application's features and user flow.

**[➡️ Watch the Demo Video Here](https://[YOUR_VIDEO_LINK_HERE])**

| Class Overview Screen | Student Detail Screen (with Download button) |
| :-------------------: | :-----------------------: |
| ![Class Overview](https://[YOUR_SCREENSHOT_URL_HERE_1].png) | ![Student Detail](https://[YOUR_SCREENSHOT_URL_HERE_2].png) |

---

## ✨ Features

-   **Class Overview Dashboard:** Displays all learning strands in a clear, card-based layout, each showing a list of students and their competence levels.
-   **Student Search:** A real-time search bar to quickly filter students by name across all strands.
-   **Individual Student Profiles:** A dedicated screen showing a detailed performance breakdown for a selected student, including progress metrics for each learning strand.
-   **Performance Report Downloading:** Natively share a text-based performance report for any student directly from the app, fulfilling the "download" requirement with a mobile-friendly action.
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
| **Expo File System & Sharing** | These official Expo libraries were used to implement the "download" feature in a mobile-native way, allowing teachers to generate and share performance reports using the device's standard share sheet. |
| **Figma** | A link to the Figma design can be provided. A design-first approach ensures a thoughtful and consistent user experience. |

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
```
*Leave this terminal window running.*

### 2. Frontend Setup

In a **new terminal window**:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Expo development server
npm start
```
This will open the Expo developer tools in your browser. You can then:
-   Press `i` to run on an iOS Simulator.
-   Press `a` to run on an Android Emulator.
-   Scan the QR code with the Expo Go app on your physical device.

---

## 🎨 Design Decisions

My design philosophy for this project was centered on **clarity, accessibility, and utility**, keeping in mind the target users—teachers in potentially busy environments.

-   **UI/UX:** I opted for a clean, card-based layout to organize information hierarchically. Each strand and student profile is self-contained, reducing cognitive load. The color palette uses a neutral base with high-contrast, meaningful colors for competence levels, ensuring accessibility and instant comprehension. The "Inter" font was chosen for its excellent legibility on mobile screens.

-   **Application Architecture:** I implemented a clear separation of concerns to create a maintainable and scalable application:
    -   `api/`: For all data-fetching logic.
    -   `state/`: For centralized state management with Zustand.
    -   `components/`: For reusable, self-contained UI elements.
    -   `types/`: For all TypeScript data contracts, creating a single source of truth for data shapes.
    -   `utils/`: For pure helper functions that can be used across the app.

-   **Data Adaptation:** The frontend was architected to adapt to the provided API structure, where class and student data come from separate endpoints. A utility function, `getStrandKeyFromName`, was created to programmatically bridge the human-readable strand names from `/class_profile` with the camelCase data keys in the `/students` endpoint. This demonstrates a robust approach to handling real-world API inconsistencies.

## 📝 Assumptions Made

-   **API Data as Source of Truth:** I assumed the provided `db.json` file is the definitive source of truth and that its structure would remain consistent.
-   **Linking Strand Data:** I made a logical assumption that the human-readable strand name (e.g., "Letter Identification") directly corresponds to the camelCase key in the student performance object (e.g., `letterIdentification`). The `getStrandKeyFromName` utility was built based on this assumption.
-   **Development Environment:** The setup instructions assume a local development environment with Node.js installed and access to `npm`.

## 🌟 Future Enhancements

Given more time, I would love to explore these enhancements to further align with Nyansapo AI's mission:

-   **Offline-First Capability:** For teachers in areas with unreliable internet, I would implement an offline-first strategy using AsyncStorage caching or a more robust solution like WatermelonDB. The app would work seamlessly offline and sync data when a connection is restored.
-   **Accessibility (a11y):** I would conduct a full accessibility audit, ensuring all components are compatible with screen readers and support dynamic font sizes for visually impaired users.
-   **Localization (i18n):** To prepare the app for scaling across East Africa, I would centralize all user-facing strings and implement a localization library to support multiple languages, such as Swahili.

```
