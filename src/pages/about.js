import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const AboutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;

  p {
    color: white;
    text-align: center;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0;
  }
`;

const AboutImg = styled(Img)`
  max-width: 400px;
  margin: 0 auto;
  border-radius: 50%;
  transition: 1.3s all ease;

  :hover {
    transform: rotateX(360deg);
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export default function About({ data }) {
  console.log(data);
  return (
    <Layout>
      <AboutWrapper>
        <AboutImg fluid={data.file.childImageSharp.fluid} />
        <p>
          I'm Danny Meuse. I am a Junior Front End Web Developer focusing on
          React. I love using my style and skills to help clients build modern
          interactive and responsive websites. Contact me for any of your Front
          End needs!
        </p>
      </AboutWrapper>
    </Layout>
  );
}

export const query = graphql`
  query About {
    file(uid: {}, relativePath: { eq: "thumbsUp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
