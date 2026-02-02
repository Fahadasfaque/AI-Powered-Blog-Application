```markdown
# 🤖 Bloggy AI

![Bloggy AI Banner](public/banner-placeholder.png)

> _An intelligent, full-stack blogging platform that harnesses the power of AI to revolutionize content creation and management._

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)

---

## 🌟 Overview

Welcome to the future of blogging! **Bloggy AI** isn't just another content management system; it's an **AI-powered creative companion** that transforms how you write, manage, and engage with content. Built from the ground up with modern technologies, it seamlessly blends intelligent automation with intuitive design to deliver a premium blogging experience for creators and readers alike.

## ✨ Key Features

- **🤖 AI-Powered Content Generation**: Harness **Google Gemini AI** to generate high-quality blog drafts, overcome writer's block, and refine your ideas instantly.
- **✍️ Rich Text Editor**: Create beautifully formatted posts with an integrated WYSIWYG editor supporting markdown, media embeds, and custom styling.
- **🖼️ Smart Image Management**: Seamless image upload and optimization powered by **ImageKit** for lightning-fast delivery.
- **📊 Admin Dashboard**: Comprehensive control panel featuring:
  - Post management (create, edit, delete, publish)
  - Comment moderation and approval
  - Real-time analytics and insights
  - User engagement metrics
- **💬 Interactive Comments**: Dynamic comment system with threaded replies and admin moderation capabilities.
- **⚡ Lightning Fast**: Built with **Vite** for instant hot module replacement and optimized production builds.
- **🔒 Secure Authentication**: Robust JWT-based authentication system protecting administrative routes.
- **📱 Fully Responsive**: Pixel-perfect design that adapts seamlessly across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack & Libraries

This project leverages cutting-edge technologies across the full stack:

| Category            | Technology              | Usage                                                   |
| :------------------ | :---------------------- | :------------------------------------------------------ |
| **Frontend Core**   | **React 19**            | Component-based UI architecture.                        |
| **Build Tool**      | **Vite**                | Next-generation frontend tooling with HMR.              |
| **Styling**         | **Tailwind CSS 4**      | Utility-first CSS for rapid, consistent styling.        |
| **Animation**       | **Framer Motion**       | Smooth, physics-based animations and transitions.       |
| **State**           | **Zustand**             | Lightweight, performant global state management.        |
| **Backend**         | **Node.js & Express**   | RESTful API server with middleware support.             |
| **Database**        | **MongoDB (Mongoose)**  | NoSQL document database with ODM.                       |
| **AI Engine**       | **Google Gemini AI**    | Advanced language model for content generation.         |
| **Media Storage**   | **ImageKit**            | Cloud-based image optimization and CDN delivery.        |
| **Authentication**  | **JWT**                 | Secure token-based user authentication.                 |

---

## 🚀 Getting Started

Clone the repository and launch both frontend and backend servers in minutes.

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB connection URI
- ImageKit API credentials
- Google Gemini API key
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/bloggy-ai.git

# 2. Enter the directory
cd bloggy-ai
```

### Backend Setup

```bash
# 1. Navigate to server directory
cd server

# 2. Install dependencies
npm install

# 3. Create .env file with required credentials:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# GEMINI_API_KEY=your_gemini_api_key
# IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
# IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
# IMAGEKIT_URL_ENDPOINT=your_imagekit_url

# 4. Start the development server
npm run dev
```

### Frontend Setup

Open a new terminal:

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start the Vite dev server
npm run dev
```

Visit `http://localhost:5173` to experience the magic.

---

## 🏗️ Architecture & Workflow

The project follows a modern **monorepo architecture** with clear separation of concerns:

```
bloggy-ai/
├── frontend/              # React client application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route-based page components
│   │   ├── store/        # Zustand state management
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Helper functions
│   └── public/           # Static assets
│
└── server/               # Node.js Express API
    ├── models/           # Mongoose schemas
    ├── routes/           # API endpoints
    ├── controllers/      # Business logic
    ├── middleware/       # Authentication & validation
    └── config/           # Database & service configs
```

### Key Workflows:

1. **Content Creation Flow**:
   - Admin accesses the dashboard → Clicks "New Post"
   - Uses AI assistant to generate draft or writes manually
   - Uploads images via drag-and-drop (auto-optimized by ImageKit)
   - Previews and publishes → Content instantly available to readers

2. **AI Integration**:
   - Frontend sends prompt to backend API
   - Backend communicates with Google Gemini AI
   - Streams generated content back to the editor in real-time

3. **Authentication**:
   - JWT tokens stored securely
   - Protected routes validate tokens on every request
   - Automatic session refresh and logout on expiry

---

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

Optimized static files will be generated in the `/dist` folder.

### Backend Deployment

Ensure environment variables are configured on your hosting platform (Heroku, Railway, DigitalOcean, etc.).

```bash
cd server
npm start
```

---

## 🔮 Roadmap & Future Enhancements

- **👤 User Authentication**: Allow readers to create accounts, save favorites, and manage profiles.
- **🔍 Advanced Search**: Full-text search with filters (category, date, author, tags).
- **🌓 Dark/Light Mode**: User-toggled theme preferences with persistent storage.
- **📤 Social Sharing**: One-click sharing to Twitter, LinkedIn, Facebook, and Reddit.
- **📧 Newsletter Integration**: Automated email subscriptions and content distribution.
- **📈 SEO Optimization**: Dynamic meta tags, sitemaps, and structured data.
- **🎨 Customizable Themes**: Allow admins to choose from multiple blog layouts.
- **📊 Advanced Analytics**: Integration with Google Analytics or custom dashboard metrics.

---

## 🎨 Credits

Designed and developed with ❤️ by **Fahad Asfaque**.

_Empowering creators with the intelligence of AI._

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Note: This project uses third-party APIs (Google Gemini, ImageKit) which may require separate terms of service compliance._
```
