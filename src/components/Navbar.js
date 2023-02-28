import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavBody = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px auto;
`;

const Logo = styled.div`
  font-size: 2rem;

  a {
    color: white;
    display: inline-block;

    :hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Links = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;

  a {
    display: inline-block;
    text-align: right;
    color: white;

    :hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      text-align: center;
    }
  }
`;

export default function Navbar() {
  return (
    <NavBody>
      <Logo>
        <Link to="/">Meuse</Link>
      </Logo>
      <Links>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Links>
    </NavBody>
  );
}
