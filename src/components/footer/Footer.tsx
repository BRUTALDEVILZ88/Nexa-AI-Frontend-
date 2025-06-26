import React from "react";
import Tooltip from "./Tooltip";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "60px",
        backgroundColor: "#111827",
        color: "#d1d5db",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: "6px", fontSize: "16px" }}>
        © {new Date().getFullYear()} Gemini-Powered Conversational Intelligence · All rights reserved.
      </p>
      <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "6px" }}>
        Built using React ⚛️ · Express 🚀 · MongoDB 🍃 · Gemini AI 🧠
      </p>
      <p style={{ fontSize: "14px", color: "#9ca3af",marginBottom: "0px"  }}>
       With Love Rishita  💖

      </p>
    </footer>
  
  );
};

export default Footer;
