import React from "react";
import styled from "styled-components";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TypingAnim from "./typer/TypingAnim";
import { useMediaQuery } from "@mui/material"; // 👈 Add this

interface Props {
  type: "login" | "signup";
}

const SplitLayout: React.FC<Props> = ({ type }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // 👉 If on mobile, directly return only the form
  if (isMobile) {
    return type === "login" ? <Login /> : <Signup />;
  }

  // 👉 For desktop: Show split layout
  return (
    <Container>
      <Left>
        <TypingAnim />
      </Left>
      <Right>
        {type === "login" ? <Login /> : <Signup />}
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #170744, #7f00ff);
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SplitLayout;
