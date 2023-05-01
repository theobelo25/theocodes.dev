import React from "react"

const FeaturedProjectsContainer = ({ featuredProjectsArray }) => {
  return (
    <section
      className="featured-projects-container"
      aria-labelledby="featured-projects-title"
    >
      <div className="wrapper">
        <h2 id="featured-projects-title">Featured Projects</h2>
      </div>
    </section>
  )
}

export default FeaturedProjectsContainer
