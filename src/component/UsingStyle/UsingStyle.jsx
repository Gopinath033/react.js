import React from 'react'
import './UsingStyle.css'

function UsingStyle() {

    //Variable
    const colorStlying = {
        color: 'blue'
    }


  return (
    <div>
        <h3 className='plant'>External Style</h3>
        <h3 style={colorStlying}>Using variable style</h3>
        <h3 style={{ color: 'green'}}> Direct styling using style attribute</h3>
    </div>
  )
}

export default UsingStyle