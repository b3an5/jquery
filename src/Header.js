import React from 'react'

export default function Header(props) {
  return(
    <div className='header'>
      <h1 className='main-title header-content'>Jquery Quiz</h1>
      <button className='question-button reset-button' onClick={props.resetGame} >Reset Game</button>
      <h2 className='score header-content'>Score:<span>{props.score}</span></h2>
      <h2 className='high-score header-content'>High Score:<span>{JSON.parse(localStorage.getItem('highScore'))}</span></h2>
    </div>
  )
}