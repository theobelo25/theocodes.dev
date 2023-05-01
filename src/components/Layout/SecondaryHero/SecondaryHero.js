import React from "react"

const SecondaryHero = ({ title, desc }) => {
  return (
    <section
      className="secondary-hero page-section wrapper"
      aria-labelledby="page-title"
    >
      <h1 id="page-title">{title}</h1>
      <p>{desc}</p>
    </section>
  )
}

export default SecondaryHero
