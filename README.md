📌 Project Overview

This project is a modern E-Commerce Web Application built using Next.js (App Router).
It focuses on clean UI, responsive design, authentication flow, and reusable components following best practices.

The application includes:

User Authentication (Register / Login / Logout)

Product listing & product details

Ratings & Reviews system

Similar Products slider

User Dashboard after login

Fully responsive layout (Desktop / Tablet / Mobile)

🚀 Tech Stack

Next.js 13+ (App Router)

React.js

TypeScript

Tailwind CSS

Redux Toolkit

Lucide Icons

ShadCN/UI

Next/Image for image optimization

📁 Project Structure
app/
 ├─ (auth)/
 │   ├─ Login/
 │   ├─ Register/
 │
 ├─ (ecommerce)/
 │   ├─ dashboard/
 │   ├─ products/
 │   ├─ categories/
 │
 ├─ components/
 │   ├─ Header/
 │   ├─ Footer/
 │   ├─ Rating/
 │   ├─ SimilarItems/
 │
 ├─ Redux/
 │   ├─ loginSlice.ts
 │   ├─ registerSlice.ts
 │   ├─ getUserDataSlice.ts
 │   ├─ store.ts
 │
public/
 ├─ assets/

🔐 Authentication Flow
1️⃣ Register

Full Name

Email

Password

Phone Number

Country Code

2️⃣ Login

Email

Password

Token stored in localStorage

User data stored in Redux Store

3️⃣ After Login Behavior ✅

User is redirected automatically to the E-Commerce Dashboard

Dashboard displays:

Welcome message

User name

User information

Access to products & features

4️⃣ Logout

Clears:

Redux state

User data

Token from localStorage

Redirects user back to Login page

🧭 User Dashboard

After successful login, the user is redirected to:

/dashboard

Dashboard Features:

Welcome message (e.g. "Welcome back, Ahmed!")

User profile information

Personalized user experience

Entry point to the e-commerce flow

🧩 Header Component

Logo

Navigation links

Icons (Wishlist, Cart)

Language dropdown

User dropdown:

Login

Register

Logout (handled via Redux)

Mobile version includes:

Slide menu using Sheet component

🦶 Footer Component

Background image with overlay

Company description

Help links

Policy links

Email subscription input

Social media icons (Lucide)

Fully responsive and centered layout

⭐ Rating & Reviews System

Overall rating score

Rating bars (1–5 stars)

Total reviews count

Add comment button

Reviews list with:

User name

Rating stars

Comment

Date

Layout is fully responsive and aligned using flex & grid.

🔁 Similar Items Slider

Displays related products

Custom slider logic (no external libraries)

Navigation buttons

Product cards include:

Image

Category

Rating

Price & discount

Color options

🖼️ Image Handling

Uses Next/Image

All local images start with /

Uses:

fill for responsive images

Optimized loading & performance

📱 Responsive Design

Mobile-first approach

Tailwind breakpoints:

sm

md

lg

xl

Layouts adapt smoothly across all devices

🧠 Best Practices Applied

Reusable components

Clean folder structure

Centralized state management

Separation of concerns

Scalable and maintainable code

UI matched exactly with Figma design

▶️ How to Run the Project
npm install
npm run dev


Then open:

http://localhost:3000

📌 Notes

Project UI follows the provided Figma design

Ready for future backend integration

Easy to extend (Admin Dashboard, Orders, Payments)

👨‍💻 Author

Ahmed Mohamed Ibrahim
Frontend Developer (React.js / Next.js)