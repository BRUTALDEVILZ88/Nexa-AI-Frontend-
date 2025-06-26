import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">Go Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #f9f9f9;
  color: #333;

  .content {
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background-color: white;
    max-width: 400px;
    width: 90%;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: #e74c3c;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #007bff;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #0056b3;
  }
`;
