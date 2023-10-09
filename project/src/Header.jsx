import React from 'react'

function Header({handleClick}) {
  return (
    <>
        <button onClick={() => handleClick("user")}>User</button>
        <button onClick={() => handleClick("post")}>post</button>
        <button onClick={() => handleClick("comment")}>comment</button>
    
    </>
  )
}

export default Header