import React from 'react'
import './gameCover.css'

const GameCover = ({ image = "" }) => {
  return (
    <div className="game-cover" style={{ backgroundImage: `url(${image})` }} />
  )
}

export default GameCover