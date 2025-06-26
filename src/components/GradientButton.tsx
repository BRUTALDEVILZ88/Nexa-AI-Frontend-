import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const GradientButton = ({ to, text }: Props) => {
  return (
    <Wrapper>
      <Link to={to} className="gradient-button">
        {text}
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height={10}
          width={10}
          fill="none"
          className="arrow"
        >
          <path d="M0 5h7" className="line" />
          <path d="M1 1l4 4-4 4" className="arrowhead" />
        </svg>
      </Link>
    </Wrapper>
  );
};

export default GradientButton;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .gradient-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #1f1f1f;
    border-radius: 1rem;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 1;
  }

  .gradient-button::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    background: linear-gradient(90deg, indigo, hotpink, gold);
    filter: blur(10px);
    opacity: 0.6;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  .gradient-button:hover::before {
    opacity: 1;
  }

  .gradient-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }

  .arrow {
    margin-left: 8px;
    stroke: white;
    stroke-width: 2;
  }

  .line {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .gradient-button:hover .line {
    opacity: 1;
  }

  .arrowhead {
    transition: transform 0.2s;
  }

  .gradient-button:hover .arrowhead {
    transform: translateX(3px);
  }
`;
