import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Techs from "./pages/Techs";

// Creating the Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <Navbar />
        <Projects />
      </div>
    ),
  },
  {
    path: "/techs",
    element: (
      <div>
        <Navbar />
        <Techs />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
export default App;
