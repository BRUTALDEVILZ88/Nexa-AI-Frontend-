import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // ✅ uses environment variable
  withCredentials: true,
});


// ===============================
// 🧠 AUTH ROUTES
// ===============================

export const loginUser = async (email: string, password: string) => {
  const res = await API.post("/user/login", { email, password });
  return res.data;
};

export const signupUser = async (name: string, email: string, password: string) => {
  const res = await API.post("/user/signup", { name, email, password });
  return res.data;
};

export const checkAuthStatus = async () => {
  try {
    const res = await API.get("/user/auth-status");
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      // 👇 Graceful fallback when not logged in
      console.warn("User not authenticated yet.");
      return null;
    }
    // ❌ Other errors (like network or server crash)
    console.error("Auth status check failed:", err.message || err);
    return null;
  }
};

export const logoutUser = async () => {
  const res = await API.get("/user/logout");
  return res.data;
};

// ===============================
// 🧠 CHAT ROUTES
// ===============================

export const getAllChats = async () => {
  const res = await API.get("/chat/all-chats");
  return res.data;
};

export const sendChatRequest = async (message: string) => {
  const res = await API.post("/chat/new", { message });
  return res.data;
};

export const deleteUserChats = async () => {
  const res = await API.delete("/chat/delete");
  return res.data;
};
