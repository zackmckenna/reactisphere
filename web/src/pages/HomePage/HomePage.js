import { useState, useEffect } from 'react'
import { Link } from '@redwoodjs/router'
import BasicDepth from 'src/components/BasicDepth'

import { level1 } from 'src/level1'

const Header = () => {
  return (
    <div className="block bg-purple-500 rounded text-white p-3">
      <h1 className="text-3xl text-center">Reactisphere</h1>
    </div>
  )
}

const HUD = ({ oxygen, stress, damage }) => {
  return (
    <div className="bg-orange-300 rounded p-3 fixed left-0 top-50">
      <div> Oxygen: {oxygen}</div>
      <div> Damage: {damage}</div>
      <div> Stress: {stress}</div>
    </div>
  )
}

const StartDepth = () => {
  return (
    <div className="w-1/2 p-3 mt-3 mx-auto rounded text-white bg-green-600">
      Start
    </div>
  )
}

const ZoneDepth = () => {
  return (
    <div className="w-1/2 p-3 mx-auto rounded text-white bg-red-600">
      DEPTH ZONE
    </div>
  )
}

const ActionDepth = ({ index, depth }) => {
  return (
    <div
      className="w-1/2 p-3 mx-auto rounded text-white bg-red-600"
      key={index}
    >
      <div className="p-3">
        <h3>Level {index}</h3>
        {depth.availableActions
          ? depth.availableActions.map((action, index) => {
              if (action.stress) {
                return <p>stress {action.stress}</p>
              } else if (action.oxygen) {
                return <p>oxygen {action.oxygen}</p>
              } else {
                return
              }
            })
          : null}
      </div>
    </div>
  )
}

const generateDepth = (depth, index) => {
  switch (depth.type) {
    case 'basic':
      return <BasicDepth index={index} />
    case 'start':
      return <StartDepth />
    case 'depthZone':
      return <ZoneDepth />
    case 'action':
      return <ActionDepth index={index} depth={depth} />
    default:
      return null
  }
}

const HomePage = () => {
  const [oxygen, setOxygen] = useState(0)
  const [stress, setStress] = useState(0)
  const [chapter, setChapter] = useState(0)
  const [stressZone, setStressZone] = useState(0)
  const [damage, setDamage] = useState(0)
  const [dice, setDice] = useState(0)

  useEffect(() => {
    console.log(level1)
  }, [])
  return (
    <>
      <div className="p-3 mx-auto container">
        <Header />
        <HUD oxygen={oxygen} stress={stress} damage={damage} />
        <div className="flex flex-col space-y-6 bg-gray-200">
          {level1.levelDepths.map((depth, index) => {
            return generateDepth(depth, index)
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
