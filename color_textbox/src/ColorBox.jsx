import React from 'react'
import colorNames from 'color-name'

function ColorBox({textColor, bgColor}) {
  return (
    <div className='box' style={{color: textColor, backgroundColor: bgColor}}>{bgColor ? colorNames('black') : "Empty Value"}</div>
  )
}

export default ColorBox