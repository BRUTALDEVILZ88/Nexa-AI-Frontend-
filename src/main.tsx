// src/main.tsx OR index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab, serif",
    allVariants: { color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
    
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" />
          <App />
        </ThemeProvider>
  
    </BrowserRouter>
  </AuthProvider>
</React.StrictMode>
 
);


