import React from "react"

const SkillsItem = ({ skill }) => {
  const {
    name,
    image: {
      localFile: { publicURL: url },
    },
  } = skill

  const handleClick = e => {
    const cards = document.querySelectorAll(".skill-name-card")
    const card = e.target.closest("div")

    cards.forEach(card => {
      card.classList.remove("active")
      card.setAttribute("aria-expanded", false)
    })

    card.classList.add("active")
    card.setAttribute("aria-expanded", true)
  }

  return (
    <li className="skill" aria-labelledby={`${name}-card-title`}>
      <div className="skill-image-container">
        <img src={url} alt={name} />
      </div>
      <div
        className="skill-name-card"
        onClick={e => handleClick(e)}
        role="button"
        aria-controls={`${name}-card-title`}
        aria-expanded="false"
      >
        <h3 id={`${name}-card-title`}>{name}</h3>
      </div>
    </li>
  )
}

export default SkillsItem
