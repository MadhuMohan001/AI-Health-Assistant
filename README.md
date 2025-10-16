# AI-Health-Assistant 🚀

AI-Health-Assistant is a responsive web application built with **React** and **Vite**, designed to assist users in accessing health-related information and AI-powered assistance. This project demonstrates modern frontend development practices, including component-based architecture, environment variable management, and responsive design.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

---

## Features

- **AI-Powered Health Assistance** – Interact with the system to get health-related suggestions.
- **Responsive Design** – Works seamlessly on desktop and mobile devices.
- **Secure Configuration** – API keys managed through environment variables, never hardcoded.
- **Modern Frontend Stack** – Built with React, Vite, and ESLint for high code quality.


---

## Architecture

The project follows a **component-based architecture** with a clear separation of concerns:

```
AI-Health-Assistant/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ pages/            # Application pages
│  ├─ utils/            # Utility functions (e.g., API handlers)
│  ├─ App.jsx           # Main application
│  └─ index.jsx         # Entry point
├─ .env                 # Environment variables (not committed)
├─ package.json
└─ README.md
```

---

## Installation

### Prerequisites

- Node.js v16+
- npm or yarn

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/MadhuMohan001/AI-Health-Assistant.git
```

2. **Navigate to the project folder:**

```bash
cd AI-Health-Assistant
```

3. **Install dependencies:**

```bash
npm install
# or
yarn install
```

4. **Create a `.env` file in the root and add your API keys:**

```env
HUGGINGFACE_API_KEY=your_api_key_here
```

5. **Start the development server:**

```bash
npm run dev
# or
yarn dev
```

6. **Open your browser at:**  
```
http://localhost:3000
```

---

## Usage

- The app fetches AI-driven health responses based on user input.
- Always keep sensitive API keys in `.env` and **never commit them**.

---

## Technologies Used

- **Frontend:** React, Vite
- **Styling:** CSS / Tailwind (if applicable)
- **Code Quality:** ESLint
- **API Integration:** Hugging Face or other AI APIs

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/YourFeature
```

3. Make changes and commit:

```bash
git commit -m "Add YourFeature"
```

4. Push to branch:

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request


---

## Acknowledgements

- **[React](https://reactjs.org/)** – JavaScript library for building UI
- **[Vite](https://vitejs.dev/)** – Fast frontend build tool
- **[Hugging Face](https://huggingface.co/)** – AI/ML models
- **[ESLint](https://eslint.org/)** – Code quality and linting
- **[ESLint](https://eslint.org/)** – Code quality and linting