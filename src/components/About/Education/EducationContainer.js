import React from "react"

import EducationItem from "./EducationItem"

const EducationContainer = ({ educationArray }) => {
  return (
    <section className="education-container" aria-labelledby="education-title">
      <div className="wrapper">
        <h2 id="education-title">Education</h2>
        <ul className="education-list">
          {educationArray.map((educationItem, index) => {
            return (
              <EducationItem
                key={educationItem.id}
                educationItem={educationItem}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default EducationContainer
