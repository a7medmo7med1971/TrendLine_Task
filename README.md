# Trendline E-Commerce – Frontend Task

## Overview

This project is a **frontend e-commerce application** built as a technical task for **Trendline**. The goal was to implement a modern, scalable, and user-friendly web application using **Next.js**, following best practices in UI development, state management, and authentication flows.

The application demonstrates a complete user journey starting from authentication (register, login, email verification) to accessing a personalized e-commerce experience.

---

## Tech Stack

* **Next.js (App Router)** – React framework for production-ready applications
* **TypeScript** – Type-safe development
* **Tailwind CSS** – Utility-first styling
* **Redux Toolkit** – Global state management
* **Formik + Yup** – Form handling and validation
* **React Hot Toast** – User-friendly notifications
* **Lucide Icons** – Modern icon set

---

## Features

### Authentication Flow

* **Register**

  * Create a new account with full name, email, password, phone number, and country code
  * Client-side validation using Yup
  * API error and success handling

* **Email Verification**

  * OTP-based email verification (6-digit code)
  * Auto-focus between OTP inputs
  * Resend verification code functionality

* **Login**

  * Secure login with email and password
  * Validation and error handling
  * Toast notifications for success and failure

---

### Post-Login Behavior

* After a **successful login**, the user is redirected to the **E-Commerce main page**
* A **User Dashboard** is opened automatically, which includes:

  * Welcome message
  * Basic user information
  * Access to e-commerce features

---

### E-Commerce UI

* Responsive header with navigation and user actions
* Product details page
* Rating & Reviews component
* Similar products section
* Fully responsive layout across devices

---

### State Management

* Global state handled using **Redux Toolkit**
* Separate slices for:

  * Authentication (login / register)
  * Email verification
  * Resend verification code
  * User data

---

### Notifications

* Integrated **react-hot-toast** for:

  * Success feedback (login, register, verification)
  * Error handling (API errors, validation issues)

---

## Project Structure

```
app/
 ├─ (Auth)/
 │   ├─ Login/
 │   ├─ Register/
 │   └─ Verify/
 │
 ├─ (productDetails)/
 │   ├─ products/
 │   └─ components/
 │
 ├─ (components)/
 │   ├─ Header/
 │   ├─ Footer/
 │   └─ Redux/
 │
 ├─ globals.css
 └─ layout.tsx
```

---

## UX & UI Considerations

* Clean and minimal UI inspired by modern e-commerce platforms
* Consistent color palette based on the provided design (Figma)
* Clear validation messages and user feedback
* Fully responsive design (mobile, tablet, desktop)

---

## Author

**Ahmed Mohamed**
Frontend Developer (React.js / Next.js)

---

## Notes

* This project was implemented strictly as a **Frontend Task for Trendline**
* The focus was on clean code, scalability, and real-world production practices
* APIs were integrated as provided

---

Thank you for reviewing this task.
