# Course Selling Platform Backend

This is a backend project for a Course Selling Platform built using Node.js, Express.js, TypeScript, and Prisma ORM.

The main purpose of this project is to create the backend structure, API routes, and Prisma schema. As mentioned in the assignment, the database is not connected, so the APIs return sample responses only.

## Project Structure
```
src
│
├── controllers
├── routes
├── middlewares
├── prisma
├── app.ts
└── server.ts
```

## Setup

Clone the repository:

```bash
git clone <repository-url>
```

Go to the project folder:

```bash
cd course-selling-backend
```

Install the required packages:

```bash
npm install
```

Run the server:

```bash
npm run dev
```

## API Routes

### Authentication

* POST /auth/register
* POST /auth/login

### Courses

* GET /courses
* POST /courses
* GET /courses/:id

### Students

* POST /students
* GET /students/:id

### Enrollments

* POST /enrollments
* GET /enrollments

## Prisma Models

* User
* Student
* Staff
* Course
* Enrollment

## Relationships

* User → Student (1:1)
* User → Staff (1:1)
* Staff → Course (1:M)
* Student → Enrollment (1:M)
* Course → Enrollment (1:M)

This project was created as part of a backend assignment to practice Express.js routing, controller structure, and Prisma schema design.
