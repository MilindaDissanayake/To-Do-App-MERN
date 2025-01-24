# 📂 MERN Stack Todo Application

## 🔍 Overview

This project is a **Todo Application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It allows users to manage their tasks effectively with features such as adding, editing, deleting, and marking tasks as completed.

---

## 🔧 Features

- ✅ **Add Tasks**: Create new tasks with a title and description.
- 🖋️ **Edit Tasks**: Update existing tasks to reflect changes.
- ❌ **Delete Tasks**: Remove tasks you no longer need.
- 🔒 **Mark as Completed**: Toggle the completion status of tasks.
- 📊 **Responsive Design**: Fully responsive UI for seamless use on any device.

---

## 🛠️ Tech Stack

### Frontend

- 💚 **React.js**: For building the user interface.
- ↔️ **Axios**: For handling API requests.
- 🌈 **CSS/Bootstrap**: For styling and responsive design.

### Backend

- 🔄 **Node.js**: Runtime environment for backend logic.
- 🏓️ **Express.js**: Framework to handle API endpoints.

### Database

- 💾 **MongoDB**: NoSQL database to store task data.
- 🔀 **Mongoose**: ODM library for MongoDB.

---

## 🛠️ Installation and Setup

Follow these steps to set up and run the application locally:

### ✉️ Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### 🔧 Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
```

### 🔧 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   The backend will be running at `http://localhost:5000`.

### 🔧 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will be running at `http://localhost:3000`.

---

## 📁 Folder Structure

```plaintext
mern-todo-app/
|— backend/
|   |— models/       # Mongoose schemas
|   |— routes/       # API endpoints
|   |— server.js     # Entry point for backend
|— frontend/
    |— src/
        |— components/ # React components
        |— App.js       # Main React component
        |— index.js     # Entry point for frontend
```

---

## 🔒 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

