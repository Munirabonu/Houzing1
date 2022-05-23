import React from "react";
// components
import HomePage from "../pages/Home";
import Generic from "../pages/Generic";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Login",
    path: "/login",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/singnup",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
  },
];
