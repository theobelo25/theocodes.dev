import React, { useEffect, useRef, useState } from "react"
import anime from "animejs"

import "../../assets/styles/components/TileBackground.scss"

const TileBackground = () => {
  const numTiles = 50
  const [columns, setColumns] = useState(
    Math.floor(document.body.clientWidth / numTiles)
  )
  const [rows, setRows] = useState(
    Math.floor(document.body.clientHeight / numTiles)
  )
  const wrapper = useRef(null)

  useEffect(() => {
    createGrid()
    window.onresize = () => createGrid()
  }, [])

  const colors = [
    "rgb(229, 57, 53",
    "rgb(253, 216, 53",
    "rgb(244, 81, 30",
    "rgb(76, 175, 80",
    "rgb(33, 150, 243",
    "rgb(156, 39, 176",
  ]

  // let count = -1
  let toggled = false

  const handleClick = index => {
    // count++
    toggled = !toggled

    anime({
      targets: ".tile",
      // backgroundColor: colors[count % (colors.length - 1)],
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    })
  }

  const createTile = index => {
    const tile = document.createElement("div")

    tile.classList.add("tile")

    tile.onclick = e => handleClick(index)

    return tile
  }

  const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      return wrapper.current.appendChild(createTile(index))
    })
  }

  const createGrid = () => {
    wrapper.current.innerHTML = ""
    setColumns(Math.floor(document.body.clientWidth / numTiles))
    setRows(Math.floor(document.body.clientHeight / numTiles))

    wrapper.current.style.setProperty("--columns", columns)
    wrapper.current.style.setProperty("--rows", rows)

    createTiles(columns * rows)
  }

  return <div id="tiles" ref={wrapper}></div>
}

export default TileBackground
