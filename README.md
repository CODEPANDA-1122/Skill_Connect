# Skill Connect: Educational Platform README

Skill Connect is a cutting-edge educational platform that empowers learners and educators by offering seamless course management and learning experiences. This README provides a detailed overview of the project, its architecture, features, technologies, and steps for setting up and contributing.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Introduction

Skill Connect bridges the gap between instructors and learners by providing an intuitive platform for course creation, management, and enrollment. The platform adopts a microservices architecture, ensuring scalability and fault tolerance, and leverages modern technologies like MERN stack and Firebase. 

The system caters to diverse user roles:
- **Admins:** Oversee platform operations, approve content, and manage financial transactions.
- **Instructors:** Create and manage courses, upload content, and monitor learner engagement.
- **Learners:** Browse and enroll in courses, track progress, and manage their learning journeys.

---

## Features

### For Learners:
- **Course Discovery:** Effortlessly search and browse through available courses.
- **Flexible Enrollment:** Enroll in multiple courses simultaneously without conflicts.
- **Progress Tracking:** Monitor progress, review completed modules, and access personalized learning metrics.
- **Secure Payments:** Make course payments through integrated, secure gateways.

### For Instructors:
- **Content Management:** Upload and organize videos, notes, and quizzes with ease.
- **Performance Analytics:** Track learner engagement and course performance.
- **Course Customization:** Edit course details and manage offerings dynamically.

### For Admins:
- **Approval Workflows:** Review and approve instructor-submitted courses.
- **Platform Management:** Manage user accounts, content moderation, and platform configurations.
- **Financial Oversight:** Handle and oversee transactions via integrated payment gateways.

---

## Technologies Used

- **Frontend:** React.js, Bootstrap, Ant Design (antd)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **File Handling:** Firebase
- **Authentication & Security:** JSON Web Tokens (JWT), bcrypt
- **Payment Integration:** Payhere (sandbox environment)

---

## System Architecture

Skill Connect utilizes a **distributed microservices architecture** to separate concerns and enhance system scalability. Each microservice caters to specific functionalities:

1. **Gateway Service:** Handles routing, API aggregation, and authentication.
2. **Admin Service:** Manages administrative functionalities.
3. **Instructor Service:** Facilitates course creation and management.
4. **Learner Service:** Provides course browsing, enrollment, and tracking features.

The platform is designed for high availability, fault tolerance, and scalability.

---

## Project Structure

```
SkillConnect/ 
    ├── gateway/ # API Gateway 
    ├── admin-backend/ # Admin Backend Server 
    ├── instructor-backend/ # Instructor Backend Server 
    ├── learner-backend/ # Learner Backend Server 
    └── frontend/ # React.js Frontend

```
---

## Setup Instructions

### Prerequisites:
- Node.js (v14 or above)
- MongoDB
- Firebase credentials for file storage
- Payment gateway sandbox account

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/SkillConnect.git
   cd SkillConnect
   Install Dependencies: Navigate to each service directory and install dependencies:
   ```

```bash

cd gateway
npm install
cd ../admin-backend
npm install
````
# Repeat for instructor-backend, learner-backend, and frontend
Configure Environment Variables:

Create .env files for each service using .env.example as a reference.
Set values for MONGODB_URI, JWT_SECRET, FIREBASE_CREDENTIALS, and PAYMENT_API_KEYS.
Start Services: Launch each service in separate terminals:

bash```

cd gateway
npm start
cd ../admin-backend
npm start
```
# Repeat for instructor-backend, learner-backend, and frontend
Access Application: Open your browser and navigate to http://localhost:3000.

## API Documentation
Comprehensive API documentation for each backend service is located in their respective directories. Documentation includes:

## Authentication Endpoints
User Management APIs
Course Management APIs
Payment Integration APIs
Refer to:
```bash
admin-backend/docs/
instructor-backend/docs/
learner-backend/docs/
```
# Contributing
We welcome contributions! Here’s how you can help:

## Fork the repository.
Create a new branch for your feature or bugfix:
```bash

git checkout -b feature-name
```
Commit and push your changes.
Submit a pull request with a detailed description of your changes.
Future Enhancements
Mobile App: Launch a dedicated mobile app for enhanced accessibility.
AI-Driven Recommendations: Suggest courses based on learner preferences and behavior.
Gamification: Add badges, achievements, and leaderboards to boost learner engagement.
Live Classes: Introduce real-time interactive classes.
Multilingual Support: Enable courses and UI in multiple languages.
