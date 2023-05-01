import React, { useRef, useState, useEffect } from "react"
import { Transition } from "react-transition-group"

const AnimatePage = ({ children }) => {
  const animationRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)

    return () => {
      setShow(false)
    }
  })

  const duration = 200

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

  const style = {}

  return (
    <Transition
      nodeRef={animationRef}
      in={show}
      timeout={200}
      mountOnEnter
      unmountOnExit
      appear={true}
    >
      {state => (
        <div
          ref={animationRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default AnimatePage
