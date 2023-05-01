import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SecondaryHero from "../components/Layout/SecondaryHero/SecondaryHero"
import ProjectContainer from "../components/Projects/shared/ProjectContainer"
import AnimatePage from "../components/Util/AnimatePage"

const query = graphql`
  query {
    allStrapiProject {
      nodes {
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        title
        url
        project_type
        stack {
          id
          title
        }
        github
        slug
      }
    }
  }
`

const Portfolio = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <AnimatePage>
      <SecondaryHero
        title="portfolio"
        desc="A collection of professional, freelance and personal projects that I've worked on."
      />
      <ProjectContainer
        type="Professional"
        projects={projects.filter(project => {
          return project.project_type === "Professional"
        })}
      />
      <ProjectContainer
        type="Freelance"
        projects={projects.filter(project => {
          return project.project_type === "Freelance"
        })}
      />
      <ProjectContainer
        type="Personal"
        projects={projects.filter(project => {
          return project.project_type === "Personal"
        })}
      />
    </AnimatePage>
  )
}

export default Portfolio
