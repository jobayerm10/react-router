import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Users } from "./components/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
