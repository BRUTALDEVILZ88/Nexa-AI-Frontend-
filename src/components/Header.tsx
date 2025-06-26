import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import StyledButtonLink from "./StyledButtonLink"; // <-- yeh import naya hai

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{
        bgcolor: "var(--card-color)", 
        position: "static",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div style={{ display: "flex", gap: "1rem" }}>
          {auth?.isLoggedIn ? (
            <>
              <StyledButtonLink to="/chat" text="Go To Chat" />
              <StyledButtonLink
                to="/"
                text="Logout"
                icon={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height={20}
                    width={20}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21H13.5a2.25 2.25 0 002.25-2.25V15"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H9m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                }
                
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <StyledButtonLink
                to="/login"
                text="Login"
                icon={
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                }
              />
              <StyledButtonLink to="/signup" text="Signup" />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
