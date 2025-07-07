import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  deleteUserChats,
  getAllChats,
  sendChatRequest,
} from "../helpers/api-communicator";
import toast from "react-hot-toast";
//i am done 
type Message = {
  role: "user" | "assistant";
  content: string;
};

const getInitials = (name = "") => {
  const parts = name.split(" ");
  return (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (!content.trim()) return;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.log(error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getAllChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [auth]);

  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      {/* Left Panel */}
      {/* Left Panel */}
<Box
  sx={{
    display: { md: "flex", xs: "flex", sm: "flex" }, // Show on all screens
    flex: { md: 0.2, xs: 1 },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, md: 3 },
    mt: { xs: 0, md: 3 },
  }}
>
  {/* Only show full panel on desktop */}
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      width: "100%",
      height: "60vh",
      bgcolor: "rgb(17,29,39)",
      borderRadius: 5,
      flexDirection: "column",
      mx: 3,
    }}
  >
    <Avatar
      sx={{
        mx: "auto",
        my: 2,
        bgcolor: "white",
        color: "black",
        fontWeight: 700,
      }}
    >
      {getInitials(auth?.user?.name)}
    </Avatar>
    <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
      You are talking to a ChatBOT
    </Typography>
    <Typography
      sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3, textAlign: "center" }}
    >
      You can ask questions related to Knowledge, Business, Advice,
      Education, etc. But avoid sharing personal information.
    </Typography>
    <Button
      onClick={handleDeleteChats}
      sx={{
        width: "200px",
        my: "auto",
        color: "white",
        fontWeight: "700",
        borderRadius: 3,
        mx: "auto",
        bgcolor: red[300],
        ":hover": {
          bgcolor: red.A400,
        },
      }}
    >
      Clear Conversation
    </Button>
  </Box>

  {/* Only show the clear button on mobile */}
  <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%", justifyContent: "center", mt: 2 }}>
    <Button
      onClick={handleDeleteChats}
      sx={{
        bgcolor: red[300],
        color: "white",
        fontWeight: "600",
        px: 3,
        py: 1,
        borderRadius: 2,
        ":hover": {
          bgcolor: red.A400,
        },
      }}
    >
      Clear Conversation
    </Button>
  </Box>
</Box>

      {/* Chat Area */}
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
      Chat powered by Gemini
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>

        {/* Input Box */}
        <div
          style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
