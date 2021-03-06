import React from "react";
import './scss/main.scss'

export default function Splash(props) {

  return(
    <div className='splash-page'> 
      <div className='libbys-div'>
        <h1 className='splash-title'>Jquery knowlege Tester</h1>
        <div className='app-description'>
        <p>This App is used to test your jQuery skills.</p>
        <p>you will be presented with vanilla javascript</p>
        <p>you must write the equivilent JQuery code in the input box</p>
          <p>All questions pulled from <a href='http://youmightnotneedjquery.com/'>You Might Not Need Jquery</a></p>
        </div>
        <button className='splash-button' onClick={props.showMainPage}>Click here to get started</button>
        <form className='difficulty-buttons'>
          <div className='switch'>
            <input className='radios' name='difficulty' type='radio' id='Easy' value='10' defaultChecked />
            <input className='radios' name='difficulty' type='radio' id='Medium' value='20' />
            <input className='radios' name='difficulty' type='radio' id='Hard' value='30' />
            <input className='radios' name='difficulty' type='radio' id='Very Hard' value='41' />
          </div>
        </form>
      </div>
    </div>
  )
}