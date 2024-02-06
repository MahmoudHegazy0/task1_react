import React from "react";
import Home from "./componenets/Home/Home";
import About from "./componenets/About/About";
import Contact from "./componenets/Portfolio/Portfolio";
import Portfolio from "./componenets/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
export default function App() {
  let routs = createBrowserRouter([
    {
      path: "/",
      element: (
        <h1>
          <Home />
        </h1>
      ),
    },
    {
      path: "/About",
      element: (
        <h1>
          <About />
        </h1>
      ),
    },
    {
      path: "/Portfolio",
      element: (
        <h1>
          <Portfolio />
        </h1>
      ),
    },
    {
      path: "/Contact",
      element: (
        <h1>
          <Contact />
        </h1>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}
