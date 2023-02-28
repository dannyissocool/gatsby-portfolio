import React from "react";
import Navbar from "./Navbar.js";
import styled from "styled-components";
import GlobalStyle from "../globalStyles.js";

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Footer = styled.p`
  text-align: center;
  color: #bbb;
  margin: 40px auto;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <GlobalStyle />
      {children}
      <Footer>Copyright 2023 Dan Meuse</Footer>
    </LayoutWrapper>
  );
}
