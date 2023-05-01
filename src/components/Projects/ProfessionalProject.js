import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaShareSquare } from "react-icons/fa"
import ProjectTags from "./shared/ProjectTags"

const ProfessionalProject = ({
  project: {
    url,
    title,
    image: { localFile: image },
    stack,
    slug,
  },
}) => {
  return (
    <article className="professional-project">
      <div className="professional-project-info">
        <h3>{title}</h3>
        <ProjectTags tags={stack} />
        <a
          href={url}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare />
          Visit Site
        </a>
      </div>
      <Link to={`/projects/${slug}`} className="image-container">
        <GatsbyImage
          image={getImage(image)}
          className="project-image"
          alt={title}
        />
      </Link>
    </article>
  )
}

export default ProfessionalProject
