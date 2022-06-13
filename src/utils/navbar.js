import React from "react";
// components
import HomePage from "../pages/Home";
import Generic from "../pages/Generic";
import Propertiespage from "../pages/Properties";
import Detalies from "../components/Detailes";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";

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
    Element: <Propertiespage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: '2-1',
    title: "Properties",
    path: "/properties/:id",
    Element: <Detalies />,
    search: "?",
    hidden: true,
    private: false,
    param:true
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
    title: "SignIn",
    path: "/signin",
    Element: <SignInPage />,
    search: "?",
    hidden: true,
    private: false,
    param:true
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <SignUpPage />,
    search: "?",
    hidden: true,
    private: false,
  },
];
