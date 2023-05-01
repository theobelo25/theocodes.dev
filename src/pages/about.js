import React from "react"
import { graphql } from "gatsby"

import SecondaryHero from "../components/Layout/SecondaryHero/SecondaryHero"
import WorkExperience from "../components/About/WorkExperience/WorkExperience"
import EducationContainer from "../components/About/Education/EducationContainer"
import SkillsContainer from "../components/About/Skills/SkillsContainer"
import ProjectContainer from "../components/Projects/shared/ProjectContainer"
import CurrentProjectsContainer from "../components/Projects/CurrentProjects/CurrentProjectsContainer"
import AnimatePage from "../components/Util/AnimatePage"
import ResumeDownload from "../components/Util/ResumeDownload"

const about = ({ data }) => {
  const {
    allStrapiEducation: { nodes: educationArray },
    allStrapiWorkExperience: { nodes: experienceArray },
    allStrapiSkill: { nodes: skillArray },
    allStrapiProject: { nodes: featuredProjectsArray },
    githubData: {
      data: {
        user: {
          repositories: { nodes: currentProjects },
        },
      },
    },
    allFile: { nodes: resumeLink },
  } = data

  return (
    <AnimatePage>
      <SecondaryHero
        title="about me"
        desc="Take a look at my online resume below!"
      />
      <WorkExperience experienceArray={experienceArray} />
      <EducationContainer educationArray={educationArray} />
      <SkillsContainer skillArray={skillArray} />
      <ProjectContainer projects={featuredProjectsArray} type="Featured" />
      <CurrentProjectsContainer currentProjects={currentProjects} />
      <ResumeDownload resumeLink={resumeLink} />
    </AnimatePage>
  )
}

export const query = graphql`
  query {
    allStrapiWorkExperience {
      nodes {
        Company
        EndDate
        Location
        Position
        StartDate
        job_details {
          content
          id
        }
        id
      }
      totalCount
    }
    allStrapiEducation {
      nodes {
        degree
        endDate
        id
        location
        name
        startDate
        strapi_id
      }
      totalCount
    }
    allStrapiSkill {
      nodes {
        id
        name
        image {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        slug
        stack {
          id
          title
        }
        title
        url
      }
    }
    githubData {
      data {
        user {
          repositories {
            nodes {
              id
              name
              url
              description
              homepageUrl
            }
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "files" } }) {
      nodes {
        publicURL
      }
    }
  }
`

export default about
