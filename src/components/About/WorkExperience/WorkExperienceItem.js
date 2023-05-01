import React, { useState, useRef, useEffect } from "react"
import { Transition } from "react-transition-group"

const WorkExperienceItem = ({ item, index, activeSlide }) => {
  const [isVisible, setIsVisible] = useState(
    index === activeSlide ? true : false
  )
  const transitionRef = useRef(null)

  useEffect(() => {
    if (activeSlide === index) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [activeSlide])

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <Transition
      nodeRef={transitionRef}
      in={isVisible}
      timeout={500}
      mountOnEnter
      appear={true}
    >
      {state => (
        <li
          className="work-experience-item"
          ref={transitionRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <h3>{item.Position}</h3>
          <h4>{item.Company}</h4>
          <div className="job-details">
            <p>{`${item.StartDate} - ${item.EndDate}`}</p>
            <p>{item.Location}</p>
          </div>
          <ul className="job-description-list">
            {item.job_details.map(detail => {
              return <li key={detail.id}>{detail.content}</li>
            })}
          </ul>
        </li>
      )}
    </Transition>
  )
}

export default WorkExperienceItem
