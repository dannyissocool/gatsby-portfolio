import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const ProjectCard = styled.div.attrs((props) => ({
  color: props.color || "white",
  title: props.title || "Project Name",
}))`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.color};
`;

const ProjectText = styled.div`
  text-align: start;
  padding: 0 20px;
`;

const ProjectImg = styled(Img)`
  max-width: 100%;
`;

export default function Project() {
  const data = useStaticQuery(graphql`
    query Project {
      file(uid: {}, relativePath: { eq: "thumbsUp.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ProjectCard>
      <ProjectImg fluid={data.file.childImageSharp.fluid} />
      <ProjectText>
        <h4>Project Name</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          beatae assumenda ad reprehenderit omnis esse soluta amet nihil.
          Consectetur, incidunt.
        </p>
      </ProjectText>
    </ProjectCard>
  );
}
