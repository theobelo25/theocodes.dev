import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { BiMenu, BiX } from "react-icons/bi"
import { IconContext } from "react-icons"

const MainNav = () => {
  const links = [
    { title: "about", url: "/about" },
    { title: "portfolio", url: "/portfolio" },
    { title: "contact", url: "/contact" },
  ]
  const primaryNavigation = useRef(null)
  const menuToggle = useRef(null)

  useEffect(() => {
    menuToggle.current.addEventListener("click", () => {
      const visibility = primaryNavigation.current.getAttribute("data-visible")

      if (visibility === "false") {
        primaryNavigation.current.setAttribute("data-visible", true)
        menuToggle.current.setAttribute("aria-expanded", true)
      } else {
        primaryNavigation.current.setAttribute("data-visible", false)
        menuToggle.current.setAttribute("aria-expanded", false)
      }
    })
  }, [])

  return (
    <>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation"
          ref={primaryNavigation}
          data-visible="false"
        >
          {links.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  primaryNavigation.current.setAttribute("data-visible", false)
                  menuToggle.current.setAttribute("aria-expanded", false)
                }}
              >
                <Link to={link.url}>
                  <span className="link-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        ref={menuToggle}
      >
        <span className="sr-only">Menu</span>
        <BiMenu className="closed" />
        <BiX className="open" />
      </button>
    </>
  )
}

export default MainNav
