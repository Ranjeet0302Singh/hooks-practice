import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Header>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/usestate-counter">Counter</StyledLink>
      <StyledLink to="/usestate-form">From</StyledLink>
    </Header>
  );
};
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #181818;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
color: #fff;
`;

export default NavBar;
