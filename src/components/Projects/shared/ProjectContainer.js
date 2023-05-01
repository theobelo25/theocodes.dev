import React, { useRef } from "react"

import ProfessionalProject from "../ProfessionalProject"
import FreelanceProject from "../FreelanceProject"
import PersonalProject from "../PersonalProject"

const ProjectContainer = ({ projects, type }) => {
  const accordion = useRef(null)

  const handleClick = e => {
    const targetCard = e.target.closest("article")
    const allCards = document.querySelectorAll(".freelance-project")

    if (!targetCard.classList.contains("active")) {
      allCards.forEach(card => card.classList.remove("active"))
      targetCard.classList.add("active")
    } else {
      targetCard.classList.remove("active")
    }
  }

  return (
    <section
      className={`${type.toLowerCase()}-project-container wrapper`}
      aria-labelledby={`${type}-section-title`}
    >
      <h2 id={`${type}-section-title`}>{`${type} Projects`}</h2>
      <ul
        className={`projects${type === "Personal" ? " accordion" : ""}`}
        ref={accordion}
      >
        {projects.map((project, index) => {
          switch (type) {
            case "Professional":
              return (
                <li className="project" key={project.id}>
                  <ProfessionalProject project={project} />
                </li>
              )
              break
            case "Freelance":
              return (
                <li className="project" key={project.id}>
                  <FreelanceProject
                    project={project}
                    handleClick={handleClick}
                  />
                </li>
              )
              break
            case "Personal":
              return (
                <li className="project accordion-panel" key={project.id}>
                  <PersonalProject
                    project={project}
                    index={index}
                    accordion={accordion}
                  />
                </li>
              )
              break
            case "Featured":
              return (
                <li className="project" key={project.id}>
                  <FreelanceProject
                    project={project}
                    handleClick={handleClick}
                  />
                </li>
              )
              break
            default:
              return <></>
          }
        })}
      </ul>
    </section>
  )
}

export default ProjectContainer
