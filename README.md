# Task Management REST API

A simple **Task Management REST API** built with **Node.js, Express, TypeScript, Prisma, and PostgreSQL**.
This project demonstrates backend fundamentals including **authentication, CRUD operations, validation, and API documentation**.

It is designed for learning and internship applications.

---

# Features

* User Authentication (Register / Login)
* JWT-based Authorization
* Task CRUD API
* Pagination & Filtering
* Input Validation using Zod
* Database ORM using Prisma
* PostgreSQL database
* Swagger API Documentation
* Postman Collection for API testing

---

# Tech Stack

Backend

* Node.js
* Express.js
* TypeScript

Database

* PostgreSQL
* Prisma ORM

Authentication

* JWT (jsonwebtoken)
* bcrypt

Validation

* Zod

API Documentation

* Swagger (swagger-jsdoc + swagger-ui-express)

Testing

* Postman

---

# Installation

Clone the repository

```
git clone https://github.com/korawit47/RestAPI_Bluepeak.git
```

Enter the project folder

```
cd RestAPI_Bluepeak
```

Install dependencies

```
npm install
```

---

# Environment Variables

Create a `.env` file based on `.env.example`

Example:

```
PORT=3000

DATABASE_URL="postgresql://postgres:password@localhost:5432/taskdb"

JWT_SECRET=supersecret
```

---

# Database Setup

Run Prisma migration

```
npx prisma migrate dev
```

Generate Seed database

```
npx prisma db seed
```

---

# Running the Server

Development mode

```
npm run dev
```

Server will run at

```
http://localhost:3000
```

---

# API Documentation

Swagger documentation is available at

```
http://localhost:3000/docs
```

You can test API endpoints directly in the browser using Swagger UI.

---

# Authentication

This API uses **JWT Bearer Token** authentication.

Example header:

```
Authorization: Bearer YOUR_TOKEN
```

---

# API Endpoints

Auth

```
POST /api/auth/register
POST /api/auth/login
```

Tasks

```
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/:id
PATCH  /api/tasks/:id
DELETE /api/tasks/:id
```

Query Parameters

```
GET /api/tasks?page=1&limit=10
GET /api/tasks?status=todo
```

---

# Postman Collection

You can import the Postman collection located in:

```
/postman/BluePeak.postman_collection.json
```

Steps

1. Open Postman
2. Click Import
3. Select the collection file
4. Start testing the API

---

# Example API Flow

1. Register a user

```
POST /api/auth/register
```

2. Login

```
POST /api/auth/login
```

3. Copy the JWT token

4. Use the token to access task APIs

```
Authorization: Bearer <token>
```

---

# Learning Objectives

This project demonstrates understanding of:

* REST API design
* Authentication with JWT
* Middleware in Express
* Database ORM with Prisma
* Input validation
* API documentation
* Backend project structure

---

# Author

Korawit Sawasdee