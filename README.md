# Task Management API

This repository contains a backend implementation of a Task Management API built using Node.js, Express, and MongoDB. The API allows users to create, read, update, and delete tasks. This README provides detailed instructions to set up, run, and use the API.

---

## Features

- **Create Task:** Add a new task with a title and description.
- **Get Task(s):** Retrieve all tasks or a specific task by ID.
- **Update Task:** Modify the title, description, or status of an existing task.
- **Delete Task:** Remove a task by ID.

---

## Prerequisites

Ensure the following software is installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Base URL
`http://localhost:3000/api/v1/todo`

### Endpoints

#### 1. **Create Task**
   - **Method:** `POST`
   - **URL:** `/`
   - **Body:**
     ```json
     {
       "title": "Task Title",
       "description": "Task Description"
     }
     ```
   - **Response:**
     ```json
     {
       "status": 201,
       "data": {
         "_id": "task_id",
         "title": "Task Title",
         "description": "Task Description",
         "status": "pending"
       },
       "message": "Task created successfully"
     }
     ```

#### 2. **Get All Tasks**
   - **Method:** `GET`
   - **URL:** `/get`
   - **Response:**
     ```json
     {
       "status": 200,
       "data": [
         {
           "_id": "task_id",
           "title": "Task Title",
           "description": "Task Description",
           "status": "pending"
         }
       ],
       "message": "All tasks fetched successfully"
     }
     ```

#### 3. **Get Task by ID**
   - **Method:** `GET`
   - **URL:** `/get/:id`
   - **Response:**
     ```json
     {
       "status": 200,
       "data": {
         "_id": "task_id",
         "title": "Task Title",
         "description": "Task Description",
         "status": "pending"
       },
       "message": "Task fetched successfully"
     }
     ```

#### 4. **Update Task**
   - **Method:** `PUT`
   - **URL:** `/:id`
   - **Body:** (Any or all fields can be updated)
     ```json
     {
       "title": "Updated Title",
       "description": "Updated Description",
       "status": "completed"
     }
     ```
   - **Response:**
     ```json
     {
       "status": 200,
       "data": {
         "_id": "task_id",
         "title": "Updated Title",
         "description": "Updated Description",
         "status": "completed"
       },
       "message": "Task updated successfully"
     }
     ```

#### 5. **Delete Task**
   - **Method:** `DELETE`
   - **URL:** `/:id`
   - **Response:**
     ```json
     {
       "status": 200,
       "data": {
         "data": "Deleted"
       },
       "message": "Task deleted successfully"
     }
     ```


## Error Handling

- All errors are returned in the following format:
  ```json
  {
    "status": 400,
    "message": "Error message"
  }
  ```

### Postman Collection
fileName : Todo.postman_collection.json