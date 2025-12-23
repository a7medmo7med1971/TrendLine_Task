# Trendline E-Commerce Frontend Task

This project is a **Frontend E-Commerce Application** built as a technical task for **Trendline**.  
It demonstrates a complete authentication flow, product UI, user dashboard behavior, and clean, scalable frontend architecture using **Next.js**.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Redux Toolkit**
- **Formik & Yup**
- **Tailwind CSS**
- **Shadcn/UI**
- **React Hot Toast**
- **Lucide Icons**

---

## 📦 Features Implemented

### Authentication
- **Register**: Full Name, Email, Password, Phone, Country Code
- **Login**: Email & Password authentication
- **Email Verification**: OTP (6 digits)
- **Resend Verification Code**: Token-based resend functionality
- **Logout**: Secure session termination
- **Token Management**: Secure storage using `localStorage`

### User Flow
- After successful **Login**, user is redirected to the **E-Commerce Home Page**
- Access to a comprehensive **User Dashboard**
- Dashboard includes:
  - Personalized welcome message
  - User profile information
  - Account overview
- Secure logout clears user data and authentication token

### UI Components
- **Responsive Header** with:
  - Navigation menu
  - User dropdown with profile options
  - Language switcher (i18n ready)
- **Product Details Page**: Full product information display
- **Rating & Reviews Component**: Interactive review system
- **Footer**: Pixel-perfect implementation based on Figma design
- **Toast Notifications**: Real-time feedback for success & error states

---

## 📂 Project Structure

```
app/
│
├── (components)/
│   ├── Auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── VerifyEmail.tsx
│   │
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── UserDropdown.tsx
│   │   └── LanguageSwitcher.tsx
│   │
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   ├── ProductDetails/
│   │   ├── ProductInfo.tsx
│   │   ├── RatingReviews.tsx
│   │   └── ProductGallery.tsx
│   │
│   └── Redux/
│       ├── store.ts
│       ├── slices/
│       │   ├── loginSlice.ts
│       │   ├── registerSlice.ts
│       │   ├── verifySlice.ts
│       │   └── resendVerifySlice.ts
│       └── types/
│
├── (pages)/
│   ├── login/
│   ├── register/
│   ├── verify/
│   ├── dashboard/
│   └── products/
│
├── page.tsx
├── layout.tsx
└── globals.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

Check versions:

```bash
node -v
npm -v
```

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/trendline-task.git
cd trendline-task
```

### 3️⃣ Install Dependencies

```bash
npm install
```

If you encounter permission issues on Windows:

```bash
npm install --force
```

Or use yarn:

```bash
yarn install
```

### 4️⃣ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=your_api_base_url
NEXT_PUBLIC_APP_ENV=development
```

### 5️⃣ Run the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

### 6️⃣ Build for Production

```bash
npm run build
npm start
```

---

## 🔐 Authentication Flow

### Token Management
- API authentication uses **Bearer Token** format
- Token is securely stored in `localStorage`
- All protected routes validate token presence
- Automatic token refresh mechanism (if implemented)

### Protected Actions
The following actions require a valid authentication token:
- Email verification
- Resend verification code
- Access to user dashboard
- Logout functionality

### Redux State Management
- **Redux Toolkit** handles all async API calls using `createAsyncThunk`
- Centralized error handling
- Loading states for better UX
- Persistent state management

---

## 🔔 Notifications System

**react-hot-toast** provides real-time feedback for:

- ✅ Login success
- ✅ Registration success
- ✅ Email verification success
- ❌ API errors and validation failures
- ℹ️ Information messages

Toast provider is globally configured in `layout.tsx` for consistent notifications across the application.

---

## 🎨 UI & Design

- Built based on provided **Figma Design**
- **Pixel-perfect** implementation with accurate spacing and colors
- **Fully responsive** design:
  - Mobile (320px - 767px)
  - Tablet (768px - 1023px)
  - Desktop (1024px+)
- **Shadcn/UI** components for consistency
- **Tailwind CSS** for rapid styling
- **Lucide Icons** for modern iconography

---

## 🧪 Form Validation

### Validation Strategy
- All forms validated using **Yup** schema validation
- **Formik** for form state management
- Real-time validation feedback
- Client-side and server-side error handling

### Validation Rules
- **Email**: Valid email format required
- **Password**: Minimum 8 characters, includes uppercase, lowercase, and numbers
- **Phone**: Valid phone number with country code
- **OTP**: Exactly 6 digits

---

## 🧠 State Management Architecture

### Redux Toolkit Slices

1. **loginSlice**
   - Handles user authentication
   - Manages login state and token storage

2. **registerSlice**
   - User registration flow
   - Form data management

3. **verifySlice**
   - Email verification process
   - OTP validation

4. **resendVerifySlice**
   - Resend verification code logic
   - Rate limiting handling

### Store Configuration
- Clean separation of concerns
- Centralized store in `store.ts`
- Type-safe Redux hooks
- Middleware for API calls

---

## 📱 Responsive Design Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

---

## 🔒 Security Features

- Secure token storage
- Protected route middleware
- Input sanitization
- XSS protection
- CSRF token handling (if applicable)
- Secure logout with token invalidation

---

## 📌 Future Improvements

### Short Term
- [ ] Add protected routes middleware at the Next.js level
- [ ] Implement profile edit functionality
- [ ] Add loading skeletons for better perceived performance
- [ ] Improve error boundary implementation

### Medium Term
- [ ] Enhanced dashboard with:
  - Order history
  - Wishlist management
  - Address book
- [ ] Add pagination for product reviews
- [ ] Implement product search and filtering
- [ ] Add shopping cart functionality

### Long Term
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add unit and integration tests (Jest, React Testing Library)
- [ ] Implement PWA features
- [ ] Add internationalization (i18n) for multiple languages
- [ ] Optimize performance (code splitting, lazy loading)
- [ ] Add analytics tracking

---

## 🐛 Known Issues

Currently, there are no known critical issues. Please report any bugs via GitHub Issues.



## 🤝 Contributing

This is a technical task project. For any suggestions or improvements, please reach out directly.

---

## 📄 License

This project is proprietary and created as a technical assessment for Trendline Marketing Solutions.

---

## 👨‍💻 Author

**Ahmed Mohamed**  
Frontend Developer (React.js / Next.js)  
---

## 🏢 Company

This project was developed as a **Frontend Technical Task** for:

**Trendline Marketing Solutions**

---

## 🙏 Acknowledgments

- Trendline team for the opportunity
- Next.js team for the amazing framework
- Shadcn for the beautiful UI components
- Open-source community for all the tools used

---

## 📞 Support

For questions or support regarding this project:

- Open a GitHub Issue
- Contact via email: ahmedmohamedibrahim636@gmail.com

---

**Last Updated**: December 2024  
**Version**: 1.0.0
