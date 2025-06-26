// components/StyledButtonLink.tsx

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void; // 👈 add this line
}

const StyledButtonLink = ({ to, text, icon, onClick }: Props) => {
  return (
    <Wrapper>
      <NavLink to={to} className="button" onClick={onClick}>
        {icon && <span className="button__icon">{icon}</span>}
        <span className="button__text">{text}</span>
      </NavLink>
    </Wrapper>
  );
};

export default StyledButtonLink;

const Wrapper = styled.div`
  .button {
    text-decoration: none;
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35em;
    padding: .8rem 2rem;
    color: #fff;
    border: 1px solid transparent;
    font-weight: 700;
    border-radius: 2em;
    font-size: 1rem;
    box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    transition: transform 0.3s;
    background: linear-gradient(90deg, #4d36d0 0%, #8474fe 100%);
  }

  .button__icon {
    display: flex;
    align-items: center;
  }

  .button:hover {
    border-color: #f4f5f2;
  }

  .button:active {
    transform: scale(0.98);
    box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
  }
`;
