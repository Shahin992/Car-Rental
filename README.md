# [Car Booking System](https://rental-car-reservation.netlify.app/)

This is a **Car Booking System** web application built using **React**, **Vite**, **TypeScript**, **Redux**, and **Tailwind CSS**. The system includes features like user authentication, car listing, car booking, admin and user dashboards, and more.

## Features

- **Car Listing & Details**: Users can browse through available cars and view detailed information.
- **User Authentication**: Includes login and signup pages.
- **Booking System**: Users can book cars and manage their bookings through a dashboard.
- **Admin Panel**: Admins can manage users, car listings, and bookings.
- **Protected Routes**: Certain routes (like booking, admin) are protected and can only be accessed by logged-in users.
- **Responsive Design**: Built using Tailwind CSS to provide a responsive UI.

## Routes

The application follows a modular route structure using `react-router-dom` and includes:

- `/`: Home Page
- `/car-listing`: Lists all available cars for booking.
- `/car-details/:carId`: View detailed information about a specific car.
- `/about-us`: Company information.
- `/privacy-policy`: View the privacy policy.
- `/contact-us`: Contact page.
- `/login`: Login page.
- `/signup`: User registration page.
- `/booking`: Booking form (Protected route).
- `/user/booking-confirmation`: Booking confirmation (Protected route).
- `/admin`: Admin dashboard (Protected route).
- `/user/dashboard/user-update`: User profile update (Protected route).

### Admin and User Routes

- Admin and user routes are generated dynamically using `routeGenarator`.
- Protected routes are managed with the `ProtectedRoute` component to ensure only logged-in users can access specific pages.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahmudmhb/Car-Rental-Reservation-System
   cd car-booking-system
   ```
   Install dependencies:

```bash
npm install
# or, if you are using yarn
yarn install
```

Create an .env file in the root directory and add the required environment variables:

```bash
VITE_API_BASE_URL=your-api-base-url
VITE_OTHER_ENV_VARIABLE=your-other-env-value
```

Scripts
Here are the available scripts you can run:

Development: Start the development server:

```bash
npm run dev
```

Build: Build the project for production:

```bash
npm run build
```

Preview: Preview the production build locally:

```bash
npm run preview
```

Lint: Run ESLint to check for linting issues:

```bash
npm run lint
```

Technologies Used
The project uses the following key dependencies:

- React - JavaScript library for building user interfaces
- Vite - Build tool for fast development
- Redux Toolkit - For state management
- Tailwind CSS - CSS framework
- React Router - Client-side routing
- Framer Motion - Animations
- DaisyUI - Tailwind CSS components
