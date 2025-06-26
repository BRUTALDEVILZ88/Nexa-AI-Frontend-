import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SplitLayout from "./components/SplitLayout";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
function App() {
  const auth = useAuth();

  return (
   <main >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< SplitLayout type="login"/>} />
        <Route path="/signup" element={<SplitLayout type="signup" />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}


export default App;
