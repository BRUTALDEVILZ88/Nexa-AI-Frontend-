import React from "react";
import styled from "styled-components";
import Login from "../pages/Login";
import Signup from "../pages/Signup"; // import signup
import TypingAnim from "./typer/TypingAnim";

interface Props {
  type: "login" | "signup";
}

const SplitLayout: React.FC<Props> = ({ type }) => {
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
  flex-direction: row;
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
  align-items: center; /* center typing on mobile */

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  ul {
    font-size: 1.2rem;
    line-height: 2.2rem;
    list-style: none;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Right = styled.div`
  flex: 1;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;


export default SplitLayout;
