# Bloggy AI

**Bloggy AI** is a modern, full-stack blogging platform that leverages Artificial Intelligence to assist in content creation. With a sleek frontend and a powerful backend, it offers a seamless experience for both readers and administrators.

## 🌟 Key Features

- **AI-Powered Writing:** Generate high-quality blog drafts instantly using Google Gemini AI.
- **Rich Content Management:** Create beautiful posts with an integrated rich text editor and image handling.
- **Admin Dashboard:** specific panel for managing posts, comments, and viewing site analytics.
- **User Engagement:** Interactive comment system with admin moderation.
- **High Performance:** Fast, responsive frontend built with React & Vite.
- **Secure:** Robust authentication for administrative access.

## 🏗 Tech Stack

### Frontend

- **React** (Vite)
- **Tailwind CSS**
- **Framer Motion**
- **Zustand**

### Backend

- **Node.js & Express**
- **MongoDB** (Mongoose)
- **Google Gemini AI**
- **ImageKit**

## 📂 Project Structure

This is a monorepo-style structure containing both client and server code:

```
Bloggy ai/
├── frontend/    # React client application
└── server/      # Node.js Express API
```

## 🚀 Getting Started

To run the full application locally, you will need to start both the frontend and the backend servers.

### Prerequisites

- Node.js installed
- MongoDB connection URI
- API keys for ImageKit and Google Gemini

### 1. Setup Backend

```bash
cd server
npm install
# Create .env file with necessary credentials (see server/README.md)
npm run dev
```

### 2. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Visit the application at `http://localhost:5173`.

## 🔮 Future Improvements

- **User Auth:** Allow readers to sign up and have profiles.
- **Search Functionality:** Advanced search for blogs.
- **Dark/Light Mode:** User-toggled themes.
- **Social Sharing:** Built-in share buttons for articles.
