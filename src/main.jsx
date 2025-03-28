import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LayoutPage from "./layout/LayoutPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import EventPage from "./pages/EventPage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import SponsorPage from "./pages/SponsorPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import SingleRegistrationPage from "./pages/SingleRegistrationPage.jsx";
import SingleEvent from "./pages/SingleEvent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "event",
        element: <EventPage />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "sponsor",
        element: <SponsorPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/success/:id",
        element: <SuccessPage />,
      },
      {
        path: "/single/:id",
        element: <SingleRegistrationPage />,
      },
      {
        path: "/singleevent/:id",
        element: <SingleEvent />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
