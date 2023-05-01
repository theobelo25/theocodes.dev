import React, { useEffect } from "react"
import { FaShareSquare, FaGithubSquare } from "react-icons/fa"

const CurrentProjectItem = ({ project, accordion, index }) => {
  const { name, id, url, description, homepageUrl } = project

  useEffect(() => {
    accordion.current.addEventListener("click", e => {
      const activePanel = e.target.closest(".accordion-panel")

      if (!activePanel) return
      toggleAccordion(activePanel)

      function toggleAccordion(panelToActivate) {
        const buttons = panelToActivate.parentElement.querySelectorAll("button")
        const contents =
          panelToActivate.parentElement.querySelectorAll(".accordion-content")

        buttons.forEach(button => {
          button.setAttribute("aria-expanded", false)
        })

        contents.forEach(content => {
          content.setAttribute("aria-hidden", true)
        })

        panelToActivate
          .querySelector("button")
          .setAttribute("aria-expanded", true)
        panelToActivate
          .querySelector(".accordion-content")
          .setAttribute("aria-hidden", false)
      }
    })
  }, [])

  return (
    <li className="personal-project accordion-panel">
      <h3 id={`panel${index + 1}-heading`}>
        <button
          className="accordion-trigger"
          aria-controls={`panel${index + 1}-content`}
          aria-expanded={index === 0 ? "true" : "false"}
        >
          <span className="accordion-title" id={`panel${index + 1}-title`}>
            {name}
          </span>
          {/* ADD ICON */}
        </button>
      </h3>
      <div
        className="accordion-content"
        id={`panel${index + 1}-content`}
        aria-labelledby={`panel${index + 1}-heading`}
        aria-hidden={index === 0 ? "false" : "true"}
        role="region"
      >
        <div className="project-text-content">
          <p>{description}</p>
          <div className="project-links">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare color="white" />
              View GitHub Repo
            </a>
            {homepageUrl ? (
              <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
                <FaShareSquare color="white" />
                View Live Page
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default CurrentProjectItem
