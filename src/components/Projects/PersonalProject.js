import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProjectTags from "./shared/ProjectTags"
import { FaShareSquare, FaGithubSquare } from "react-icons/fa"

const PersonalProject = ({
  project: {
    url,
    title,
    image: { localFile: image },
    stack,
    github,
  },
  index,
  accordion,
}) => {
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
    <article className="personal-project">
      <h3 id={`panel${index + 1}-heading`}>
        <button
          className="accordion-trigger"
          aria-controls={`panel${index + 1}-content`}
          aria-expanded={index === 0 ? "true" : "false"}
        >
          <span className="accordion-title" id={`panel${index + 1}-title`}>
            {title}
          </span>
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
          <p>
            I'm baby venmo meditation fashion axe hashtag sus, asymmetrical
            synth kombucha artisan literally pug pork belly. La croix air plant
            hell of marfa copper mug portland chillwave tonx dreamcatcher
            narwhal polaroid chia vice crucifix.
          </p>
          <ProjectTags tags={stack} />
          <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
              View GitHub Repo
            </a>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaShareSquare />
              Visit Live Site
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <GatsbyImage
            image={getImage(image)}
            className="project-image"
            alt={title}
          />
        </div>
      </div>
    </article>
  )
}

export default PersonalProject
