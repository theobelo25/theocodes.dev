import React from "react"

const EducationItem = ({ educationItem }) => {
  const { name, degree, location, startDate, endDate } = educationItem

  return (
    <li className="education-item">
      <div>
        <h3>{name}</h3>
        <h4>{degree}</h4>
      </div>
      <div>
        <p>{location}</p>
        <p>{`${startDate} - ${endDate}`}</p>
      </div>
    </li>
  )
}

export default EducationItem
