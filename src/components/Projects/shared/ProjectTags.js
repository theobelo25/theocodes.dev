import React from "react"

const ProjectTags = ({ tags }) => {
  return (
    <ul className="project-tags">
      {tags.map(tag => {
        return <li key={tag.id}>{tag.title}</li>
      })}
    </ul>
  )
}

export default ProjectTags
