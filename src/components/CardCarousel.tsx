import React from "react";
import styled, { keyframes } from "styled-components";

const questions = [
  "How come orange juice prices have dropped?",
  "Give me ideas for what to do with my kids’ art",
  "Help me study vocabulary for a college entrance exam",
  "Write an email to request a quote from local plumbers",
  "Cycling groups open to beginners",
  "Write a Python script to automate daily email reports",
  "Design a programming game to teach basics",
  "NBA draft prospects and scouting report",
  "Explain nostalgia to a kindergartener",
  "Best brunch spots near me with outdoor seating",
  "Help me pick an outfit that looks good on camera",
  "Champions League top scorers and highlights"
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="marquee">
        <div className="marquee_header">Explore Nexa-AI Ideas</div>

        {[0, 1, 2].map((row) => (
          <div
            className={`marquee__inner ${row % 2 === 1 ? "reverse" : ""}`}
            key={row}
          >
            <div className="marquee__group">
              {questions.map((q, index) => (
                <span key={index}>{q}</span>
              ))}
            </div>
            <div className="marquee__group">
              {questions.map((q, index) => (
                <span key={`dup-${index}`}>{q}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Card;
const scrollLeft = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
`;

const StyledWrapper = styled.div`
  .marquee {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
  }

  .marquee_header {
    font-size: 26px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 24px;
    color: white;
  }

  .marquee__inner {
    display: flex;
    width: max-content;
    animation: ${scrollLeft} 80s linear infinite;
    margin-bottom: 20px;

    &.reverse {
      animation: ${scrollRight} 80s linear infinite;
    }

    &:hover {
      animation-play-state: paused;
    }
  }

  .marquee__group {
    display: flex;
  }

  .marquee__group span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 60px;
    margin: 0 12px;
    white-space: normal;
    text-align: center;
    border-radius: 12px;
    background: #212121;
    color: white;
    padding: 12px 18px;
    font-size: 0.95rem;
    font-weight: 500;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 768px) {
    .marquee_header {
      font-size: 22px;
      margin-bottom: 18px;
    }

    .marquee__group span {
      width: 220px;
      height: 50px;
      font-size: 0.85rem;
      margin: 0 8px;
      padding: 10px 14px;
    }
  }
`;
