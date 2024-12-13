# Poshaak

Poshaak is an e-commerce fashion web application built to provide a seamless shopping experience. The app includes authentication via Firebase, a React-based frontend, and persistent storage using LocalStorage. Redux is used to manage the application's state and data flow.

---

## Features

- User authentication via Firebase.
- Intuitive and modern UI for browsing and shopping.
- State management using Redux for efficient data handling.
- Persistent cart and user preferences stored locally.
- Secure and scalable architecture.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **State Management**: Redux
- **Authentication**: Firebase Authentication
- **Storage**: LocalStorage

---

## Installation

### Prerequisites

- Node.js installed on your system.

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/poshaak.git
   cd poshaak
   ```

2. Navigate to the `client` directory and install dependencies:

   ```bash
   cd client
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add the Firebase configuration to `.firebase.js` in the `client` folder.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

---

## Folder Structure

```plaintext
poshaak/
│
├── client/                # React app
│   ├── .firebase/         # Firebase configuration files
│   ├── .git/              # Git repository files
│   ├── dist/              # Build files
│   ├── node_modules/      # Project dependencies
│   ├── public/            # Public assets
│   ├── src/               # Source files
│   │   ├── api/           # API service functions
│   │   ├── assets/        # Static assets (images, icons, etc.)
│   │   ├── components/    # Reusable components
│   │   ├── config/        # Application configuration files
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux state management files
│   │   ├── App.jsx        # Main app file
│   │   ├── index.css      # Global CSS styles
│   │   ├── Layout.jsx     # Layout component
│   │   ├── main.jsx       # Entry point for the React app
│   ├── .eslintrc.cjs      # ESLint configuration
│   ├── .firebaserc        # Firebase project configuration
│   ├── database.rules.json# Firebase database rules
│   ├── firestore.indexes.json # Firestore index configuration
│   ├── firestore.rules    # Firestore security rules
│   ├── index.html         # HTML template
│   ├── package.json       # Project dependencies and scripts
│   ├── package-lock.json  # Dependency lock file
│   ├── postcss.config.js  # PostCSS configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── vite.config.js     # Vite configuration file
│   └── README.md          # Documentation
├── .gitignore             # Files/folders to ignore globally
├── README.md              # Documentation
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the [MIT License](https://github.com/SarJ2004/Poshaak/blob/main/LICENSE).
