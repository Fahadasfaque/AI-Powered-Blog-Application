# Bloggy AI - Backend

Robust Node.js & Express REST API powering the Bloggy AI platform. Handles authentication, database management, image optimization, and AI content generation.

## 🚀 Features

- **Authentication & Security:** Admin login using JWT (JSON Web Tokens) and secure password management.
- **Blog Management:** APIs for creating, reading, updating, and deleting (CRUD) blog posts.
- **AI Content Generation:** Integration with Google Gemini for generating blog content.
- **Image Processing:** Automated image optimization and hosting via ImageKit.
- **Comment System:** moderation API for approving and managing user comments.
- **Dashboard Analytics:** Aggregated data for admin dashboard (views, comments, drafts).
- **Database:** MongoDB with Mongoose for structured data storage.

## 🛠 Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **Authentication:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **AI:** [Google GenAI SDK](https://www.npmjs.com/package/@google/genai) (Gemini)
- **Image Storage:** [ImageKit](https://imagekit.io/) & [Multer](https://github.com/expressjs/multer)
- **Security:** [Cors](https://github.com/expressjs/cors), [Dotenv](https://github.com/motdotla/dotenv)
- **Real-time:** [Socket.io](https://socket.io/)

## 📂 Folder Structure

```
server/
├── configs/             # Database and 3rd-party service configs (DB, ImageKit, Gemini)
├── controllers/         # Request handling logic (Admin, Blog)
├── middleware/          # Express middleware (Auth, File upload)
├── models/              # Mongoose data schemas (Blog, Comment)
├── routes/              # API route definitions
├── server.js            # Entry point and app configuration
├── .env                 # Environment variables
└── package.json         # Dependencies and scripts
```

## ⚙️ Installation & Setup

1.  **Navigate to the server directory:**

    ```bash
    cd server
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

    # Admin Credentials
    ADMIN_EMAIL=your_admin_email
    ADMIN_PASSWORD=your_admin_password

    # ImageKit Configuration
    IMAGEKIT_PUBLIC_KEY=your_public_key
    IMAGEKIT_PRIVATE_KEY=your_private_key
    IMAGEKIT_URL_ENDPOINT=your_url_endpoint

    # Google Gemini AI
    GEMINI_API_KEY=your_gemini_api_key
    ```

## 🏃‍♂️ How to Run

Start the server:

```bash
npm run server
```

Or for development with auto-restart:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## 📡 API Overview

- `GET /api/blog`: Fetch all published blogs
- `POST /api/blog/add`: Create a new blog (Admin only)
- `POST /api/admin/login`: Admin authentication
- `GET /api/admin/dashboard`: Admin dashboard stats
