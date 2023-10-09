import React from 'react'

function ToogleButton({handleTextColor}) {

    
  return (
    <button onClick={() => handleTextColor()}>Toggle Text Color</button>
  )
}

export default ToogleButton