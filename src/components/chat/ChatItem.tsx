import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message?.includes("```")) {
    return message.split("```");
  }
  return null;
}

function isCodeBlock(str: string) {
  return /[=;[\]{}#]|\/\//.test(str);
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();

  // Get initials safely
  const name = auth?.user?.name || "";
  const nameParts = name.split(" ");
  const initials = nameParts[0]?.[0] || "";
  const secondInitial = nameParts[1]?.[0] || "";
  const userInitials = initials + secondInitial;

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: role === "assistant" ? "#004d5612" : "#004d56",
        gap: 2,
        borderRadius: 2,
        my: 1,
      }}
    >
      <Avatar sx={{ ml: 0, bgcolor: role === "user" ? "black" : "default", color: role === "user" ? "white" : "black" }}>
        {role === "assistant" ? (
          <img src="openai.png" alt="openai" width={"30px"} />
        ) : (
          userInitials
        )}
      </Avatar>

      <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}
        {messageBlocks?.map((block, index) =>
          isCodeBlock(block) ? (
            <SyntaxHighlighter
              key={index}
              style={coldarkDark}
              language="javascript"
            >
              {block}
            </SyntaxHighlighter>
          ) : (
            <Typography sx={{ fontSize: "20px" }} key={index}>
              {block}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default ChatItem;
