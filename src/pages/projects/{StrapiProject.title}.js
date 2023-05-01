import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTemplate = ({
  pageContext: { title },
  data: {
    strapiProject: {
      image: { localFile: image },
      stack,
      url,
    },
  },
}) => {
  return (
    <>
      <section className="project-hero" aria-labelledby="page-title">
        <GatsbyImage image={getImage(image)} alt={title} />
        <div className="wrapper">
          <h1 id="page-title">{title}</h1>
        </div>
      </section>
      <section className="description" aria-labelledby="description-title">
        <h2 id="description-title">Description</h2>
      </section>
      <section className="highlighs" aria-labelledby="highlights-title">
        <h2 id="highlights-title">Highlights</h2>
        <p>To do!</p>
      </section>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      stack {
        title
      }
      github
      url
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
