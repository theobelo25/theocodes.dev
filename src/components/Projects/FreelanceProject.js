import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProjectTags from "./shared/ProjectTags"
import { FaShareSquare } from "react-icons/fa"

const FreelanceProject = ({
  project: {
    url,
    title,
    image: { localFile: image },
    stack,
  },
  handleClick,
}) => {
  return (
    <article className="freelance-project" onClick={e => handleClick(e)}>
      <div className="image-container">
        <GatsbyImage
          image={getImage(image)}
          className="project-image"
          alt={title}
        />
      </div>
      <section className="freelance-project-content">
        <h3>{title}</h3>
        <ProjectTags tags={stack} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          Live Site
          <FaShareSquare />
        </a>
      </section>
    </article>
  )
}

export default FreelanceProject
