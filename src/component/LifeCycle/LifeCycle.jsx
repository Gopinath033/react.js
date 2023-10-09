import React, { useEffect } from 'react'

function LifeCycle() {

    // const message = 'Update'
    // let [updatedMessage, setUpdatedMessage] = useState(message)
    // setUpdatedMessage(updatedMessage = 'Update done')

    useEffect(() => {
        console.log('Mount')
        return ()=>{
            console.log('Unmount')
        }
    }, [])

  return (
    <div>
        <div><span>updatedMessage</span></div>
    </div>
  )
}

export default LifeCycle