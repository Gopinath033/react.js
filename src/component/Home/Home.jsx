import React from 'react'
import BoxState from '../UseState/BoxState'
import LifeCycle from '../LifeCycle/LifeCycle'

function Home() {

  // const dynamicData_1 = {
  //   name: 'Sun Flower',
  //   icon: '🌻',
  //   aboutMe : ['array_1', 'array_2', 'array_3']
  // }

  // const dynamicData_2= {
  //   name: 'Rose',
  //   icon: '🌹',
  //   aboutMe : ['array_1', 'array_2', 'array_3']
  // }

  return (
    <div>
        <h1>Home</h1>
        <BoxState />
        <LifeCycle />
    </div>
  )
}
  
export default Home