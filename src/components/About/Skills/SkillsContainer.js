import React from "react"
import SkillsItem from "./SkillsItem"

const SkillsContainer = ({ skillArray }) => {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <div className="wrapper">
        <h2 id="skills-title">Skills</h2>
        <ul className="skills-list">
          {skillArray.map(skill => {
            return <SkillsItem key={skill.id} skill={skill} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default SkillsContainer
