import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import GlobalStyle from "../globalStyles";
import { Link } from "gatsby";

const SplashWrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const SplashHeader = styled.div`
  width: 80%;
  margin: 30px auto;
  color: white;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  margin: 20px auto;
  padding: 10px 24px;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s all ease;
  background: #bbb;
  color: black;

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ImgWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;

  img {
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <GlobalStyle />
      <title>Meuse Portfolio</title>
      <SplashWrapper>
        <SplashHeader>
          <h1>
            I'm Danny
            <br />
            <span>I'm a Front End Developer </span>
          </h1>
          <ButtonLink to="/projects">My Projects</ButtonLink>
        </SplashHeader>
        <ImgWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImgWrapper>
      </SplashWrapper>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(uid: {}, relativePath: { eq: "remySelfie.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
