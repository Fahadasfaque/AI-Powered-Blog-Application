# Bloggy AI - Frontend

High-performance, interactive frontend for the Bloggy AI blogging platform, built with modern web technologies to deliver a seamless user and admin experience.

## 🚀 Features

- **Public Blog Interface:** Clean and responsive layout for visitors to browse and read blogs.
- **Admin Dashboard:** Secure interface for administrators to manage content.
- **Rich Text Editor:** Integrated Quill editor for creating formatted blog posts.
- **AI Integration:** UI components to trigger AI-powered content generation.
- **Image Management:** Seamless image upload handling.
- **Comment System:** Interactive comments section for user engagement.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.

## 🛠 Tech Stack

- **Core:** [React](https://reactjs.org/) (v18), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Real-time:** [Socket.io Client](https://socket.io/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** Moment.js, Marked

## 📂 Folder Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── Assets/          # component assets
│   ├── components/      # Reusable UI components
│   │   └── admin/       # Admin-specific components (Login, etc.)
│   ├── configs/         # Configuration files
│   ├── context/         # App context providers
│   ├── pages/           # Page views
│   │   ├── admin/       # Admin pages (Dashboard, AddBlog, etc.)
│   │   ├── Blog.jsx     # Single blog view
│   │   └── Home.jsx     # Landing page
│   ├── App.jsx          # Main application routing
│   └── main.jsx         # Entry point
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── ...config.js         # Config files (Tailwind, Vite, PostCSS, ESLint)
```

## ⚙️ Installation & Setup

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🏃‍♂️ How to Run

start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```
