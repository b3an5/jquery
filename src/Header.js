import React from 'react'

export default function Header(props) {
  return(
    <div className='header'>
      <h1 className='main-title header-content'>Jquery Quiz</h1>
      <h2 className='score header-content'>Score:<span>{props.score}</span></h2>
    </div>
  )
}