# Learner Management System (Backend)

This is the backend for the **Learner Management System (LMS)**, which handles authentication, user management, payment processing, and data persistence. The backend is built using **Node.js**, **Express**, and **MongoDB**. It integrates secure user authentication with JWT, handles payment processing using **Razorpay**, and sends emails using **Nodemailer**. It also includes file upload capabilities using **Multer**.

## Features

- **User Authentication**: Secure login and registration with JWT and password hashing using **bcrypt** and **bcryptjs**.
- **Student Management**: API endpoints for creating, reading, updating, and deleting student data.
- **Payment Integration**: Secure payment processing through **Razorpay**.
- **File Uploads**: Supports file uploads for student data or documents using **Multer**.
- **Email Notifications**: Sends automated emails via **Nodemailer** for user registrations and other actions.
- **CORS Support**: Allows cross-origin requests between the frontend and backend.
- **Environment Configuration**: Easily configurable with **dotenv** for managing sensitive data like API keys and database URIs.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js, used to create the API routes.
- **MongoDB**: NoSQL database for storing user and student data.
- **JWT (JSON Web Tokens)**: For securing routes and handling user authentication.
- **bcrypt** & **bcryptjs**: Libraries used to securely hash and compare passwords.
- **Razorpay**: Payment gateway for secure online payments.
- **Multer**: Middleware for handling file uploads.
- **Nodemailer**: Library for sending emails from the server.
- **dotenv**: Manages environment variables for API keys, database URIs, and other sensitive data.
- **UUID**: Used to generate unique identifiers for user and transaction data.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing (CORS).

[Frontend](https://github.com/Balasaraswathi11/Learner-Management-System---FE.git)
