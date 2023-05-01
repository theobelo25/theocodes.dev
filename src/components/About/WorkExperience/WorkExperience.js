import React, { useState } from "react"
import WorkExperienceItem from "./WorkExperienceItem"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const WorkExperience = ({ experienceArray }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleNext = () => {
    if (activeSlide === experienceArray.length - 1) return
    setActiveSlide(activeSlide + 1)
  }

  const handlePrev = () => {
    if (activeSlide === 0) return
    setActiveSlide(activeSlide - 1)
  }

  const handleDotNav = index => {
    setActiveSlide(index)
  }

  const handleTouchStart = e => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext()
    }

    if (touchStart - touchEnd < -150) {
      handlePrev()
    }
  }

  return (
    <section
      className="work-experience"
      aria-labelledby="work-experience-title"
      onTouchStart={e => handleTouchStart(e)}
      onTouchMove={e => handleTouchMove(e)}
      onTouchEnd={() => handleTouchEnd()}
    >
      <div className="wrapper">
        <div className="work-experience-head">
          <h2 id="work-experience-title">Work Experience</h2>
          <div className="work-experience-nav">
            <button className="btn secondary" onClick={() => handlePrev()}>
              <span className="sr-only">back</span>
              <MdArrowBackIos />
            </button>
            <button className="btn secondary" onClick={() => handleNext()}>
              <span className="sr-only">next</span>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
        <ul className="work-experience-slider">
          {experienceArray.map((item, index) => {
            return (
              <WorkExperienceItem
                key={item.id}
                item={item}
                index={index}
                activeSlide={activeSlide}
              />
            )
          })}
        </ul>
        <div className="nav-dots">
          {experienceArray.map((item, index) => {
            return (
              <button
                key={`nav-button-${index}`}
                className={`nav-dot${index === activeSlide ? " active" : ""}`}
                onClick={() => handleDotNav(index)}
              >
                <span className="sr-only">{`Go to slide ${index + 1}`}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
