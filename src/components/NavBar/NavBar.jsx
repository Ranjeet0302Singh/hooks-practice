import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Header>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/usestate-counter">Counter</StyledLink>
      <StyledLink to="/usestate-form">From</StyledLink>
      <StyledLink to="/useeffect-counter">UseEffect</StyledLink>
      <StyledLink to="/useeffect-cleanupfn">UseEffect Clean up function</StyledLink>
      <StyledLink to="/usecontext-Parent">UseContext</StyledLink>
    </Header>
  );
};
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
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
