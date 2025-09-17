A Task Manager Application
The frontend is built with React (Vite) + Material UI, and the backend is built with Node.js + Express + MongoDB.

##  Installation

1. Clone Repository

git clone https://github.com/shekhawatprateek/Task-Manager-App.git
cd task-manager

2. Backend Setup
cd task-manager-backend
npm install


Create a .env file inside task-manager-backend/:

MONGO_URI=mongodb+srv://prateekshekhawat7_db_user:prateek_task_app@taskmanager.dpqjebw.mongodb.net/
JWT_SECRET=task_manager
PORT=8000

(Note: Actual Credential provided above for assignment purpose only)


Run backend:

npm run dev


Backend runs at  http://localhost:8000

3. Frontend Setup
cd task-manager-frontend
npm install
npm run dev


Frontend runs at  http://localhost:5173

 Authentication Flow

Register at /register

Login at /login

After login, JWT is stored in localStorage

Authenticated requests automatically include JWT in headers

 API Endpoints
Auth Routes (/api/auth)

POST /register → Register user
Request:

{ "email": "test@example.com", "password": "123456" }


POST /login → Login user
Request:

{ "email": "test@example.com", "password": "123456" }


Response:

{ "token": "your-jwt-token" }

Task Routes (/api/tasks) 

GET /api/tasks?search=&status=all&page=1&limit=5
Get tasks with optional search, filter, pagination.

POST /api/tasks
Request:

{ "title": "New Task", "description": "Task details" }


PUT /api/tasks/:id
Request:

{ "status": "done" }


DELETE /api/tasks/:id


 Usage

Start backend (npm run dev in task-manager-backend)

Start frontend (npm run dev in task-manager-frontend)

Open http://localhost:5173 in your browser

Register → Login → Manage tasks from the dashboard