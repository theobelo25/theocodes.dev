import React, { useRef } from "react"
import CurrentProjectItem from "./CurrentProjectItem"

const CurrentProjectsContainer = ({ currentProjects }) => {
  const accordion = useRef(null)

  return (
    <section
      className="current-projects-container"
      aria-labelledby="current-projects-title"
    >
      <div className="wrapper">
        <h2 id="current-projects-title">Currently Working On</h2>
        <ul className="current-projects-list accordion" ref={accordion}>
          {currentProjects.map((project, index) => {
            if (index <= 1)
              return (
                <CurrentProjectItem
                  key={project.id}
                  project={project}
                  accordion={accordion}
                  index={index}
                />
              )
          })}
        </ul>
      </div>
    </section>
  )
}

export default CurrentProjectsContainer
