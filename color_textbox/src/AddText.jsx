import React from 'react'

function AddText({bgColor, setBgColor}) {
    
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
        <input type="text" 
        placeholder='Add color Name'
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
    />
    </form>
  )
}

export default AddText